import useGetWeatherIcon from '../hooks/useGetWeatherIcon';
import useConvertDate from '../hooks/useConvertDate';

function Day(props) {
  const codeIcon = useGetWeatherIcon(props.code);
  const date = useConvertDate(props.date);
  return (
    <>
      <span>{codeIcon}</span>
      <p>{props.isToday ? 'Today' : date} </p>
      <p>
        {Math.floor(props.min)}&deg; &mdash; {Math.ceil(props.max)}&deg;
      </p>
    </>
  );
}

export default Day;
