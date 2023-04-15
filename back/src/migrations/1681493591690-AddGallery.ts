import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGallery1681493591690 implements MigrationInterface {
    name = 'AddGallery1681493591690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "file_name" character varying NOT NULL, "adId" uuid, CONSTRAINT "PK_65d7a1ef91ddafb3e7071b188a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(100) NOT NULL, "mileage" integer NOT NULL, "color" character varying(20) NOT NULL, "fipe_table_price" character varying(50) NOT NULL, "price" character varying(50) NOT NULL, "description" character varying NOT NULL, "cover_image" character varying NOT NULL, "is_activated" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "gallery" ADD CONSTRAINT "FK_f449b2be3b8f5ecd4a3537d3bbf" FOREIGN KEY ("adId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gallery" DROP CONSTRAINT "FK_f449b2be3b8f5ecd4a3537d3bbf"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TABLE "gallery"`);
    }

}
