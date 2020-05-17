const fetch = require("node-fetch");

const API_URL = "https://www.affirmations.dev/";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
