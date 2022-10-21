import mongoose, {model} from 'mongoose';
import * as Console from "console";
const { Schema } = mongoose;

const schemaUser = new Schema(
    {
            "userId" : Number,
            "username": String,
            "password": String,
            "groups": [Number], //group_id
            "mail": String,
            "birthday": Date
    }
)


const schemaGroup = new Schema(
    {
            "group_name": String,
            "group_id": Number,
            "members": {
                    "user_id": Number,
                    "balance": Number
            },
            "calendar": [{
                    "event": {
                            "name": String,
                            "start": Date,
                            "end": Date,
                            "participants" : [Number] //user_id
                    }

            }],
    }
)