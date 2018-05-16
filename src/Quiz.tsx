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
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import Options from './Options'
import quizzes from './quizzes'

class Quiz extends Component {
  static propTypes = {
    classes: PropTypes.shape({
      stepper: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
    }).isRequired
  }

  questions = quizzes.find(quiz => quiz.name === this.props.match.params.name)
    .questions

  state = { step: 0, steps: new Array(this.questions.length) }

  render() {
    const {
      classes: { stepper, title },
      match
    } = this.props
    const { step, steps } = this.state

    return (
      <Fragment>
        <Typography variant="title" className={title}>
          {match.params.name}
        </Typography>

        <Stepper
          orientation="vertical"
          className={stepper}
          activeStep={step}
          nonLinear
        >
          {this.questions.map(({ name, options }, index) => (
            <Step key={name}>
              <StepButton onClick={() => this.setState({ step: index })}>
                {name}
              </StepButton>

              <StepContent>
                <RadioGroup
                  onChange={({ target: { value } }) =>
                    this.setState(state => ({
                      steps: [
                        ...state.steps.slice(0, step),
                        value,
                        ...state.steps.slice(step + 1)
                      ]
                    }))
                  }
                  value={steps[step]}
                >
                  {Object.entries(options).map(([option, technologies]) => (
                    <FormControlLabel
                      key={option}
                      control={<Radio />}
                      label={
                        <Fragment>
                          {option} <Options options={technologies} />
                        </Fragment>
                      }
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
  stepper: { backgroundColor: theme.palette.background.default },
  title: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 3,
    paddingBottom: 16,
    paddingTop: 16
  })
}))(Quiz)
