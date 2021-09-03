/***** Deliverable 1 *****/
const header = document.querySelector('#header')
console.log("Here's your header:", header)
//added defer to html to solve the problem

/***** Deliverable 2 *****/
header.style.color = 'red';

/***** Deliverable 3 *****/
//First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. 
//*For each* player in our application, we want to render their information on the DOM inside the `div#player-container` element. 
// Create a DOM element that looks like this for each player and append it to the `div.player-container`:

console.log("PLAYERS array looks like this:", PLAYERS)

function playerSlapper(array) {
    const playerName = document.createElement('div')
    playerName.className = 'player'
    playerName.dataset.number = array.number
    const playerHeader = document.createElement('h3')
    const nickName = document.createElement('em')
    nickName.innerText = `${array.nickname}`
    playerHeader.innerText = `${array.name} `
    playerHeader.append(nickName)
    playerName.append(playerHeader)

    const playerImg = document.createElement('img')
    playerImg.src = array.photo
    playerImg.alt = array.name

    playerName.append(playerImg)
    
    
    const playerContainer = document.querySelector('.player-container')
    playerContainer.append(playerName)
    return playerContainer
}


const playerCreator = PLAYERS.forEach(playerSlapper)


/***** Deliverable 4 *****/

const raheemRemoval = document.querySelector('[data-number="7"]')
console.log(raheemRemoval);
raheemRemoval.remove()

// im switching back to my code real quick!

//KK! did you copy everything yet?

//yup. Any Luck? lol
// no :(
    // ;_;

    // const raheemRemoval = document.querySelectorAll('[data-number="7"]');