const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let globalId = 1
const games = require('./db.json')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Its unfortunate you are getting advice from a button",
  "Maybe its time to stop listening to a button", "You aren't getting any younger", 
  "All your hard work will be turned into more hard work", "Try again, I wasn't listening",
  "Click harder maybe?", "I see great things for other people in your future"]

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
})

app.get("/api/videogame", (req, res) => {
  res.status(200).send(games)
})

app.get("/api/videogameBtn", (req, res) => {
  const gameList = ["Dark Souls 3", "Halo 2", "Black Ops 1", "Black ops 2", 
  "Sea of Thieves", "Fallout: New Vegas", "Civilization 6"]

  let randomGameIndex = Math.floor(Math.random() * gameList.length);
  let randomGame = gameList[randomGameIndex]
  
  res.status(200).send(randomGame)
})

app.post("/api/videogame", (req, res) => {
  const {videogame, review, image} = req.body
  const newGame = {
    id: globalId,
    videogame,
    review,
    image
  }

  games.push(newGame)
  res.status(200).send(games)
  globalId++
})


app.listen(4000, () => console.log("Server running on 4000"));