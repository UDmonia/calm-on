const validators = {
  formatErrors: (e) => {
    const errors = {};
    const types = Object.keys(e.errors);
    types.forEach((type) => {
      let msg;
      switch (e.errors[type].kind) {
        case "unique":
          msg = `${type} already exists`;
          break;
        case "minlength":
          msg = `${type} must be atleast 7 characters`;
          break;
        default:
          msg = e.message;
          break;
      }
      errors[type] = msg;
    });
    return errors;
  },
  valid: (text) => Boolean(text.trim().length),
};

module.exports = validators;
