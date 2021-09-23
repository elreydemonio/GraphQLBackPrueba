import  Mongoose  from "mongoose";

export async function Connect() {
    try{
        await Mongoose.connect('mongodb://localhost/mongodbgrafphl', {
            useNewUrlParser: true
        })
        console.log('>>> DB is connected')
    }
    catch(e){
        console.log(e)
    }
    
}

