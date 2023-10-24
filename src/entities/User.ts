import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany, ManyToMany, ManyToOne } from "typeorm";
import * as bcrypt from "bcrypt";

enum UserType {
    Admin = 1,
    Comum = 2
}

enum Status {
    Ativo = 1,
    Pendente = 2,
    Desativado = 3,
}

@Entity({ name: "users" })
export class User {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 12 })
    userCpf: string;

    @Column({ nullable: false, length: 10 })
    userMatricula: string;

    @Column({ nullable: false, length: 15 })
    userTelefone: string;

    @Column({ nullable: false, length: 100 })
    userName: string;

    // @Column({ nullable: false, length: 25 })
    // userPosition: string;

    @Column({ nullable: false, unique: true, length: 70 })
    userEmail: string;

    @Column({ nullable: false, select: false, length: 100 })
    userPassword: string;

    @Column({ nullable: false, enum: UserType }) 
    userType: UserType;

    @Column({ nullable: false, enum: Status }) 
    status: Status;

    @Column()
    icone: string;


    @BeforeInsert() //a função hashPassword é disparada antes do insert e update
    @BeforeUpdate()
    hashPassword(): void {
        if (this.userPassword) {
            // a senha é codificada usando o algoritmo do pacote bcrypt
            this.userPassword = bcrypt.hashSync(this.userPassword, bcrypt.genSaltSync(10));
        }
    }

    compare(input: string): Promise<boolean> {
        // a senha fornecida em input é comparada com a senha do registro armazenado no SGBD
        return bcrypt.compare(input, this.userPassword);
    }
}
