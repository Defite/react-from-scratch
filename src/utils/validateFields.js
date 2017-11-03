const latinChars = /[^a-zA-Z\s]+/g;
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const validRussiaMobileNumber = /^\+?([0-9]{1})\)?[- ]?([0-9]{3})[- ]?([0-9]{3})?([0-9]{4})$/;

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'email',
    'phone',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Обязательное поле'
    }
  });

  if (values.name && values.name.search(latinChars) !== -1) {
      errors.name = 'Только латинские буквы'
    }

  if (values.email && !validEmail.test(values.email)) {
    errors.email = 'Неверный формат почтового адреса'
  }

  if (values.phone && !validRussiaMobileNumber.test(values.phone)) {
    errors.phone = 'Неверный формат телефона, правильно - +79060910172'
  }

  return errors
}

export default validate
