const path = require('path');
const fs = require('fs');

//Require the csvtojs Converter class
const Converter = require('csvtojson').Converter;

//Create a new converter object from the class
var converter = new Converter();

converter.fromFile(path.join(__dirname, 'data', 'customer-data.csv'))
    .on('end_parsed', (result) => {
        var raw = JSON.stringify(result, undefined, 2);
        console.log(raw);
    })