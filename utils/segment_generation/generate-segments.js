const csv = require('csvtojson');
const fs = require("fs");

const fileName = "answers.csv";

csv()
    .fromFile(fileName)
    .then((rows) => {

        const data = rows.reduce(
            (acc, obj) => {
                let cle = obj.segment_key + '_' + obj.segment_type;
                if(!acc[cle]){
                    acc[cle] = [];
                }
                acc[cle].push({
                    user_key: obj.user_key,
                    question_key: obj.question_key,
                    value: obj.value
                });
                return acc;
            },{});
        
        console.log(data);
        
        Object.keys(data).forEach(k => {
            fs.writeFile(k + ".json", JSON.stringify({data: data[k]}, null, 2), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log("File has been created");
            });        
        });
        
        console.log("Generate file to use in api/gps/answer/segment");
    });