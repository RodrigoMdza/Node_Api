import { MigrationInterface, QueryRunner } from "typeorm";

export class productCategoryRelation1661351513149 implements MigrationInterface {
    name = 'productCategoryRelation1661351513149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product_category\` (\`product_id\` int NOT NULL, \`category_id\` int NOT NULL, INDEX \`IDX_0374879a971928bc3f57eed0a5\` (\`product_id\`), INDEX \`IDX_2df1f83329c00e6eadde0493e1\` (\`category_id\`), PRIMARY KEY (\`product_id\`, \`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product_category\` ADD CONSTRAINT \`FK_0374879a971928bc3f57eed0a59\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`product_category\` ADD CONSTRAINT \`FK_2df1f83329c00e6eadde0493e16\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_category\` DROP FOREIGN KEY \`FK_2df1f83329c00e6eadde0493e16\``);
        await queryRunner.query(`ALTER TABLE \`product_category\` DROP FOREIGN KEY \`FK_0374879a971928bc3f57eed0a59\``);
        await queryRunner.query(`DROP INDEX \`IDX_2df1f83329c00e6eadde0493e1\` ON \`product_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_0374879a971928bc3f57eed0a5\` ON \`product_category\``);
        await queryRunner.query(`DROP TABLE \`product_category\``);
    }

}
