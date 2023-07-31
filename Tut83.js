show dbs
use GokulCart
show collections

db.items.find({price: 22000})

//Deleting items from the mongo db database
// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price: 22000})


db.items.deleteMany({price: 89000})