// Requires
const yargs = require('yargs');
const fs = require('fs');
const path = require('path');
const prompt = require('prompt');
const colors = require("colors/safe");
const humanNames = require('human-names');
const moment = require('moment');

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
    for (i = 0; i < 100; i++) {
        fs.appendFileSync('applications.json', `{
          "watchList": ${Math.floor(Math.random() * 2)},
          "policyId": ${Math.floor(Math.random() * 9999999)},
          "uid": 555,
          "uan": 555,
          "applicationID": "L${Math.floor(Math.random() * 99999999999)}",
          "status": "${Math.random() > 0.8 ? 'Further evidence' : Math.random() > 0.7 ? 'Under assessment' : Math.random() > 0.6
                    ? 'Descision made' : Math.random() > 0.5 ? 'Awaiting documents' : Math.random() > 0.3 ? 'Awaiting input'
                    : 'Complete'}",
          "lastUpdated": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}",
          "created": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}",
          "documents": [{
            "documentName": "${Math.random() > 0.66 ? 'Document 1' : Math.random() > 0.33 ? 'Document 2' : 'Document 3'},",
            "category": "${Math.random() > 0.66 ? 'Acceptance' : Math.random() > 0.33 ? 'Category 1' : 'Category 2'}",
            "docCreated": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}",
            "docAvailable": "${randDate.format('MM/DD/YYYY' + ' HH:MM a')}"
          }],
          "outstandingActions": [{
            "name" : "${Math.random() > 0.66 ? 'Answer question' : Math.random() > 0.33 ? 'Accept terms, confirm start date GP details, bank details' : 'Complete Underwriting questionnaire (416kb)'},",
            "type" : "link-question",
            "uri" : 999,
            "uidFor" : 50001
          }, {
            "name" : "Fill in form",
            "type" : "link-question",
            "uri" : 999,
            "uidFor" : 50001
          }],
          "policyHolder": [
            "${humanNames.allRandom() + ' ' + humanNames.allRandom()}",
            "${humanNames.allRandom() + ' ' + humanNames.allRandom()}"
          ],
          "claimType": [
            "Joint life first death",
            "Joint life second death"
          ],
          "coverBasis": [
            {
              "name": "${Math.random() > 0.66 ? 'First life' : Math.random() > 0.33 ? 'Cover basis 2' : 'Cover basis 3'}",
              "premiumAmount": ${Math.floor(Math.random() * 200)}.23,
              "term": "${Math.floor(Math.random() * 10) + ' years'}"
            },
            {
              "name": "Income protection",
              "premiumAmount": ${Math.floor(Math.random() * 200)}.23,
              "term": "${Math.floor(Math.random() * 10) + ' years'}"
            }
          ],
          "livesAssured": [
            {
              "name": "${humanNames.allRandom() + ' ' + humanNames.allRandom()}",
              "uid": ${Math.floor(Math.random() * 50001)},
              "premium": ${Math.floor(Math.random() * 200)}.23,
              "amount": ${Math.floor(Math.random() * 1000)}.00,
              "benefits": [{
                "name": "Life Protection",
                "minAge": 18,
                "ageAtExpiry": 90,
                "minimumTerm": 1,
                "amount": ${Math.floor(Math.random() * 200)}.23,
                "premium": ${Math.floor(Math.random() * 200)}.23,
                "id": ${Math.floor(Math.random() * 2000)}
              }]
            },
            {
              "name": "${humanNames.allRandom() + ' ' + humanNames.allRandom()}",
              "uid": ${Math.floor(Math.random() * 50001)},
              "premium": ${Math.floor(Math.random() * 500)}.23,
              "amount": ${Math.floor(Math.random() * 1000)}.00,
              "benefits": [{
                "name": "Income Protection",
                "minAge": 18,
                "ageAtExpiry": 90,
                "minimumTerm": 1,
                "amount": 1000,
                "premium": 500,
                "id": ${Math.floor(Math.random() * 2000)}
              }]
            }
          ]
        },\r\n`);
    }
};