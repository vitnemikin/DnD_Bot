import { Application } from "./app.js"
import fs from 'fs'
import ini from 'ini'

const cfg_file = fs.readFileSync("./src/config.ini", "utf-8")
const config = ini.parse(cfg_file)

const app = new Application(config)
await app.start()

app.test()
await app.stop()
