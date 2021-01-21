const fs = require('fs');
const fsp = require('fs').promises;
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


async function deleteFile(filePath) {
    try {
      await fsp.unlink(filePath);
      console.log(`Deleted ${filePath}`);
    } catch (error) {
      console.error(`Got an error trying to delete the file: ${error.message}`);
    }
}

const csvWriter = (countryname) => createCsvWriter({
    path: countryname + '.txt',
    header: [
      {id: 'country', title: 'country'},
      {id: 'year', title: 'year'},
      {id: 'population', title: 'population'},
    ]
});

deleteFile('canada.txt');
deleteFile('usa.txt');

var canadaData = []
var usaData = []

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if(row.country == 'Canada'){
        console.log(row)
        canadaData.push(row)
    }
    if(row.country == 'United States'){
        console.log(row)
        usaData.push(row)
    }
  })
  .on('end', () => {
    csvWriter('canada')
    .writeRecords(canadaData)
    .then(()=> console.log('The CSV Canda file was written successfully'));
    csvWriter('usa')
    .writeRecords(usaData)
    .then(()=> console.log('The CSV United State file was written successfully'));
    console.log('CSV file successfully processed');
  });




