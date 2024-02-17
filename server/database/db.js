import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()


const DB_URL = 'mongodb + srv://sids58316:velu12345@cluster0.h3khdzr.mongodb.net/'

const Connection = () => {

    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true })   // it takes two arguments 1. db url 2. attribute useNewsUrlParse
        console.log(`Database connected successfully`)
    } catch (error) {
        console.log('Error while connecting database', error.message);
    }
}


export default Connection