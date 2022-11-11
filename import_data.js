import * as dotenv from "dotenv"
dotenv.config()
console.log(process.env.MONGO_URI)



import mongoose, {disconnect, model} from 'mongoose';
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
        "members": [{
            "user_id": Number,
            "expenses": Number
        }],
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




async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected!");

    const Location = new model('Groups', schemaGroup)

    // test remplissage DB
    const premierLocation = new Location({
        group_name: "Fuck Bonnefoy",
        group_id: 1,
        members: [{
            user_id: 25,
            expenses: 34,
        },
            {
                user_id: 26,
                expenses: 0,
            }],
        calendar: [{
            event: {
                name: "Sortie équestre",
                start: (2023, 11,  17),
                end: (2023, 11,  18),
                participants : [25,26] //user_id
            }

        }],
    })
    await premierLocation.save()
    disconnect()
}

main()


