function print(a) { console.log(a); }

function getRandomInt(max) {
    min = Math.ceil(1);
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

function grow(player)
{
    var grownStatus;
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.growthRate < vegetable.growth)
            vegetable.growthRate++;
        else if (vegetable.grownStatus === 42) {
            vegetable.grown = true;
            grownStatus = getRandomInt(100);
            if (grownStatus > 95)
                vegetable.grownStatus = 2;
            else if (grownStatus > 70)
                vegetable.grownStatus = 1.5;
            else if (grownStatus < 20)
                vegetable.grownStatus = 0.5;
            else
                vegetable.grownStatus = 1;
        }
    });
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
    $("#money").html('Vous avez '+player.money+'$');
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.grown == true) {
            var state;
            if (vegetable.grownStatus === 0.5)
                state = "Misérable";
            else if (vegetable.grownStatus === 1)
                state = "Acceptable";
            else if (vegetable.grownStatus === 1.5)
                state = "Très bonne";
            else if (vegetable.grownStatus === 2)
                state = "Divine";
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
        if (player.money >= potatoe.price) {
            player.money -= potatoe.price;
            player.vegetables.push(potatoe);
        }
        x++;
    }
}