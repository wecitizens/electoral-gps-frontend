const csv = require('csvtojson');
const fs = require("fs");

const fileName = "answers.csv";

csv()
    .fromFile(fileName)
    .then((rows) => {

        console.log("Generate file to use in api/gps/answer/segment");
    });