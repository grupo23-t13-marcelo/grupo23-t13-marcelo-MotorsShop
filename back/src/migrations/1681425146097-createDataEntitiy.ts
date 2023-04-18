import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataEntitiy1681425146097 implements MigrationInterface {
    name = 'CreateDataEntitiy1681425146097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_type_enum" AS ENUM('Anunciante', 'Comprador')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "cell_phone" character varying NOT NULL, "birthdate" date NOT NULL, "description" text NOT NULL, "password" character varying NOT NULL, "type" "public"."users_type_enum" NOT NULL, "profile_picture" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(100) NOT NULL, "mileage" integer NOT NULL, "color" character varying(20) NOT NULL, "fipe_table_price" character varying(50) NOT NULL, "price" character varying(50) NOT NULL, "description" character varying NOT NULL, "cover_image" character varying NOT NULL, "is_activated" boolean NOT NULL DEFAULT true, "user_id" uuid, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_843ca9647afecd4565861b0c9cb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_843ca9647afecd4565861b0c9cb"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_type_enum"`);
    }

}
