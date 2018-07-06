import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core'
import React, { ChangeEvent, Component } from 'react'
import { match } from 'react-router-dom'
import getOptions from './getOptions'
import Options from './Options'
import quizzes from './quizzes.json'

const styles = ({ mixins: { gutters }, spacing: { unit } }: Theme) => ({
  root: gutters(),
  formControl: { marginTop: unit * 3 },
  group: { marginTop: unit },
  title: { paddingTop: 16, paddingBottom: 16, marginTop: unit * 3 }
})

interface Props extends WithStyles<typeof styles> {
  match: match<{ name: string }>
}

interface State {
  answers: Record<string, string>
}

export default withStyles(styles)(
  class Quiz extends Component<Props, State> {
    state = { answers: {} }

    handleAnswer = (question: string) => (
      event: ChangeEvent<{}>,
      answer: string
    ) =>
      this.setState(({ answers }) => ({
        answers: { ...answers, [question]: answer }
      }))

    render() {
      const {
        handleAnswer,
        props: {
          classes: { root, formControl, group, title },
          match: {
            params: { name }
          }
        },
        state: { answers }
      } = this

      const quiz = quizzes.find(quiz => quiz.name === name)
      if (!quiz) throw new Error(`Quiz not found: ${name}`)
      const questions = quiz.questions

      return (
        <form className={root}>
          <Typography variant="title" className={title}>
            {name}
          </Typography>

          <Options labels={getOptions(questions, answers)} />

          {questions.map(question => (
            <FormControl
              key={question.name}
              component="fieldset"
              className={formControl}
              fullWidth
            >
              <FormLabel component="legend">{question.name}</FormLabel>

              <RadioGroup
                className={group}
                onChange={handleAnswer(question.name)}
                value={answers[question.name]}
              >
                {question.answers.map(answer => (
                  <FormControlLabel
                    key={answer.name}
                    control={<Radio />}
                    label={
                      <>
                        {answer.name}
                        <Options labels={answer.options} />
                      </>
                    }
                    value={answer.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ))}
        </form>
      )
    }
  }
)
