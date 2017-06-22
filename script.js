function print(a) { console.log(a); }

function getRandomInt(max) {
    var min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function Potatoe()
{
    this.type = "potatoe";
    this.name = "Patate";
    this.id = getRandomInt(10000);
    this.growthRate = 0;
    this.growth = 30;
    this.grown = false;
    this.price = 100;
    this.grownStatus = 42;
    this.reproduction = 5;
    return this;
}

function PotatoeM(grownStatus)
{
    this.type = "potatoe";
    this.name = "Patate";
    this.id = getRandomInt(10000);
    this.growthRate = 0;
    this.growth = 30;
    this.grown = false;
    this.price = 100;
    this.grownStatus = grownStatus;
    this.reproduction = 5;
    return this;
}

function Player(name) {
    this.username = name;
    this.money = 500;
    this.vegetables = [];
    this.achievements = [],
    this.quests = [];
    this.max = 10;
    this.exp = 0;
    return this;
}

function Achievement(name) {
    this.name = name;
    this.count = 0;
}

function Quest(name, reward, needed) {
    this.name = name;
    this.reward = reward;
    this.progress = 0;
    this.needed = needed;
    this.done = false;
    return this;
}

function addQuest(player, name, reward, needed, div) {
    var quest = new Quest(name, reward, needed, div);
    player.quests.push(quest);
}

function quest(player) {
    var x = 0;
    while (player.quests[x].name !== "Vendre 5 patates divines") {
        x++;
    }
    if (player.quests[x].name === "Vendre 5 patates divines" && player.quests[x].done == false) {
        player.quests[x].progress = player.achievements[3].count;
        if (player.quests[x].progress == player.quests[x].needed) {
            player.quests[x].done = true;
            $("#buttons").html($("#buttons").html()+player.quests[x].reward);
        }
    }
}

function createAchievements(player)
{
    var godlike = new Achievement("Divine");
    var verygood = new Achievement("Très Bonne");
    var regular = new Achievement("Acceptable");
    var terrible = new Achievement("Terrible");
    player.achievements.push(terrible, regular, verygood, godlike);
}

function buySpot(player) {
    if (player.money > 2000) {
        player.max++;
        player.money -= 2000;
    }
}

function grow(player)
{
    var grownStatus;
    var rand;
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.growthRate < vegetable.growth)
            vegetable.growthRate++;
        else {
            vegetable.grown = true;
            if (vegetable.grownStatus === 42) {
                grownStatus = getRandomInt(100);
                if (grownStatus > 95)
                    vegetable.grownStatus = 4;
                else if (grownStatus > 70)
                    vegetable.grownStatus = 2;
                else if (grownStatus < 20)
                    vegetable.grownStatus = 0.5;
                else
                    vegetable.grownStatus = 1.25;
            }
            rand = getRandomInt(100);
            if (rand == 1 && player.vegetables.length < player.max && vegetable.reproduction > 0) {
                var potatoe = new PotatoeM(vegetable.grownStatus);
                player.vegetables.push(potatoe);
            }
        }
    });
    if (player.money < 100 && player.vegetables.length === 0)
    {
        player.max -= 1;
        player.money += 2000;
    }
    if (player.money < 100 && player.vegetables.length === 0 && player.max < 2) {
        player.money += 100;
    }
}

function sellPotatoe(id, player) {
    var x = 0;
    while (player.vegetables[x].id !== parseInt(id)) {
        x++;
    }
    player.money += player.vegetables[x].price * player.vegetables[x].grownStatus;
    if (player.vegetables[x].grownStatus === 0.5)
        player.achievements[0].count++;
    else if (player.vegetables[x].grownStatus === 1.25)
        player.achievements[1].count++;
    else if (player.vegetables[x].grownStatus === 2)
        player.achievements[2].count++;
    else if (player.vegetables[x].grownStatus === 4)
        player.achievements[3].count++;
    player.vegetables.splice(x, 1);
}

function display(player) {
    var content = "";
    var questcontent = "";
    $("#money").html('<p>Vous avez '+player.money+'$</p><p>Parcelle utilisées : '+player.vegetables.length+' / '+player.max+'</p>');
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.grown == true) {
            var state;
            if (vegetable.grownStatus === 0.5)
                state = "Misérable";
            else if (vegetable.grownStatus === 1.25)
                state = "Acceptable";
            else if (vegetable.grownStatus === 2)
                state = "Très bonne";
            else if (vegetable.grownStatus === 4)
                state = "Divine";
            if (vegetable.reproduction === 0)
                content += '<button class="sellPotatoe" id="' + vegetable.id + '">' + vegetable.name + ' : Valeur : ' + state + '. FERTILE</button>';
            else
                content += '<button class="sellPotatoe" id="' + vegetable.id + '">' + vegetable.name + ' : Valeur : ' + state + '</button>';
        }
        else {
            content += '<section class="div"><img src="patate.png" alt="Patate">' + vegetable.name + ' : ' + vegetable.growthRate + '</section>';
        }
    });
    player.quests.forEach(function (quest) {
        questcontent += '<p>'+quest.name+' : '+quest.progress+' / '+quest.needed+'</p>';
    });
    $("#quests").html(questcontent);
    $("#vegetables").html(content);
}

function addMoney(amount,player)
{
    player.money += amount;
    display(player);
}

function buyPotatoes(amount, player) {
    var x = 0;
    while (x < amount) {
        var potatoe = new Potatoe();
        if (player.money >= potatoe.price && player.max > player.vegetables.length) {
            player.money -= potatoe.price;
            player.vegetables.push(potatoe);
        }
        x++;
    }
}