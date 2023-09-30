import { MigrationInterface, QueryRunner } from "typeorm";

export class default1696088852248 implements MigrationInterface {
    name = 'default1696088852248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying(100) NOT NULL, "userEmail" character varying(70) NOT NULL, "userPassword" character varying(30) NOT NULL, "userType" integer NOT NULL, "icone" character varying NOT NULL, CONSTRAINT "UQ_9047b2d58f91586f14f0cf44a45" UNIQUE ("userEmail"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
