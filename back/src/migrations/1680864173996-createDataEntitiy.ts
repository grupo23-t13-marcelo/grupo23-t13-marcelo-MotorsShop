import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataEntitiy1680864173996 implements MigrationInterface {
    name = 'CreateDataEntitiy1680864173996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(100) NOT NULL, "mileage" integer NOT NULL, "color" character varying(20) NOT NULL, "fipe_table_price" character varying(50) NOT NULL, "price" character varying(50) NOT NULL, "description" character varying NOT NULL, "cover_image" character varying NOT NULL, "is_activated" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "ads"`);
    }

}
