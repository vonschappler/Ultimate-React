import { useQuery } from '@tanstack/react-query';
import { getBookings as getBookingsApi } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue };

  const sortBy = searchParams.get('sort') || 'startDate-desc';
  const [field, direction] = sortBy.split('-');
  const sort = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sort],
    queryFn: () => getBookingsApi({ filter, sort }),
  });

  return { isLoading, bookings, error };
}
