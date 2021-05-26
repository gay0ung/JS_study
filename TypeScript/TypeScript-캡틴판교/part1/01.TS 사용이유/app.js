// api url
let url = "https://jsonplaceholder.typicode.com/users/1";

// dom
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let address = document.querySelector("#address");

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
    .then((response) => {
      const { data: user } = response;
      const { street } = user.address;

      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = street;
    })
    .catch((err) => {
      console.log(err);
    });
}

startApp();
