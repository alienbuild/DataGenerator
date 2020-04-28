// Requires
const yargs = require('yargs');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const colors = require("colors/safe");

// Did you start correctly?
prompt.message = colors.magenta('Data generator reporting for duty.');

prompt.start();

console.log('What would you like to do?');

prompt.get([{
    name: 'command',
    required: true,
    description: '\n Type \'apps\' to run the application generator \n'
}], function (err, result) {
    console.log('------------------------------------------');
    console.log('Command-line input received:'  + result.command);
    console.log('Please wait...');

    if (result.command === 'apps') {
        console.log('Running application generator');
        applicationGenerator();
    }
});

const applicationGenerator = () => {
    const chancerGen = Math.random();
    const randDate = moment(new Date(+new Date() - Math.floor(Math.random() * 10000000000)));
    console.log('------------------------------------------');
    let i;
    for (i = 0; i < 10; i++) {
        fs.appendFileSync('applications.json', `{
          "watchList": ${Math.floor(Math.random() * 2)},
          "policyId": ${Math.floor(Math.random() * 9999999)},
          "uid": 555,
          "uan": 555,
          "applicationID": "L${Math.floor(Math.random() * 99999999999)}",
          "status": "${chancerGen > 0.8 ? 'Further evidence' : chancerGen > 0.7 ? 'Under assessment' : chancerGen > 0.6
                    ? 'Descision made' : chancerGen > 0.5 ? 'Awaiting documents' : chancerGen > 0.3 ? 'Awaiting input'
                    : 'Complete'}",
          "lastUpdated": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}",
          "created": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}",
          "documents": [{
            "documentName": "${chancerGen > 0.66 ? 'Document 1' : chancerGen > 0.33 ? 'Document 2' : 'Document 3'},",
            "category": "Category 2",
            "docCreated": "01/02/2020 23:01 pm",
            "docAvailable": "01/07/2020 23:01 pm"
          }],
        },\r\n`);
    }
};