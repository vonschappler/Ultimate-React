import Day from './Day';
import useConvertToFlag from '../hooks/useConvertToFlag';

function Weather(props) {
  const displayFlag = useConvertToFlag(props.flag);
  const {
    time: dates,
    weathercode: codes,
    temperature_2m_max: max,
    temperature_2m_min: min,
  } = props.weather;
  return (
    <>
      {props.location ? (
        <h2>
          Weather in {props.displayLocation}{' '}
          <span className='flag'>{displayFlag}</span>
        </h2>
      ) : (
        <h2>Please enter a location above </h2>
      )}
      <ul className='weather'>
        {codes &&
          codes.map((code, index) => (
            <li className='day'>
              <Day
                date={dates.at(index)}
                code={code}
                min={min.at(index)}
                max={max.at(index)}
                key={dates.at(index)}
                isToday={index === 0}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Weather;
