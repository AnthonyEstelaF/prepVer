var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri ='mongodb+srv://anro01:antony123@anroo-sample.x4cug.mongodb.net/anroo-sample?retryWrites=true&w=majority'
/* GET users listing. */
router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(get10Movies);
    function get10Movies(err){
       if (err) console.log(err);
       else {
            const collection = client.db("sample_mflix").collection("movies"); 
            collection.find().limit(10).toArray(callBackQuery)
       }
    } 
    function callBackQuery(err,result){
        if (err) console.log("connesione non riuscita :(");
        else {
            res.send(result);
        }
        client.close(); 
    } 
});

module.exports = router;
