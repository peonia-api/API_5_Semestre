import { Entity, ObjectIdColumn, ObjectId, Column, GridFSBucket } from "typeorm"

@Entity()
export class User {

    @ObjectIdColumn()
    usuario_id: ObjectId

    @Column()
    usuario_nome: string

    @Column()
    usuario_sobrenome: string

    @Column()
    usuario_email: string

    @Column()
    usuario_telefone: number

    @Column()
    usuario_matricula: string

    @Column()
    usuario_cpf: number

    @Column()
    usuario_foto: GridFSBucket
    
}