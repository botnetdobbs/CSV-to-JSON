const path = require('path');
const fs = require('fs');

//Require the csvtojs Converter class
const Converter = require('csvtojson').Converter;

//Create a new converter object from the class
var converter = new Converter();

converter.fromFile(path.join(__dirname, 'data', 'customer-data.csv'))
    .on('end_parsed', (result) => {
        var raw = JSON.stringify(result, undefined, 2);
        //Call the function and give the required parameters
        writeToJsonFile(path.join(__dirname, 'data', 'customer-data.json'), raw);
    })

//Write the output to JSON file
function writeToJsonFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log('Error writing converted data to customer-data.json');
        } else {
            console.log('customer-data.json written successfully!');
        }
    });
}