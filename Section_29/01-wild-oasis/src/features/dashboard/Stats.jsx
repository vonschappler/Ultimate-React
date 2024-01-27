import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookgins = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const checkIns = confirmedStays.length;
  const occupancy =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        value={numBookgins}
        title='Bookings'
        color='blue'
        icon={<HiOutlineBriefcase />}
        key='bookings'
      />
      <Stat
        value={formatCurrency(sales)}
        title='Sales'
        color='green'
        icon={<HiOutlineBanknotes />}
        key='sales'
      />
      <Stat
        value={checkIns}
        title='Check-ins'
        color='indigo'
        icon={<HiOutlineCalendarDays />}
        key='checkins'
      />
      <Stat
        value={`${Math.floor(occupancy * 100)}%`}
        title='Occupancy Rate'
        color='yellow'
        icon={<HiOutlineChartBar />}
        key='occupancy'
      />
    </>
  );
}

export default Stats;
