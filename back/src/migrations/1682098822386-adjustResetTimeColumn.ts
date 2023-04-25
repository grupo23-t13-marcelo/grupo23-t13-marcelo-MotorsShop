import { MigrationInterface, QueryRunner } from "typeorm";

export class adjustResetTimeColumn1682098822386 implements MigrationInterface {
    name = 'adjustResetTimeColumn1682098822386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_time" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_time"`);
    }

}
