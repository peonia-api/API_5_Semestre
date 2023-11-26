import { db } from "../database";

class Create{

    constructor(){
        this.create()
    }
    create(){
        db.transaction((tx) => {
          //CREATE TABLE IF NOT EXISTS equipment (id TEXT, dados_json TEXT UNIQUE)
            let sql = [`DROP TABLE IF EXISTS equipmentCreate`, 'CREATE TABLE IF NOT EXISTS equipment (id INTEGER PRIMARY KEY AUTOINCREMENT, dados_json TEXT UNIQUE)']
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS equipmentCreate (id INTEGER PRIMARY KEY AUTOINCREMENT, body TEXT UNIQUE)'
            );
        })
    }
      
    insert(listaJson:any){
        listaJson.forEach((jsonData:any) => {
            db.transaction((tx) => {
              tx.executeSql(
                'INSERT INTO equipmentCreate (body) VALUES (?)',
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
        //this.removeDuplicatas()
    }

    get(): Promise<string[]> {
      return new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM equipmentCreate',
            [],
            (_, { rows }) => {
              const dataFromDatabase = rows._array.map((row) => JSON.parse(row.body));
              //console.log('Dados recuperados do banco de dados:', dataFromDatabase);
              resolve(dataFromDatabase);
            },
            (_, error) => {
              console.error('Erro ao recuperar dados:', error);
              return false
            }
          );
        });
      });
    }

    teste(): Promise<{}>{
      return new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM equipmentCreate',
            [],
            (_, { rows }) => {
              const teste = rows._array.map((row) => ([              
                row.id, JSON.parse(row.body),]
              ));
    
              // console.log('Dados recuperados do banco de dados:', teste);
              resolve(teste);
            },
            (_, error) => {
              console.error('Erro ao recuperar dados:', error);
              return false
            }
          );
        });
      });
    }

    async removeDuplicatas() {
      try {

        const achaIds = async (arr:any) => {
          const list:any = []
          const ids:number[] = []
          const posi:number[] = []
          arr.forEach((item:any) => {
            console.log(item[1]._id);
            console.log(item);
            if(list.includes(item[1]._id) === true){
              posi.push(ids[list.indexOf(item[1]._id)])
            }else{
              list.push(item[1]._id)
              ids.push(item[0])
            }
              
          })        
          return posi
        }
        
        const dados:any = await this.teste();
        const ids = achaIds(dados)

        if((await ids).length > 0){
          (await ids).forEach((item) => this.removerRegistro(item))
        }
  
        console.log("Duplicatas removidas com sucesso!");
      } catch (error) {
        console.error('Erro ao remover duplicatas:', error);
      }
    }
  
    async removerRegistro(id: number) {
      console.log(id);
    
      return new Promise<void>(async (resolve, reject) => {
        db.transaction(async (tx) => {
          try {
            const result = await new Promise<any>((resolve, reject) => {
              tx.executeSql(
                `DELETE FROM equipmentCreate WHERE id = ?`,
                [id],
                (_, result) => resolve(result),
                (_, error) => {
                  console.error('Erro no SQL:', error);
                  return false;
                }
              );
            });

            if (result.rowsAffected > 0) {
              console.log(`Registro removido com sucesso! ID: ${id}`);
              resolve();
            } else {
              console.log(`Nenhum registro foi removido. ID: ${id}`);
              resolve();
            }
          } catch (error) {
            console.error('Erro ao remover registro:', error);
            reject(error);
          }
        });
      });
  }
      
}

export default new Create()