import Express from "express";
import {graphqlHTTP} from "express-graphql";
import  Schema  from "./schema"
import { Connect } from "./database"

const app = Express();
Connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello word'
    })
});

const schema = {};


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema,
    context: {
        messageId: "text"
    }
}));

app.listen(3000, () => console.log('Server on port'));