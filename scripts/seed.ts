  import "dotenv/config"
import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!)

//@ts-ignore

const db = drizzle(sql,{schema});

const main = async ()=>{
    try {
        console.log("deleting the database");
        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        console.log("delete complete");

        console.log("starting seeding")

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/es.svg"
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg",
              },
              {
                id: 3,
                title: "Japanese",
                imageSrc: "/jp.svg",
              },
              {
                id: 4,
                title: "French",
                imageSrc: "/fr.svg",
              },
              {
                id: 5,
                title: "Swahili",
                imageSrc: "/tz.svg",
              },

              {
                id:6,
                title:"Croatian",
                imageSrc: "/hr.svg",

              }
             
        ])

        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to seed the database")
    }
}

main()