
import express from 'express'
import routes from './routes'
import cors from 'cors'

import './database'

class App {
    constructor() {
        this.app = express()
        this.app.use(cors({
            origin: '*',
            optionsSuccessStatus: 200,
        }))
        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.app.use(express.json())

    }

    routes() {
        this.app.use(routes)

    }
}

export default new App().app