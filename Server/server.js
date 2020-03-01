const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
app.use(express.json())
app.use(express.static('Client'));
app.use(cors());

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
