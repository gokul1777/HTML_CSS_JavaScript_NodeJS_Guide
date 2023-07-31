//Searching for data in mongo db 
use GokulCart

// This querry will return all the objects with rating equal to 3.5
db.items.find({rating:3.5})
db.items.find({rating:{$gte: 3.5}})
db.items.find({rating:{$gt: 3.5}})
//And Operator
db.items.find({rating:{$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating:{$lt: 3.5}, price:{$gt: 14000}})

db.items.find({
     $or:[{rating:{$lt: 3.5}}, {price:{$gt: 14000}}]
    })

db.items.find({rating:{$gt: 3.5}}, {rating:1})