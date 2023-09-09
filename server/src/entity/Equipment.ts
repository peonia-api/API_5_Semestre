import { Double } from "mongodb";
import { Column, Entity, GridFSBucket, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Equipment {

    @ObjectIdColumn()
    equip_id: ObjectId

    @Column()
    equip_tipo: number

    @Column()
    equip_serial: string

    @Column()
    equip_latitude: Double

    @Column()
    equip_longitude: Double

    @Column()
    equip_observacoes: string

    @Column()
    equip_foto: GridFSBucket

}