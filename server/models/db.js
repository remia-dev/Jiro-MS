import mongoose from "mongoose";
import { loadType } from "mongoose-currency"

const Schema = mongoose.Schema;
// For currency
loadType(mongoose)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
    }, {toJSON: {getters: true}}
)

const daySchema = new Schema(
    {
        day: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
    }
)

const KPIschema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v/100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],
    }, {timestamps: true, toJSON: {getters: true}}
)



const KPI = mongoose.model("KPI", KPIschema)

export default KPI