/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
let element = document.getElementById('header')
document.getElementById('header').addEventListener('click', function (e) {
  if (e.target === element) {
    toggleColor(element)
  }
});

/***** Deliverable 2 *****/

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('#new-player-form')
  form.addEventListener("submit", function (e) {
    event.preventDefault();
    let playerNumber = form.number.value
    let playerName = form.name.value
    let playerNickname = form.nickname.value
    let playerPhoto = form.photo.value

    let player = {
      "number": playerNumber,
      "name": playerName,
      "nickname": playerNickname,
      "photo": playerPhoto,
      "likes": "0"
    }

    renderPlayer(player)
    buttonEvents()
  })


})


/***** Deliverable 3 *****/

function buttonEvents() {

  let buttons = document.getElementsByClassName('like-button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      let likeNum = e.target.parentElement.getElementsByClassName('likes')[0].innerHTML
      likeNum = likeNum.replace("likes", "")
      likeNum = parseInt(likeNum, 10)
      e.target.parentElement.getElementsByClassName('likes')[0].innerHTML = (likeNum + 1).toString()
    });
  }
}