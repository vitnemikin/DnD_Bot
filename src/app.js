import { Telegram } from './view/telegram.js'
import { Types, Races, Person } from './models/person.js'


export class Application {
    config = {telegram: null}

    constructor(config=this.config) {
        this.config = config
        this.view = new Telegram(config.telegram)
        console.log("Application created with the following config:\n", config)
    }

    start = async () => {
        this.view.start()
    }

    stop = async () => {
        this.view.stop()
    }

    test = () => {
        let testMan = new Person("Элронд", Races.ELF, Types.MAGE)
        console.log("Test personage created:\n", testMan)
    }
}
