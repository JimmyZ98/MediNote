const axios = require("axios"); 
const fs = require("fs");
const assembly = axios.create({
    baseURL: "https://api.assemblyai.com/v2/transcript",
    headers: {
        authorization: "e4e9c3804a724c0aae4407ae6a538981",
        "content-type": "application/json",
        "transfer-encoding": "chunked",
    },
});
console.log("hello")
const file = src("../../../assets/SampleAudio/SampleAudio.mp4")
fs.readFile(file, (err, data) => {
    if (err) return console.error(err);

    assembly
        .post("/upload", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
});





