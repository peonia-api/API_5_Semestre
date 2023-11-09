import { db } from "../database";

class Equipmente{

    constructor(){
        this.create()
    }
    create(){
        db.transaction((tx) => {
            let sql = [`DROP TABLE IF EXISTS equipment`, 'CREATE TABLE IF NOT EXISTS equipment (id INTEGER PRIMARY KEY AUTOINCREMENT, dados_json TEXT UNIQUE)']
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS equipment (id INTEGER PRIMARY KEY AUTOINCREMENT, dados_json TEXT UNIQUE)'
            );
        })
    }
      
    insert(listaJson:any){
        listaJson.forEach((jsonData:any) => {
            db.transaction((tx) => {
              tx.executeSql(
                'INSERT INTO equipment (dados_json) VALUES (?)',
                [JSON.stringify(jsonData)],
                (_, { rows }) => {
                  console.log('Dados inseridos com sucesso!');
                },
                (_, error) => {
                  return false
                }
              );
            });
        });
    }

    get(){
        db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM equipment',
              [],
              (_, { rows }) => {
                const dataFromDatabase = rows._array.map((row) => JSON.parse(row.dados_json));
                console.log('Dados recuperados do banco de dados:', dataFromDatabase);
                return dataFromDatabase
              },
              (_, error) => {
                console.error('Erro ao recuperar dados:', error);
                return false
              }
            );
          });
    }
      
}

export default new Equipmente()