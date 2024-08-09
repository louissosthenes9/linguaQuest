import "dotenv/config"
import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

//@ts-ignore

const db = drizzle(sql,{schema});

const main = async ()=>{
    try {
        console.log("seeding the database");
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed the database")
    }
}

main