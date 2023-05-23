exports.emailTypePicker = (email) => {
  let index = email.indexOf("@");
  let result = email.slice(index + 1);
  return result;
};
