import { useSelector } from 'react-redux';

function Customer() {
  const { fullName } = useSelector(
    (store) => store.customer
  );

  return <h2>👋 Welcome,{fullName}</h2>;
}

export default Customer;
