import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
  withStyles
} from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import Options from './Options'
import quizzes from './quizzes'

class Quiz extends Component {
  state = { step: 0 }

  render() {
    const {
      classes: { chips, stepper, title },
      match: {
        params: { name }
      }
    } = this.props
    const { step } = this.state
    const questions = quizzes.find(quiz => quiz.name === name).questions

    return (
      <Fragment>
        <Typography variant="title" className={title}>
          {name}
        </Typography>

        <div className={chips}>
          <Options questions={questions} />
        </div>

        <Stepper
          orientation="vertical"
          className={stepper}
          activeStep={step}
          nonLinear
        >
          {questions.map(({ name, options }, step) => (
            <Step key={name}>
              <StepButton onClick={() => this.setState({ step })}>
                {name}
              </StepButton>

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
    )
  }
}

export default withStyles(theme => ({
  chips: theme.mixins.gutters(),
  stepper: { backgroundColor: theme.palette.background.default },
  title: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))(Quiz)
