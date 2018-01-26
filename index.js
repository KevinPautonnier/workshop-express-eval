let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.argv[2];

// start server here
app.get('/bingo', function(req, res) {
    res.end('Bingo')
  })
app.listen(port)

console.log(chalk.green('Hello web server on port '+port));
