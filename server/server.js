/* You need to set "type" : "module" in package.json */
import express from 'express'
import bodyParser from 'body-parser'
import mongoose, { connect } from 'mongoose'
import cors from "cors"
import dotenv from "dotenv"
import helmet from 'helmet'
import morgan from 'morgan'

// Key performance indicators
import KPI from './models/db.js'
import kpiRoutes from './routes/kpi.js'
import { kpis } from './data/data.js'

// products
import { products } from './data/data.js'
import productRoutes from './routes/product.js'
import Product from './models/Product.js'

// transaction 
import { transactions } from './data/data.js'
import transactionRoutes from './routes/transaction.js'
import Transaction from './models/Transaction.js'

/* CONFIGURATION BOILERPLATE*/
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

/* ROUTES */
app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
app.use('/transaction', transactionRoutes)

/* MONGOOSE SETUP AND PORT SETUP */
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    // say connect to database
    // console.log(`Connected to database: ${mongoose.Connection}`)

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    // drop every database to avoid multiple entries | remove in production
    // await mongoose.connection.db.dropDatabase();
    // Insert mock data.js
    // KPI.insertMany(kpis);
    // Product.insertMany(products)
    // Transaction.insertMany(transactions);

}).catch((error) => console.log(`${error} did not connect`));




