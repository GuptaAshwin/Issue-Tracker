const mongoose= require('mongoose');
const localdb = `mongodb://localhost/issueTracker`;
const proddb = `mongodb+srv://AshwinGupta:ashwinak@issuetracker.o5fci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const dburl = process.env.DB_URL || localdb ;

mongoose.connect(dburl);

const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "error connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("Success fully connected to the database");
});
module.exports = db;