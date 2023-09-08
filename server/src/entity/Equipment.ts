import { Double } from "mongodb";
import { Column, Entity, GridFSBucket, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Equipment {

    @ObjectIdColumn()
    equip_id: ObjectId

    @Column({ nullable: false, length: 5 })
    equip_tipo: number

    @Column({ nullable: false, length: 30 })
    equip_serial: string

    @Column({ nullable: false })
    equip_latitude: Double

    @Column({ nullable: false })
    equip_longitude: Double

    @Column({ nullable: false, length: 200 })
    equip_observacoes: string

    // @Column({ nullable: false })
    // equip_foto: GridFSBucket

}