let userName = document.getElementById('userName')
let userCompany = document.getElementById('userCompany')
let userBio = document.getElementById('userBio')
let userEmail = document.getElementById('userEmail')
let userAvatar = document.getElementById('userAvatar')
let githubId = document.getElementById('githubId')
let facebookId = document.getElementById('facebookId')
let linkedinId = document.getElementById('linkedinId')
let searchName = document.getElementById('search_name');
let searchedName
let api_data = 'https://api.github.com/users/hassan-majeed';
function defaultApi() {
  api_data = 'https://api.github.com/users/hassan-majeed';
  callapi()
}
function search() {
  searchedName = searchName.value
  api_data = `https://api.github.com/users/${searchedName}`
  console.log(api_data)
  callapi()
}
function callapi() {
  fetch(api_data)
    .then(response => response.json())
    .then(userData => {
      if (userData.message == 'Not Found') {
        defaultApi()
        console.log('All User Data Fetch after default Api call ====>', userData)
      }
      console.log('All User Data Fetch Api ====>', userData)
      userName.textContent = userData.name
      { userData.name ? '' : userName.classList.add('d-none') }

      userCompany.textContent = userData.company
      { userData.company ? '' : userCompany.classList.add('d-none') }

      userBio.textContent = userData.bio
      { userData.bio ? '' : userBio.classList.add('d-none') }

      userEmail.textContent = userData.email
      { userData.email ? '' : userEmail.classList.add('d-none') }

      userAvatar.src = userData.avatar_url
      { userData.avatar_url ? '' : userAvatar.classList.add('d-none') }

      githubId.href = userData.html_url
      { userData.html_url ? '' : href.classList.add('d-none') }
    }
    )
}
callapi()
// search function //

// Light and Dark Mode Functions

function lightMode() {
  var light = document.getElementById('card')
  light.classList.add('light-mode')
  light.classList.remove('dark-mode');
}

function darkMode() {
  var dark = document.getElementById('card')
  dark.classList.add('dark-mode', 'dark-mode');
  dark.classList.remove('light-mode');
}