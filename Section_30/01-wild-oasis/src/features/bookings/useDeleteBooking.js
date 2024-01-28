import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';
import { toast } from 'react-hot-toast';

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`Booking deleted with succes`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error(`Unable to delete the selected booking`);
    },
  });

  return { isDeleting, deleteBooking };
}
