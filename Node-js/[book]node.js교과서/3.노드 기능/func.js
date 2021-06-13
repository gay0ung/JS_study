const { even,odd } = require('./var.js');

//ES2015이후
// import { even,odd } from './var.js'

const checkOddOrEven= (num) => {
  return num % 2 ? odd : even;
}

module.exports = checkOddOrEven;

//ES2015이후
// export default {checkOddOrEven};