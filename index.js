const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongUs')
.then(
    ()=>{
        console.log('Okay')
    }
)
.catch(err=>'something went wrong')

const user = mongoose.model('User',new mongoose.Schema({
    autoInc: {type:Number, default:0},
    name:String
}))
;

createUser(lastIndex(user),'Jessica costa');
getAll()
lastIndex()
async function createUser(next,name){
    const result = new user({
        autoInc: await next,
        name: name
    })
    await result.save();
}

async function lastIndex(collection){
    const length = Number(await collection.find({}).count());
    if(length !== 0 ){
        var colLastIndex = Number(Array.from(await collection.find({}))[length-1].autoInc);
        var nextElement = ++colLastIndex;
        console.log(nextElement);
        return Number(nextElement);
        
    }
}

async function getAll(){
    const result = await user.find({});
    console.log(result);
}

