import { MigrationInterface, QueryRunner } from "typeorm";

export class addResetToken1682026916191 implements MigrationInterface {
    name = 'addResetToken1682026916191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
