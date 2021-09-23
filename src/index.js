import Express from "express";
import {graphqlHTTP} from "express-graphql";
import  Schema  from "./schema"
import { Connect } from "./database"
import  Cors  from "cors"
const app = Express();
Connect();
app.use(Cors({
    origin: 'https://www.section.io'
}));
app.get('/', (req, res) => {
    res.json({
        message: 'Hello word'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: Schema,
    context: {
        messageId: "text"
    }
}));

app.listen(3000, () => console.log('Server on port'));