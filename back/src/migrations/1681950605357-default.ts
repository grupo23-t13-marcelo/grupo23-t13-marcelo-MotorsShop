import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681950605357 implements MigrationInterface {
    name = 'Default1681950605357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_16aac8a9f6f9c1dd6bcb75ec023"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "REL_16aac8a9f6f9c1dd6bcb75ec02"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "cep" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "cep" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "REL_16aac8a9f6f9c1dd6bcb75ec02" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_16aac8a9f6f9c1dd6bcb75ec023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
