import { MigrationInterface, QueryRunner } from "typeorm";

export class default1696089979349 implements MigrationInterface {
    name = 'default1696089979349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userPassword"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userPassword" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userPassword"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userPassword" character varying(30) NOT NULL`);
    }

}
