import { MigrationInterface, QueryRunner } from "typeorm";

export class default1698160159589 implements MigrationInterface {
    name = 'default1698160159589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userCpf" character varying(12) NOT NULL, "userMatricula" character varying(10) NOT NULL, "userTelefone" character varying(15) NOT NULL, "userName" character varying(100) NOT NULL, "userEmail" character varying(70) NOT NULL, "userPassword" character varying(100) NOT NULL, "userType" integer NOT NULL, "status" integer NOT NULL, "icone" character varying NOT NULL, CONSTRAINT "UQ_9047b2d58f91586f14f0cf44a45" UNIQUE ("userEmail"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
