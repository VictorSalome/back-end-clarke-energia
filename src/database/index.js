import Sequelize from 'sequelize'
import Supplier from '../app/models/Supplier'
import configDatabase from '../config/database'

const models = [Supplier]

class Database {

    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()