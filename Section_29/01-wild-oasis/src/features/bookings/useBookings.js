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
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sort, page],
    queryFn: () => getBookingsApi({ filter, sort, page }),
  });

  return { isLoading, bookings, error, count };
}
