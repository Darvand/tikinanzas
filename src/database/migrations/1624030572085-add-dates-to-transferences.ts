import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDatesToTransferences1624030572085
  implements MigrationInterface
{
  name = 'addDatesToTransferences1624030572085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transference" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "transference" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "transference" ADD "date" TIMESTAMP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "transference" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "transference" ADD "date" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" DROP COLUMN "updateAt"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" DROP COLUMN "createAt"`,
    );
  }
}
