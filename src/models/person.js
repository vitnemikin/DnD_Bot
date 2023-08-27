// классы персонажей
export const Types = {
    PALLADIN: 'Палладин',
    BARBARIAN: 'Варвар',
    ROGUE: 'Плут',
    MAGE: 'Чародей',
    DRUID: 'Друид',
    CLERIC: 'Жрец'
}

// расы
export const Races = {
    HUMAN: 'Человек',
    DWARF: 'Дварф',
    ELF: 'Эльф',
    ORC: 'Орк'
}

// основной тип данных
export class Person {
    name               // имя
    type               // класс перса
    race               // раса
    avatar             // изображение перса
    level = 1          // уровень
    experience = 0     // опыт
    strength = 8       // сила
    agility = 8        // ловкость
    intelligence = 8   // интеллект
    charm = 8          // харизма
    
    hp                 // текущие хиты
    mana = 0           // текущая мана
    mood = 10          // настроение
    state = 'good'     // состояние
    equipment = {}     // снаряга
    outfit = {}        // что надето
    
    skills = {}        // особые умения
    guilds = {}        // членство в гильдиях


    constructor(name, race, type) {
        this.name = name
        this.race = race
        this.type = type
        this.hp = this.maxHP()
    }

    maxHP = () => {
        return 20 + this.level * Math.floor(this.strength / 2) 
    }
}