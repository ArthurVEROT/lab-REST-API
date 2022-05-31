const express = require("express");
const app = express();
const port = 3000;

// configuration
// use a JSON middleware parser
app.use(express.json())


// Routes

const indexRouter = require('./routes/index.routes.js')
app.use('/', indexRouter)

// const studentsRouter = require('./routes/students.routes.js')
// app.use('/students', studentsRouter)



// Error handling
const addErrorHandling = require('./error-handling.js')
addErrorHandling(app)

// Checking port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
