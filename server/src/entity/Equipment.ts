import { Entity, ObjectIdColumn, ObjectId, Column } from "typeorm"

// enum EquipmentType {
//     Tipo1 = 1,
//     Tipo2 = 2,
//     Tipo3 = 3,
//     Tipo4 = 4,
//     Tipo5 = 5
// }

@Entity()
export class Equipment {

    @ObjectIdColumn()
    id: ObjectId

    @Column({ type: "int", width: 5 })
    type: number;

    // @Column({ type: "enum", enum: EquipmentType })
    // type: EquipmentType;

    @Column({ type: "varchar", length: 30 })
    serial: string;

    @Column({ type: "double precision" })
    latitude: number;

    @Column({ type: "double precision" })
    longitude: number;

    @Column({ type: "varchar", length: 200 })
    observations: string;

    @Column()
    url: string[]
}

