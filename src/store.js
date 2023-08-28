const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestloan':
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload,
      };
    case 'account/payloan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}
