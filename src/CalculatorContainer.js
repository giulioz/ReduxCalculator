import { connect } from "react-redux";

import Calculator from "./Calculator";

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  doOperation: type => dispatch({ type }),
  addDigit: digit => dispatch({ type: "ADD_DIGIT", value: digit })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
