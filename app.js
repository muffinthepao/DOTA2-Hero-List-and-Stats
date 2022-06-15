// console.log("wow");

const url = "https://api.opendota.com/api/heroStats";
const imgUrl = "https://api.opendota.com";

//get list of heroes from API
const data = async function getListOfHeroes(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (ex) {
        console.log("ex: ", ex);
    }
};

function createHeroes() {
    data(url).then((rs) => {
        rs.map((hero) => {
            return new Hero(
                hero.localized_name,
                hero.primary_attr,
                hero.attack_type,
                hero.img,
                hero.icon,
                hero.base_str,
                hero.base_agi,
                hero.base_int,
                hero.attack_range,
                hero.move_speed
            );
        });
    });
}

// data(url).then((rs) => {console.log(rs)})
// const allHeroes = data(url).then((rs) => {
//     rs.map(hero => {
//         return new Hero(
//             hero.localized_name
//         )
//     })
// })

// holds info about each hero
class Hero {
    constructor(
        heroName,
        primaryAttri,
        attackType,
        image,
        icon,
        baseStr,
        baseAgi,
        baseInt,
        attackRange,
        moveSpeed
    ) {
        this.heroName = heroName;
        this.primaryAttri = primaryAttri;
        this.attackType = attackType;
        this.image = image;
        this.icon = icon;
        this.baseStr = baseStr;
        this.baseAgi = baseAgi;
        this.baseInt = baseInt;
        this.attackRange = attackRange;
        this.moveSpeed = moveSpeed;
    }
}

class Game {
    arrayOfHeroes = [];
    //list of heroes [Hero, Hero, Hero, Hero]
    //display list of heroes
}

function init() {
    // data(url).then((rs) => {console.log("list of heroes: ", rs)});

    // function create instances of hero(s)
    createHeroes();

    //array of hero instances push into new Dota2 class
}

init();
