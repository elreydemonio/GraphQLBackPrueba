import { tasks } from "./samaple"
import { v4 as uuidv4 } from 'uuid';
import  User  from "./Scheama/User"

export const resolvers = {
    Query: {
        hellos: () => {
            return 'Hello World with grahp'
        },
        greet(root, { name }, ctx) {
            console.log(ctx)
            console.log(name)
            return 'Hello '+ name;
        },
        tasks() {
            return tasks;
        },
        async Users(){
            return await User.find();;
        }
    },
    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length
            tasks.push(input)
            return input;
        },
        async createUser(_, { input }){
            const USer = new User(input)
            User.ID = uuidv4()
            await USer.save()
            return USer;
        },
        async deleteUser(_, {_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, { new: true} )
        }
    }
}