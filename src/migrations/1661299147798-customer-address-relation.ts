import { MigrationInterface, QueryRunner } from "typeorm";

export class customerAddressRelation1661299147798 implements MigrationInterface {
    name = 'customerAddressRelation1661299147798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`address\` ADD \`customerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_dc34d382b493ade1f70e834c4d3\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_dc34d382b493ade1f70e834c4d3\``);
        await queryRunner.query(`ALTER TABLE \`address\` DROP COLUMN \`customerId\``);
    }

}
