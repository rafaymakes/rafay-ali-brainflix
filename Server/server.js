const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(express.json())
app.use(express.static('Client'));
app.use(cors());
app.use(express.urlencoded())

const mainVideo = require('./videoData/main-video.json');
const sideVideo = require('./videoData/side-video.json');

app.listen(8080, () => {
    console.log('Server starting');
    console.log('Press Ctrl C to stop server');
})

app.get('/videos', (req, res) => {
    res.json(sideVideo);
})

app.get("/videos/:id", (req, res) => {
    const data = mainVideo.find(item => {
        return req.params.id == item.id;
    });
    res.json(data);
});

app.post("/Upload", (req, res) => {
    const title = req.body.title;
    const desc = req.body.description;
    const thumbnail = "https://i.redd.it/lvqnbx9kk2k41.jpg";
    const newSideVideo = { id: 1234, title, channel: "Rafay", image: thumbnail };
    const newMainVideo = { id: 1234, title, channel: "Rafay", image: thumbnail, desc, views: "0", likes: "0", duration: "00:00", video: "", comments: [] };
    sideVideo.push(newSideVideo);
    mainVideo.push(newMainVideo);
    res.end;
})

