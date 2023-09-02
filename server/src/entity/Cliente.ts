import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"

@Entity()
export class Cliente {

    @ObjectIdColumn()
    id: ObjectId

    @Column()
    cli_id: string

    @Column()
    date: Date

}
