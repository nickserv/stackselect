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
import React, { Fragment } from 'react';
import quizzes from './quizzes';

export default withStyles(theme => ({
  stepper: {
    backgroundColor: theme.palette.background.default
  },
  title: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
}))(({ classes: { stepper, title }, match: { params: { name } } }) => (
  <Fragment>
    <Typography variant="title" className={title}>
      {name}
    </Typography>

    <Stepper orientation="vertical" className={stepper}>
      {quizzes.find(quiz => quiz.name === name).questions.map(question => (
        <Step key={question.name}>
          <StepLabel>{question.name}</StepLabel>

          <StepContent>
            <RadioGroup>
              {Object.keys(question.options).map(option => (
                <FormControlLabel
                  key={option}
                  control={<Radio checked={false} />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  </Fragment>
));
