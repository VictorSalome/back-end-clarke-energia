
import { v4 } from 'uuid'
import Supplier from '../models/Supplier'
import { Op } from 'sequelize'
class SupplierController {
    async store(request, response) {

        const { supplier_name, supplier_state, supplier_kwh, supplier_minkwh, supplier_totalcustomers, supplier_assessment, supplier_url } = request.body


        const supplier = await Supplier.create({
            id: v4(),
            supplier_name,
            supplier_state,
            supplier_kwh,
            supplier_minkwh,
            supplier_totalcustomers,
            supplier_assessment,
            supplier_url,

        })

        return response.json(supplier)

    }
    async index(request, response) {

        const kwh = request.query.kwh || "0"
        const suppliers = await Supplier.findAll({ where: { supplier_minkwh: { [Op.gte]: kwh } } , order: [['supplier_minkwh', 'DESC']] })
        console.log("suppliers", suppliers)
        return response.json(suppliers)

    }

}

export default new SupplierController()