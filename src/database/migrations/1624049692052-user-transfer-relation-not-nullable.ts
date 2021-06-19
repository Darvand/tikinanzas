import { MigrationInterface, QueryRunner } from 'typeorm';

export class userTransferRelationNotNullable1624049692052
  implements MigrationInterface
{
  name = 'userTransferRelationNotNullable1624049692052';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transference" DROP CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" ALTER COLUMN "userUuid" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" ADD CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581" FOREIGN KEY ("userUuid") REFERENCES "user"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transference" DROP CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" ALTER COLUMN "userUuid" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "transference" ADD CONSTRAINT "FK_98c63d5b3067e6d9fbf22cfc581" FOREIGN KEY ("userUuid") REFERENCES "user"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
