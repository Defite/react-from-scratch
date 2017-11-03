import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import FormTextField from '../FormTextField'
import { MenuItem } from 'material-ui/Menu'
import FormSelectField from '../FormSelectField'
import Button from 'material-ui/Button'

import validate from '../../utils/validateFields'

const styles = require('./index.css');

class SomeForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={styles.SomeForm} onSubmit={ handleSubmit(this.onSubmitForm) }>
        <div className={styles.SomeForm__row}>
          <Field name='name' component={ FormTextField } label='Имя' />
        </div>
        <div className={styles.SomeForm__row}>
          <Field name='position' component={ FormSelectField } label='Должность' />
        </div>
        <div className={styles.SomeForm__row}>
          <Field name='email' component={ FormTextField } label='Email' type='email' />
        </div>
        <div className={styles.SomeForm__row}>
          <Field name='phone' component={ FormTextField } label='Телефон' type='tel' />
        </div>
        <div className={styles.SomeForm__row}>
        <Button raised color='primary' type='submit'>
          Отправить
        </Button>
        </div>
      </form>
    )
  }

  onSubmitForm(data) {
    console.log(data);
  }
}

export default reduxForm({
  form: 'some-form',
  validate,
  onSubmitSuccess: (results, dispatch) => dispatch(reset('some-form'))
})(SomeForm);
