const vgContainer = document.querySelector("#videogame-box")
const form = document.querySelector("form")

const callBackError = err => console.log(err)
const callBack = ({data: games}) => displayVideoGame(games)
const addVideoGame = body => axios.post("http://localhost:4000/api/videogame", body).then(callBack).catch(callBackError)
const getAllVideoGames = () => axios.get("http://localhost:4000/api/videogame").then(callBack).catch(callBackError)


function submitHandler(e) {
    e.preventDefault()

        let videogame = document.getElementById("videogame")
        let review = document.getElementById("review")
        let image = document.getElementById("image")

        let vidGames = {
            videogame: videogame.value,
            review: review.value,
            image: image.value
        }

        addVideoGame(vidGames)

        videogame.value = ''
        review.value = ''
        image.value = ''
}


function createVideoGame(game){
    const gameCard = document.createElement('div')
    gameCard.classList.add('game-Card')

    gameCard.innerHTML = `<img alt='videoGame' src=${game.image} class="game-image-cover"/>
    <p class="videogame-title">${game.videogame}</p>
    <div class="btn-container">
        <p class="review-box">${game.review}></p>
    </div>`

    vgContainer.appendChild(gameCard)
}

function displayVideoGame(arr) {
    vgContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createVideoGame(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllVideoGames()