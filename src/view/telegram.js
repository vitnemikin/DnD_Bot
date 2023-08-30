export class Telegram {
    config = {token: ''}

    constructor(config=this.config) {
        this.config = config
    }

    start = () => {
        //console.log('Telegram connection started')
    }

    stop = () => {
        //console.log('Telegram connection stopped')
    }
}
