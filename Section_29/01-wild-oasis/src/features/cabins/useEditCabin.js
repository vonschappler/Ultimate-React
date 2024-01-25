import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createEditCabin as editCabinApi } from '../../services/apiCabins';


export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => editCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries(['cabins']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditing };
}
