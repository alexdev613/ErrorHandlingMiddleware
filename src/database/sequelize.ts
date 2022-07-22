import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dvdrental', 'postgres', '1987', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false 
});

export default sequelize;
