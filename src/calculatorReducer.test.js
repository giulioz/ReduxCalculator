import calculatorReducer, { initialState } from "./calculatorReducer";

describe("calculator reducer", () => {
  it("should handle initial state", () => {
    expect(calculatorReducer(initialState, {})).toEqual({
      value: 0,
      nextValue: null,
      operation: null
    });
  });

  it("should handle ADD_DIGIT", () => {
    expect(
      calculatorReducer(initialState, {
        type: "ADD_DIGIT",
        value: 1
      })
    ).toEqual({
      value: initialState.value,
      nextValue: 1,
      operation: initialState.operation
    });

    expect(
      calculatorReducer(
        {
          value: 0,
          nextValue: 0,
          operation: null
        },
        {
          type: "ADD_DIGIT",
          value: 1
        }
      )
    ).toEqual({
      value: 0,
      nextValue: 1,
      operation: null
    });

    expect(
      calculatorReducer(
        {
          value: 0,
          nextValue: 123,
          operation: null
        },
        {
          type: "ADD_DIGIT",
          value: 4
        }
      )
    ).toEqual({
      value: 0,
      nextValue: 1234,
      operation: null
    });
  });
});
