import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Step,
  StepButton,
  StepContent,
  Stepper,
  Theme,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import { match } from 'react-router-dom'
import getOptions from './getOptions'
import Options from './Options'
import quizzes from './quizzes.json'

const styles = ({
  mixins: { gutters },
  palette: { background },
  spacing: { unit }
}: Theme) => ({
  stepper: { backgroundColor: background.default },
  title: gutters({ paddingTop: 16, paddingBottom: 16, marginTop: unit * 3 })
})

interface Props extends WithStyles<typeof styles> {
  match: match<{ name: string }>
}

interface State {
  step?: string
  steps: {}
}

export default withStyles(styles)(
  class Quiz extends Component<Props, State> {
    state = { step: undefined, steps: {} }

    handleStep = (name: string) => this.setState({ step: name })

    handleSteps = (name: string, event: never, value: string) =>
      this.setState(({ steps }) => ({
        steps: { ...steps, [name]: value }
      }))

    render() {
      const {
        props: {
          classes: { stepper, title },
          match: {
            params: { name }
          }
        },
        state: { step, steps }
      } = this

      const quiz = quizzes.find(quiz => quiz.name === name)
      if (!quiz) throw new Error(`Quiz not found: ${name}`)
      const questions = quiz.questions
      const questionIndex = questions.findIndex(({ name }) => name === step)

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
            {questions.map(({ name, answers }) => (
              <Step key={name}>
                <StepButton onClick={this.handleStep.bind(null, name)}>
                  {name}
                </StepButton>

                <StepContent>
                  <RadioGroup
                    onChange={this.handleSteps.bind(null, name)}
                    value={steps[name]}
                  >
                    {answers.map(({ name, options }) => (
                      <FormControlLabel
                        key={name}
                        control={<Radio />}
                        label={
                          <Fragment>
                            {name} <Options options={options} />
                          </Fragment>
                        }
                        value={name}
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
)
