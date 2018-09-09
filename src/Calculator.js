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
  state = {
    currentVal: null
  };

  componentWillMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  render() {
    const { state, classes } = this.props;
    const { currentVal } = this.state;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" gutterBottom>
              {currentVal || state}
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs className={classes.gridItem}>
                <Button
                  onClick={() => this.handleOperation("+")}
                  variant="contained"
                  className={classes.button}
                >
                  +
                </Button>
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Button
                  onClick={() => this.handleOperation("-")}
                  variant="contained"
                  className={classes.button}
                >
                  -
                </Button>
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Button
                  onClick={() => this.handleOperation("*")}
                  variant="contained"
                  className={classes.button}
                >
                  *
                </Button>
              </Grid>
              <Grid item xs className={classes.gridItem}>
                <Button
                  onClick={() => this.handleOperation("/")}
                  variant="contained"
                  className={classes.button}
                >
                  /
                </Button>
              </Grid>
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
    const char = String.fromCharCode(event.charCode);
    if (!isNaN(char)) {
      this.setState(({ currentVal }) => ({
        currentVal: (currentVal || "") + char
      }));
    }
  };

  handleOperation = operation => {
    const { currentVal } = this.state;
    const { doOperation } = this.props;

    if (currentVal) {
      doOperation(operation, currentVal);
      this.setState({
        currentVal: null
      });
    }
  };
}

export default withStyles(styles)(Calculator);
