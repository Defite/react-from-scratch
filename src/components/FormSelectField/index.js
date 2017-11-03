import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'

class FormSelectField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: ''
    }

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="position">Должность</InputLabel>
        <Select
          onChange={this.onHandleChange('position')}
          value={ this.state.position }
          input={<Input id="position" />}
        >
          <MenuItem value="">
            <em>&mdash;</em>
          </MenuItem>
          <MenuItem value='frontend'>Фронтендер</MenuItem>
          <MenuItem value='backend'>Бэкендер</MenuItem>
          <MenuItem value='who-the-duck-i-am'>Тестировщик</MenuItem>
        </Select>
      </FormControl>
    )
  }

  onHandleChange(name) {
    return function (event) {
      this.setState({ [name]: event.target.value });
      this.props.input.onChange(event.target.value);
    }.bind(this)
  }
}

export default FormSelectField
