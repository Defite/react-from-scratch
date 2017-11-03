import React from 'react'
import TextField from 'material-ui/TextField'

class InputTextField extends React.Component {
  render() {
    const { input, label, type, meta: { touched, error }, } = this.props;

    return (
      <TextField
        error={ touched && Boolean(error) }
        helperText={ touched && error }
        label={label}
        {...input}
      />
    )
  }
}

export default InputTextField
