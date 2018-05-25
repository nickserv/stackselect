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

  questions = quizzes.find(({ name }) => name === this.props.match.params.name)
    .questions

  state = { step: 0, steps: new Array(this.questions.length) }

  handleStep = index => this.setState({ step: index })

  handleSteps = (index, { target: { value } }) =>
    this.setState(state => ({
      steps: [
        ...state.steps.slice(0, index),
        value,
        ...state.steps.slice(index + 1)
      ]
    }))

  render() {
    const {
      classes: { stepper, title },
      match: {
        params: { name }
      }
    } = this.props
    const { step, steps } = this.state

    return (
      <Fragment>
        <Typography variant="title" className={title}>
          {name}
        </Typography>

        <Options options={getOptions(this.questions)} />

        <Stepper
          orientation="vertical"
          className={stepper}
          activeStep={step}
          nonLinear
        >
          {this.questions.map(({ name: questionName, options }, index) => (
            <Step key={questionName}>
              <StepButton onClick={this.handleStep.bind(null, index)}>
                {questionName}
              </StepButton>

              <StepContent>
                <RadioGroup
                  onChange={this.handleSteps.bind(null, index)}
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
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))(Quiz)
