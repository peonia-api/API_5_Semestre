// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

import * as express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

// cria o servidor e coloca na variável app
const app = express();
// suporta parâmetros JSON no body da requisição
app.use(express.json()); 

const PORT = process.env.PORT || 3001;

// inicializa o servidor na porta especificada
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
// define a rota para o pacote /routes
app.use(routes);
