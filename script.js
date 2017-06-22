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
    this.max = 10;
    this.exp = 0;
    return this;
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
    player.vegetables.splice(x, 1);
}

function display(player) {
    var content = "";
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