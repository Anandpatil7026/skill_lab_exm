const mongoose = require('mongoose');
let uri = `mongodb+srv://saiesh:nayana12@cluster0.dzlyjey.mongodb.net/mern?retryWrites=true&w=majority`



const mongodb = async () => {
  mongoose.connect(uri, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---", err);
    else {
      console.log("Connected");
      const fetchdata = await mongoose.connection.db.collection("blogcontents");
      fetchdata.find({}).toArray(async function (err, data) {
        // if(err) console.log(err);
        // else {
        //   global.fooditems=data;
        
          if (err) console.log(err);
          else {
            global.blogcontent = data;
            

          }
        
      }
      )
    }
  })
}

module.exports = mongodb;