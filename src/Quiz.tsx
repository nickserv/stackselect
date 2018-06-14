import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React, { ChangeEvent, Component, Fragment } from 'react'
import getOptions from './getOptions'
import Options from './Options'
import quizzes from './quizzes'

const decorate = withStyles(theme => ({
  stepper: { backgroundColor: theme.palette.background.default },
  title: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))

interface Props {
  match: { params: { name: string } }
}

type AllProps = Props & WithStyles<'stepper' | 'title'>

interface State {
  step?: string
  steps: Record<string, string>
}

class Quiz extends Component<AllProps, State> {
  state = { step: undefined, steps: {} }

  handleStep = (name: string) => this.setState({ step: name })

  handleSteps = (
    name: string,
    { target: { value } }: ChangeEvent<{ value: string }>
  ) =>
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

    const quiz = quizzes.find(currentQuiz => currentQuiz.name === name)
    if (!quiz) {
      throw new Error(`Quiz not found: ${name}`)
    }
    const questions = quiz.questions
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

export default decorate(Quiz)
