import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateSetting as editSettingApi } from '../../services/apiSettings';

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { mutate: editSetting, isLoading: isEditing } = useMutation({
    mutationFn: editSettingApi,
    onSuccess: () => {
      toast.success('Settings successfully updated');
      queryClient.invalidateQueries(['settings']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editSetting, isEditing };
}
