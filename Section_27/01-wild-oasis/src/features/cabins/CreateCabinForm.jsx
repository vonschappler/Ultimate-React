import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { createEditCabin } from '../../services/apiCabins';

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries(['cabins']);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries(['cabins']);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession)
      editCabin({ newCabinData: { ...data, image }, id: editId });
    else createCabin({ ...data, image });
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name: ' error={errors?.name?.message}>
        <Input
          disabled={isWorking}
          type='text'
          id='name'
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label='Maximum capacity: ' error={errors?.maxCapacity?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price: ' error={errors?.regularPrice?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Regular price should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Discount: ' error={errors?.discount?.message}>
        <Input
          disabled={isWorking}
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              Number(value) <= Number(getValues().regularPrice) ||
              'Discount should be less than the regular price',
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website: '
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isWorking}
          type='number'
          id='description'
          defaultValue=''
          {...register('description', {
            required: 'This field is required...',
          })}
        />
      </FormRow>

      <FormRow label='Cabin image: ' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          {...register('image', {
            required: isEditSession ? false : 'This field is required...',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset' disabled={isWorking}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? `Edit cabin` : `Create new cabin`}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
