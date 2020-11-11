// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address // 객체를 보여주고 싶을때
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
 * @returns {Promise<User>}
 */

function fetchUser(){
  return axios.get(url)
}

fetchUser().then(function(response){
  response.address.city
})
// 데이터 오타를 방지하기 위해 사용 한다.(에러방지용)

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
