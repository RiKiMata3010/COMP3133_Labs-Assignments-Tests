const csv = require('csv-parser');
const fs = require('fs');
const Canada = ("canada.text")
const UnitedStates = ("usa.text")

fs.unlink(Canada, function (err) {
  if (err) console.log("Boom");
  console.log('Canada File deleted!');
});
fs.unlink(UnitedStates, function (err) {
    if (err) console.log("Boom")
    console.log('USA File deleted!');
  });

 
fs.writeFileSync('canada.text', "country, year, population\n")
fs.writeFileSync('usa.text', "country, year, population\n")

fs.createReadStream('./input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (row.country === "Canada"){
        const canada = `${row.country}, ${row.year}, ${row.population}\n`
        fs.appendFile("canada.text", canada, err=>{
            if (err){
                console.log(err)
                return
            }
        })
    }
    else if (row.country === "United States"){
        const usa = `${row.country}, ${row.year}, ${row.population}\n`
        fs.appendFile("usa.text", usa, err=>{
            if (err){
                console.log(err)
                return
            }
        })
    }
  })


  .on('end', () => {
    console.log('Canada text successfully processed');
    console.log('USA text successfully processed');
  });
  