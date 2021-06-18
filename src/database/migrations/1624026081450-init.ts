import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1624026081450 implements MigrationInterface {
  name = 'init1624026081450';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "transference" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "amount" integer NOT NULL, "source" "transference_source_enum" NOT NULL, "date" character varying NOT NULL, "category" "transference_category_enum" NOT NULL, CONSTRAINT "PK_f3cf51f5a274241ccb08d86b084" PRIMARY KEY ("uuid"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transference"`);
  }
}
