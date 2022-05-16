import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Comments1652407530835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profileDB.comments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'comment',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }))
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profileDB.comments', true, true, true);
    }
}
