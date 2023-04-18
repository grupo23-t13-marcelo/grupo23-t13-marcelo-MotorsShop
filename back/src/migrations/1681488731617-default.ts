import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1681488731617 implements MigrationInterface {
    name = 'Default1681488731617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."users_type_enum" RENAME TO "users_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."users_type_enum" AS ENUM('Anunciante', 'Comprador')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "type" TYPE "public"."users_type_enum" USING "type"::"text"::"public"."users_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_type_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_type_enum_old" AS ENUM('anunciante', 'comprador')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "type" TYPE "public"."users_type_enum_old" USING "type"::"text"::"public"."users_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."users_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."users_type_enum_old" RENAME TO "users_type_enum"`);
    }

}
