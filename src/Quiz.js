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
import getOptions from './getOptions'
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

  state = { steps: {} }

  handleStep = name => this.setState({ step: name })

  handleSteps = (name, { target: { value } }) =>
    this.setState(({ steps }) => ({
      steps: { ...steps, [name]: value }
    }))

  render() {
    const {
      classes: { stepper, title },
      match: {
        params: { name }
      }
    } = this.props
    const { step, steps } = this.state

    const questions = quizzes.find(quiz => quiz.name === name).questions

    const questionIndex = questions.findIndex(
      ({ name: questionName }) => questionName === step
    )

    return (
      <Fragment>
        <Typography variant="title" className={title}>
          {name}
        </Typography>

        <Options options={getOptions(questions, steps)} />

        <Stepper
          orientation="vertical"
          className={stepper}
          activeStep={questionIndex === -1 ? 0 : questionIndex}
          nonLinear
        >
          {questions.map(({ name: questionName, options }) => (
            <Step key={questionName}>
              <StepButton onClick={this.handleStep.bind(null, questionName)}>
                {questionName}
              </StepButton>

              <StepContent>
                <RadioGroup
                  onChange={this.handleSteps.bind(null, questionName)}
                  value={steps[questionName]}
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
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))(Quiz)
