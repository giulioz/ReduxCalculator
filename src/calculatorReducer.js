export const initialState = {
  value: 0,
  nextValue: null,
  operation: null
};

const doOperation = (operation, a, b) => {
  let aV, bV;

  switch (operation) {
    case "+":
      aV = a || 0;
      bV = b || 0;
      return aV + bV;
    case "-":
      if (a && b) return b - a;
      else if (a) return a;
      else if (b) return b;
      else return 0;
    case "*":
      aV = a || 1;
      bV = b || 1;
      return aV * bV;
    case "/":
      if (a && b) return b / a;
      else if (a) return a;
      else if (b) return b;
      else return 0;
    default:
      return a || b || 0;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      const nextValue = state.nextValue
        ? parseFloat(state.nextValue.toString() + action.value.toString())
        : action.value;

      return {
        ...state,
        value: state.operation === "=" ? null : state.value,
        nextValue
      };
    case "=":
      return {
        value: doOperation(state.operation, state.nextValue, state.value),
        nextValue: null,
        operation: action.type
      };
    default:
      return {
        value: doOperation(action.type, state.nextValue, state.value),
        nextValue: null,
        operation: action.type || null
      };
  }
};
