import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core'
import { FormControlProps } from '@material-ui/core/FormControl'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { TypographyProps } from '@material-ui/core/Typography'
import React, { ChangeEvent, Component, ComponentClass } from 'react'
import styled from 'react-emotion'
import { match } from 'react-router-dom'
import getOptions from './getOptions'
import Options from './Options'
import quizzes from './quizzes.json'

const Form = styled('form')(props => props.theme.mixins.gutters())

const StyledFormControl = styled(FormControl as ComponentClass<
  FormControlProps
>)`
  margin-top: ${props => props.theme.spacing.unit * 3}px;
`

const StyledRadioGroup = styled(RadioGroup as ComponentClass<RadioGroupProps>)`
  margin-top: ${props => props.theme.spacing.unit}px;
`

const StyledTypography = styled(Typography as ComponentClass<TypographyProps>)`
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: ${props => props.theme.spacing.unit * 3}px;
`

interface Props {
  match: match<{ name: string }>
}

interface State {
  answers: Record<string, string>
}

export default class Quiz extends Component<Props, State> {
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
      <Form>
        <StyledTypography variant="title">{name}</StyledTypography>

        <Options labels={getOptions(questions, answers)} />

        {questions.map(question => (
          <StyledFormControl key={question.name} component="fieldset" fullWidth>
            <FormLabel component="legend">{question.name}</FormLabel>

            <StyledRadioGroup
              onChange={handleAnswer(question.name)}
              value={answers[question.name]}
            >
              {question.answers.map(answer => (
                <FormControlLabel
                  key={answer.name}
                  control={<Radio />}
                  label={
                    <>
                      {answer.name} <Options labels={answer.options} />
                    </>
                  }
                  value={answer.name}
                />
              ))}
            </StyledRadioGroup>
          </StyledFormControl>
        ))}
      </Form>
    )
  }
}
