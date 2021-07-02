import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1625006391033 implements MigrationInterface {
  name = 'init1625006391033';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "transferences_source_enum" AS ENUM('Salary', 'Account', 'Credit Card')`,
    );
    await queryRunner.query(
      `CREATE TYPE "transferences_category_enum" AS ENUM('Food', 'Travel', 'Tax', 'Combustible', 'Games', 'Health')`,
    );
    await queryRunner.query(
      `CREATE TABLE "transferences" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "source" "transferences_source_enum" NOT NULL, "date" TIMESTAMP NOT NULL, "category" "transferences_category_enum" NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "user_uuid" uuid NOT NULL, CONSTRAINT "PK_8a589829a5694ddea4217796ec3" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "transferences" ADD CONSTRAINT "FK_ae9d9bcbcd0cca6d2d12d458d67" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transferences" DROP CONSTRAINT "FK_ae9d9bcbcd0cca6d2d12d458d67"`,
    );
    await queryRunner.query(`DROP TABLE "transferences"`);
    await queryRunner.query(`DROP TYPE "transferences_category_enum"`);
    await queryRunner.query(`DROP TYPE "transferences_source_enum"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
