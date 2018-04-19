/*
 * File: index.js
 * Author: Daniel Valentine <dval@bu.edu>
 * Date: April 19, 2018
 * Purpose: Main website driver
 */

const config  = require('./config.json')  /* system settings */
      fs      = require('fs'),            /* import files from filesystem; TODO: necessary? */
      express = require('express'),       /* server */
      app     = express(),
      morgan  = require('morgan');        /* system logger */

// set 

/*
 * Use the Morgan logger in combined mode, which logs just like Apache (along with keeping track of HTTP referrers):
 *   https://github.com/expressjs/morgan#combined
 * Credit to Loggly for recommending this tool in conjuction with Express:
 *   https://www.loggly.com/blog/node-js-libraries-make-sophisticated-logging-simpler/
 */
app.use(morgan('combined'));

/*
 * BEGIN SITE STRUCTURE
 */

/*
 * Home page
 */
app.get('/', (req, res) => {
   res.send("hi there") 
})

/*
 * About -- project information page
 */
app.get('/about', (req, res) => {
   res.send("NYI") // TODO 
})

/*
 * UK map
 */
app.get('/map', (req, res) => {
   res.send("NYI") // TODO
})

/*
 * END SITE STRUCTURE
 */

app.listen(config.port, () => {
   console.log("Server now listening on port " + config.port);   
})
