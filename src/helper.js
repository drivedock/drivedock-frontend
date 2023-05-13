export function isValidPassword(password) {
  var re = {
    capital: /[A-Z]/,
    digit: /[0-9]/,
  };
  return re.capital.test(password) && re.digit.test(password);
}
