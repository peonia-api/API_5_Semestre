import { db } from "../database";

class Equipmente{

    constructor(){
        this.create()
        this.removeDuplicatas()
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

    get(): Promise<string[]> {
      return new Promise((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM equipment',
            [],
            (_, { rows }) => {
              const dataFromDatabase = rows._array.map((row) => JSON.parse(row.dados_json));
              console.log('Dados recuperados do banco de dados:', dataFromDatabase);
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

    async removeDuplicatas() {
      try {
        const dados = await this.get();
        
        const mapaIds: Record<string, number> = {};
        
        for (let i = 0; i < dados.length; i++) {
          const id = Object.values(dados[i])[0]
  
          if (mapaIds[id] !== undefined) {
            // Se já encontrou um registro com o mesmo _id, remove o registro atual
            await this.removerRegistro(mapaIds[id]);
          } else {
            // Se é a primeira vez que encontra esse _id, armazena o índice
            mapaIds[id] = i;
          }
        }
  
        console.log("Duplicatas removidas com sucesso!");
      } catch (error) {
        console.error('Erro ao remover duplicatas:', error);
      }
    }
  
    async removerRegistro(id: number) {
      return new Promise<void>((resolve, reject) => {
        db.transaction((tx) => {
          tx.executeSql(
            'DELETE FROM equipment WHERE id = ?',
            [id],
            () => {
              console.log('Registro removido com sucesso!' + id);
              resolve();
            },
            (_, error) => {
              console.error('Erro ao remover registro:', error);
              return false
            }
          );
        });
      });
    }
      
}

export default new Equipmente()