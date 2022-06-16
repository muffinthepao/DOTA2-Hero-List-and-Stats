// console.log("wow");

const url = "https://api.opendota.com/api/heroStats";
const imgUrl = "https://api.opendota.com";

//get list of heroes from API
const data = async function getListOfHeroes(url) {
    try {
        const response = await fetch(url);
        const heroesData = await response.json();
        return heroesData.map((hero) => {
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
    } catch (ex) {
        console.log("ex: ", ex);
    }
};

// function to create new hero instances
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
    constructor(heroes) {
        //list of heroes [Hero, Hero, Hero, Hero]
        this.arrayOfHeroes = heroes;
        this.display();
    }

    //display images on index.html
    display() {
        return this.arrayOfHeroes.forEach((element) => {
            const push = document.querySelector("#hero-list");
            const htmlElements = `
                <div class="hero-image">
                    <img src="${imgUrl}${element.image}"/>
                </div>
                `;
            push.insertAdjacentHTML("beforeend", htmlElements);
        });
    }
}

async function init() {
    // function create instances of hero(s)
    const heroes = await data(url);

    //array of hero instances push into new Dota2 class
    const Dota2 = new Game(heroes);
    console.log("List of heroes: ", Dota2);
}

init();
