import styled from 'styled-components';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

import DashboardBox from './DashboardBox';
import Heading from '../../ui/Heading';
import { useDarkMode } from '../../context/DarkModeContext';
import {
  eachDayOfInterval,
  format,
  formatDate,
  isSameDay,
  subDays,
} from 'date-fns';

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  width: 100%;
  height: 500px;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.extrasPrice, 0),
    };
  });

  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };
  return (
    <StyledSalesChart>
      <Heading>
        Sales from {formatDate(allDates.at(0), 'MMM dd yyyy')} to{' '}
        {formatDate(allDates.at(-1), 'MMM dd yyyy')}
      </Heading>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray='4' />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <XAxis
            dataKey='label'
            tick={{
              fill: colors.text,
            }}
            tickLine={{
              stroke: colors.text,
            }}
          />
          <YAxis
            unit='$'
            tick={{
              fill: colors.text,
            }}
            tickLine={{
              stroke: colors.text,
            }}
          />
          <Area
            type='monotone'
            dataKey='totalSales'
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.stroke}
            strokeWidth={2}
            name='Total sales'
            unit='$'
          />
          <Area
            type='monotone'
            dataKey='extrasSales'
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.stroke}
            strokeWidth={2}
            name='Extras sales'
            unit='$'
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
