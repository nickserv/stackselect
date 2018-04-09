import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  withStyles
} from 'material-ui';
import React, { Component, Fragment } from 'react';
import quizzes from './quizzes';

class Quiz extends Component {
  state = {};

  render() {
    const {
      classes: { stepper, title },
      match: { params: { name } }
    } = this.props;

    return (
      <Fragment>
        <Typography variant="title" className={title}>
          {name}
        </Typography>

        <Stepper orientation="vertical" className={stepper}>
          {quizzes
            .find(quiz => quiz.name === name)
            .questions.map(({ name, options }) => (
              <Step key={name}>
                <StepLabel>{name}</StepLabel>

                <StepContent>
                  <RadioGroup
                    onChange={({ target: { value } }) =>
                      this.setState({ [name]: value })
                    }
                    value={this.state[name]}
                  >
                    {Object.keys(options).map(option => (
                      <FormControlLabel
                        key={option}
                        control={<Radio />}
                        label={option}
                        value={option}
                      />
                    ))}
                  </RadioGroup>
                </StepContent>
              </Step>
            ))}
        </Stepper>
      </Fragment>
    );
  }
}

export default withStyles(theme => ({
  stepper: { backgroundColor: theme.palette.background.default },
  title: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))(Quiz);
