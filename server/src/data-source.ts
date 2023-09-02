import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cliente } from "./entity/Cliente"

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: "clientes",
    url: "mongodb://db:27017",
    //host: "mongo-server",
    // port: 27018,
    // username: null,
    // password: null,
    synchronize: true,
    logging: false,
    entities: [Cliente],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source inicializado!"); //sucesso na promessa
  })
  .catch((e) => {
    console.error("Erro na inicialização do Data Source:", e);
  });

export default AppDataSource;