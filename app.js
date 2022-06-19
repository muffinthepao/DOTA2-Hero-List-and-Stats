// console.log("wow");

const url = "https://api.opendota.com/api/heroStats";
const imgUrl = "https://api.opendota.com";

const heroesList = document.querySelector("#hero-list");

const strAttributeImg = "./attribute-images/strength.png";
const agiAttributeImg = "./attribute-images/agility.png";
const intAttributeImg = "./attribute-images/intelligence.png";

const filteredBy = document.querySelector("#filter-bar");
const searchByTextInput = document.getElementById("search-input");

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
    //list of heroes [Hero, Hero, Hero, Hero]
    constructor(heroes) {
        //source of truth for all heroes
        this.arrayOfHeroes = heroes;
        //
        this.heroesToDisplay = heroes;
        this.display();
        // this.myFunction();
        // this.checker = this.checkIfThereIsOnlyOneAttribute();
    }

    //sort array by hero name alphabetically

    //display images on index.html
    display() {
        console.log("displaying");
        // console.log(this.heroesToDisplay)
        this.heroesToDisplay.forEach((element) => {
            console.log("+");

            function whichArrtibutePic() {
                if (element.primaryAttri === "str") {
                    return strAttributeImg;
                }

                if (element.primaryAttri === "agi") {
                    return agiAttributeImg;
                }

                if (element.primaryAttri === "int") {
                    return intAttributeImg;
                }
            }

            const htmlElements = `
                <div class="hero-image" style="background-image: url(&quot;${imgUrl}${
                element.image
            }&quot)">
                    <div class="hero-name-display">
                        <img src="${whichArrtibutePic()}"/>
                        <h4 class:"hero-name">${element.heroName}</h4>
                    </div>
                </div>
            `;
            heroesList.insertAdjacentHTML("beforeend", htmlElements);
        });
    }

    filterByAttribute(id, element) {
        // console.log("parent: ", event.target.parentElement);
        // console.log("element: ", event.target);

        // const push = document.querySelector("#hero-list");
        heroesList.innerHTML = "";
        searchByTextInput.value = "";

        if (id === "strFilter") {
            console.log("clicked on strength");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "str"
            );
            this.display();
            // element.classList.toggle("active")
        }

        if (id === "agiFilter") {
            console.log("clicked on agility");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "agi"
            );
            this.display();
            // element.classList.toggle("active")
        }

        if (id === "intFilter") {
            console.log("clicked on intelligence");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "int"
            );
            this.display();
            // element.classList.toggle("active")
        }

        return this.display();
    }

    searchByName(value) {
        heroesList.innerHTML = "";
        let allLowerCase = value.toLowerCase();
        let x = this.arrayOfHeroes;
        let y = document.getElementsByClassName("hero-name");

        this.heroesToDisplay = this.arrayOfHeroes.filter((x) =>
            x.heroName.toLowerCase().includes(allLowerCase)
        );
        this.display();

        if (this.heroesToDisplay.length === 0) {
            document.getElementById("null-state").style.display = "flex"
        } else {
            document.getElementById("null-state").style.display = "none"
        }

        // for (let i = 0; i < x.length; i++) {
        //     if(!x[i].heroName.toLowerCase().includes(allLowerCase)) {
        //         console.log(x[i].heroName)
        //     }
        // }
    }
}

async function init() {
    // function create instances of hero(s)
    let heroes = await data(url);
    // let filteredHeroes = await strHeroes(url)

    // //array of hero instances push into new Dota2 class
    const Dota2 = new Game(heroes);
    console.log("List of heroes: ", Dota2);
    // let dota3 = Dota2.arrayOfHeroes.filter(x=>x.primaryAttri==="str")
    // console.log(dota3)

    filteredBy.onclick = function (event) {
        Dota2.filterByAttribute(event.target.id, event.target);
    };

    searchByTextInput.onkeyup = function () {
        Dota2.searchByName(searchByTextInput.value);
    };
}

init();
