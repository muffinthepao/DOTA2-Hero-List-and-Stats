// console.log("wow");

const url = "https://api.opendota.com/api/heroStats";
const imgUrl = "https://api.opendota.com";

const heroesList = document.querySelector("#hero-list");

const strAttributeImg = "./attribute-images/strength.png";
const agiAttributeImg = "./attribute-images/agility.png";
const intAttributeImg = "./attribute-images/intelligence.png";

//to filter heroes
const filteredBy = document.querySelector("#filter-bar");
const searchByTextInput = document.getElementById("search-input");

//to display hero stats
const displayModal = document.querySelector("#modal");
const overlay = document.getElementById("overlay");

//get list of heroes from API
const heroesData = async function getListOfHeroes(url) {
    try {
        const response = await fetch(url);
        const heroes = await response.json();
        return heroes.map((hero) => {
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
                hero.move_speed,
                hero.base_health,
                hero.base_mana,
                hero.base_attack_min,
                hero.base_attack_max,
                hero.str_gain,
                hero.agi_gain,
                hero.int_gain,
                hero.attack_rate,
                hero.turn_rate,
                hero.legs,
                hero["1_pick"],
                hero["1_win"],
                hero["2_pick"],
                hero["2_win"],
                hero["3_pick"],
                hero["3_win"],
                hero["4_pick"],
                hero["4_win"],
                hero["5_pick"],
                hero["5_win"],
                hero["6_pick"],
                hero["6_win"],
                hero["7_pick"],
                hero["7_win"],
                hero["8_pick"],
                hero["8_win"]

                //hero total pics - popularity
                //hero wins - success rate
                //
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
        moveSpeed,
        baseHealth,
        baseMana,
        baseAttackMin,
        baseAttackMax,
        strGain,
        agiGain,
        intGain,
        attackRate,
        turnRate,
        legs,
        rankOnePicks,
        rankOneWins,
        rankTwoPicks,
        rankTwoWins,
        rankThreePicks,
        rankThreeWins,
        rankFourPicks,
        rankFourWins,
        rankFivePicks,
        rankFiveWins,
        rankSixPicks,
        rankSixWins,
        rankSevenPicks,
        rankSevenWins,
        rankEightPicks,
        rankEightWins
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
        this.baseHealth = baseHealth;
        this.baseMana = baseMana;
        this.baseAttackMin = baseAttackMin;
        this.baseAttackMax = baseAttackMax;
        this.strGain = strGain;
        this.agiGain = agiGain;
        this.intGain = intGain;
        this.attackRate = attackRate;
        this.turnRate = turnRate;
        this.legs = legs;
        this.rankOnePicks = rankOnePicks;
        this.rankOneWins = rankOneWins;
        this.rankTwoPicks = rankTwoPicks;
        this.rankTwoWins = rankTwoWins;
        this.rankThreePicks = rankThreePicks;
        this.rankThreeWins = rankThreeWins;
        this.rankFourPicks = rankFourPicks;
        this.rankFourWins = rankFourWins;
        this.rankFivePicks = rankFivePicks;
        this.rankFiveWins = rankFiveWins;
        this.rankSixPicks = rankSixPicks;
        this.rankSixWins = rankSixWins;
        this.rankSevenPicks = rankSevenPicks;
        this.rankSevenWins = rankSevenWins;
        this.rankEightPicks = rankEightPicks;
        this.rankEightWins = rankEightWins;
        this.rankOneSuccess = ((rankOneWins / rankOnePicks) * 100).toFixed(2) + "%";
        this.rankTwoSuccess = ((rankTwoWins / rankTwoPicks) * 100).toFixed(2) + "%";
        this.totaPicks =
            rankOnePicks +
            rankTwoPicks +
            rankThreePicks +
            rankFourPicks +
            rankFivePicks +
            rankSixPicks +
            rankSevenPicks +
            rankEightPicks;
        this.totalWins =
            rankOneWins +
            rankTwoWins +
            rankThreeWins +
            rankFourWins +
            rankFiveWins +
            rankSixWins +
            rankSevenWins +
            rankEightWins;
        this.totalSuccess =
            ((this.totalWins / this.totaPicks) * 100).toFixed(2) + "%";
        this.trueBaseHealth = baseHealth + baseStr * 20;
        this.trueBaseMana = baseMana + baseInt * 12;
    }
}

class Heroes {
    //list of heroes [Hero, Hero, Hero, Hero]
    constructor(heroes) {
        //source of truth for all heroes
        this.arrayOfHeroes = heroes.sort(this.sortHeroesAlphabetically);
        //variable displaylist
        this.heroesToDisplay = heroes;
        this.displayListOfHeroes();
        this.showStrHeroes = true;
        this.showAgiHeroes = true;
        this.showIntHeroes = true;
    }

    //sort array by hero name alphabetically
    sortHeroesAlphabetically(x,y){
        if (x.heroName < y.heroName ) {return -1}
        if (x.heroName > y.heroName ) {return 1}
        return 0
    }

    //display images on index.html
    displayListOfHeroes() {
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
                <div class="hero-image" id="${
                    element.heroName
                }" style="background-image: url(&quot;${imgUrl}${
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

    filterByAttribute(id) {
        heroesList.innerHTML = "";
        searchByTextInput.value = "";

        if (id === "strFilter") {
            console.log("clicked on strength");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "str"
            );
            this.displayListOfHeroes();
            // element.classList.toggle("active")
        }

        if (id === "agiFilter") {
            console.log("clicked on agility");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "agi"
            );
            this.displayListOfHeroes();
            // element.classList.toggle("active")
        }

        if (id === "intFilter") {
            console.log("clicked on intelligence");
            this.heroesToDisplay = this.arrayOfHeroes.filter(
                (x) => x.primaryAttri === "int"
            );
            this.displayListOfHeroes();
            // element.classList.toggle("active")
        }

        return this.displayListOfHeroes();

        //if (element.data.selected == true) show all heroes
        //else run filter
        //look at data attributes doc
    }

    searchByName(value) {
        heroesList.innerHTML = "";
        let allLowerCase = value.toLowerCase();
        let x = this.arrayOfHeroes;
        let y = document.getElementsByClassName("hero-name");

        this.heroesToDisplay = this.arrayOfHeroes.filter((x) =>
            x.heroName.toLowerCase().includes(allLowerCase)
        );
        this.displayListOfHeroes();

        if (this.heroesToDisplay.length === 0) {
            document.getElementById("null-state").style.display = "flex";
        } else {
            document.getElementById("null-state").style.display = "none";
        }
    }

    displayHeroStats(event) {
        // console.log("parent: ", event.target.parentElement);
        // console.log("element: ", event.target.id);

        let selectedHero = this.arrayOfHeroes.find(
            (x) => x.heroName === event.target.id
        );

        if (selectedHero.turnRate == null) {
            selectedHero.turnRate = 0.6;
        }

        displayModal.innerHTML = "";

        const heroModal = `
            <div class="modal-header">
                <img src=""/>
                <div class="title">${selectedHero.heroName}</div>
                <button data-close-button class="close-button" id="close-button">&times;</button>
            </div>

            <div class="modal-body">
                <div id="hero-attributes">
                    <div class="image-health-mana">
                        <img src="${imgUrl}${selectedHero.image}">
                        <div class="healthbar">
                            <div class="basehealth">${selectedHero.trueBaseHealth}</div>
                            <div class="health-mana-increase">+3.2</div>
                        </div>

                        <div class="manabar">
                            <div class="basemana">${selectedHero.trueBaseMana}</div>
                            <div class="health-mana-increase">+1.2</div>
                        </div>
                    
                    </div>

                    <div class="base-attributes-container">

                        <div class="single-attribute-container">
                            <img class="attribute-icon" src="./attribute-images/strength.png" />
                            <div class="attribute-value">${selectedHero.baseStr}</div>
                            <div class="attribute-gain">+${selectedHero.strGain}</div>
                        </div>

                        <div class="single-attribute-container">
                            <img class="attribute-icon" src="./attribute-images/agility.png" />
                            <div class="attribute-value">${selectedHero.baseAgi}</div>
                            <div class="attribute-gain">+${selectedHero.agiGain}</div>
                        </div>

                        <div class="single-attribute-container">
                            <img class="attribute-icon" src="./attribute-images/intelligence.png" />
                            <div class="attribute-value">${selectedHero.baseInt}</div>
                            <div class="attribute-gain">+${selectedHero.intGain}</div>
                        </div>

                    </div>
                </div>

            <div class="vertical-separator"></div>
            
            <div id="hero-stats">
                <div class="hero-values-section">
                    <div class="heroes-values-title">Attack</div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/sword-icon.png"/>
                        ${selectedHero.baseAttackMin}-${selectedHero.baseAttackMax}
                    </div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_attack_time.png"/>
                        ${selectedHero.attackRate}
                    </div>

                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_attack_range.png"/>
                        ${selectedHero.attackRange}
                    </div>

                </div>

                <div class="hero-values-section">
                    <div class="heroes-values-title">Defence</div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_armor.png"/>
                        2.6
                    </div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_magic_resist.png"/>
                        0.6
                    </div>
                </div>
                
                <div class="hero-values-section">
                    <div class="heroes-values-title">Movement</div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_movement_speed.png"/>
                        ${selectedHero.moveSpeed}
                    </div>
                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_turn_rate.png"/>
                        ${selectedHero.turnRate}
                    </div>

                    <div class="heroes-value-element">
                        <img class="stat-icon" src="./attribute-images/icon_vision.png"/>
                        1800/800
                    </div>

                </div>
            </div>
        </div>
        `;

        displayModal.innerHTML = heroModal;
        displayModal.classList.add("active");
        overlay.classList.add("active");

        const closeModalButtons = document.getElementById("close-button");

        closeModalButtons.onclick = this.closeHeroStats;
    }

    closeHeroStats() {
        displayModal.classList.remove("active");
        overlay.classList.remove("active");
        console.log("haha");
    }
}

function displayChart() {
    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };

    const config = {
        type: "line",
        data: data,
        options: {},
    };

    const myChart = new Chart(document.getElementById("charts"), config);
}

async function init() {
    // function create instances of hero(s)
    let heroes = await heroesData(url);
    console.log(heroes);

    // //array of hero instances push into new Dota2 class
    const dota2Heroes = new Heroes(heroes);

    filteredBy.onclick = function (event) {
        dota2Heroes.filterByAttribute(event.target.id, event.target);
    };

    searchByTextInput.onkeyup = function () {
        dota2Heroes.searchByName(searchByTextInput.value);
    };

    heroesList.onclick = function (event) {
        dota2Heroes.displayHeroStats(event);
    };

    overlay.onclick = function (event) {
        dota2Heroes.closeHeroStats(event);
        console.log("clicked to close modal");
    };

    displayChart();
}

init();
