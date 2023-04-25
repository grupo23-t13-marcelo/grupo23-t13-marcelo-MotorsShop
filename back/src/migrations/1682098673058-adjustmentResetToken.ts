import { MigrationInterface, QueryRunner } from "typeorm";

export class adjustmentResetToken1682098673058 implements MigrationInterface {
    name = 'adjustmentResetToken1682098673058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_time" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_time"`);
    }

}
