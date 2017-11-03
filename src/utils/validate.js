const validate = values => {
  const errors = {};


  const latinChars = /[^a-zA-Z\s]+/g;
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (values.name && values.name.search(latinChars) !== -1) {
    errors.name = 'Latin characters only!';
  }

  if (values.email && !validEmail.test(values.email)) {
    errors.email = 'Wrong email format';
  }

  return errors;
}

export default validate
