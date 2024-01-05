// This file is made using the "old way" before hooks were implemented in React

import { connect } from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className='balance'>{formatCurrency(balance)}</div>;
}

// This function returns an object with the "props" which we are creating for a component
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

// This function creates a new component, which will receive the props mapped by mapStateToProps and apply them to the component passed as the argument of connect()()
export default connect(mapStateToProps)(BalanceDisplay);
