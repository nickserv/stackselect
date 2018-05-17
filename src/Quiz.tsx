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
import Options from './Options'
import quizzes, { IQuestion } from './quizzes'

const decorate = withStyles(theme => ({
  stepper: { backgroundColor: theme.palette.background.default },
  title: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 3,
    paddingBottom: 16,
    paddingTop: 16
  })
}))

interface IProps {
  match: { params: { name: string } }
}

interface IState {
  step: number
  steps: string[]
}

class Quiz extends Component<IProps & WithStyles<'stepper' | 'title'>, IState> {
  private questions: IQuestion[]

  constructor(props: IProps & WithStyles<'stepper' | 'title'>) {
    super(props)
    const quiz = quizzes.find(
      currentQuiz => currentQuiz.name === this.props.match.params.name
    )
    if (!quiz) {
      throw new Error(`Quiz not found: ${this.props.match.params.name}`)
    }
    this.questions = quiz.questions
    this.state = { step: 0, steps: new Array(this.questions.length) }
  }

  public render() {
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
          nonLinear={true}
        >
          {this.questions.map(({ name, options }, index) => (
            <Step key={name}>
              <StepButton onClick={this.handleStep.bind(null, index)}>
                {name}
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

  private handleStep = (index: number) => this.setState({ step: index })

  private handleSteps = (
    step: number,
    { target: { value } }: ChangeEvent<{ value: string }>
  ) =>
    this.setState(state => ({
      steps: [
        ...state.steps.slice(0, step),
        value,
        ...state.steps.slice(step + 1)
      ]
    }))
}

export default decorate(Quiz)
