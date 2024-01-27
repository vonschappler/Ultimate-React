import supabase, { supabaseUrl } from './supabase';

export function signUp({ fullName, email, password }) {
  const { data, error } = supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: '',
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data: updateName, error: updateNameError } =
    await supabase.auth.updateUser(updateData);

  if (updateNameError) {
    console.error(updateNameError);
    throw new Error(updateNameError.message);
  }

  if (!avatar) return updateName;
  const fileName = `avatar-${updateName.user.id}-${Math.random()}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(fileName, avatar);

  if (uploadError) {
    console.error(uploadError);
    throw new Error(uploadError.message);
  }

  const { data: updateAvatar, error: updateAvatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateAvatarError) {
    console.error(updateAvatarError);
    throw new Error(updateAvatarError.message);
  }

  return updateAvatar;
}
