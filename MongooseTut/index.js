var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/GokulCart', {useNewUrlParser: true,
useUnifiedTopology: true}); 

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("We are Connected Bro/Sis...")
});

var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = "My name is" + this.name
  console.log(greeting);
}

var Kitten = mongoose.model('gokulKitty', kittySchema);

var gokulKitty = new Kitten({ name: 'gokulKitty' });
var gokulKitty2 = new Kitten({ name: 'gokulKitty2' });
// console.log(gokulKitty.name); 
// gokulKitty.speak();

gokulKitty.save();
gokulKitty.speak();

gokulKitty2.save();
gokulKitty2.speak();

const kittens = Kitten.find({name: "gokulKitty2"});
console.log(kittens);





