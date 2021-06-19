import { MigrationInterface, QueryRunner } from 'typeorm';

export class relateUserWithTransferences1624046651913
  implements MigrationInterface
{
  name = 'relateUserWithTransferences1624046651913';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "transference" ADD "userUuid" uuid`);
    await queryRunner.query(
      `ALTER TABLE "transference" ADD CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581" FOREIGN KEY ("userUuid") REFERENCES "user"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transference" DROP CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" DROP COLUMN "userUuid"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
  }
}
