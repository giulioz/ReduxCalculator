import React from "react";
import {
  Typography,
  Card,
  withStyles,
  CardContent,
  Grid,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  card: {
    maxWidth: 200,
    flexGrow: 1
  },
  gridItem: {
    display: "flex"
  },
  button: {
    flexGrow: 1
  }
});

class Calculator extends React.Component {
  componentWillMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  render() {
    const { state, classes } = this.props;

    const operations = ["+", "-", "*", "/"];
    const renderOperation = operation => (
      <Grid item xs className={classes.gridItem} key={operation}>
        <Button
          onClick={() => this.handleOperation(operation)}
          variant="contained"
          className={classes.button}
        >
          {operation}
        </Button>
      </Grid>
    );

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" gutterBottom>
              {state.nextValue || state.value}
            </Typography>
            <Grid container spacing={8}>
              {operations.map(renderOperation)}

              <Grid item xs={12} className={classes.gridItem}>
                <Button
                  onClick={() => this.handleOperation("=")}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  =
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }

  handleKeyPress = event => {
    const { addDigit } = this.props;

    const char = String.fromCharCode(event.charCode);
    if (!isNaN(char)) {
      addDigit(parseFloat(char));
    }
  };

  handleOperation = operation => {
    const { doOperation } = this.props;
    doOperation(operation);
  };
}

export default withStyles(styles)(Calculator);
