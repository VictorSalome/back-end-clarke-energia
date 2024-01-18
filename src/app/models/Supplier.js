import Sequelize, { Model } from 'sequelize';

class Supplier extends Model {
    static init(sequelize) {
        super.init(
            {
                supplier_name: Sequelize.STRING,
                supplier_state: Sequelize.STRING,
                supplier_kwh: Sequelize.STRING,
                supplier_minkwh: Sequelize.STRING,
                supplier_totalcustomers: Sequelize.STRING,
                supplier_assessment: Sequelize.STRING,
                supplier_url: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )
    }
}

export default Supplier