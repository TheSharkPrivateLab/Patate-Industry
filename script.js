function print(a) { console.log(a); }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function Potatoe()
{
    this.type = "potatoe";
    this.name = "Potatoe";
    this.id = getRandomInt(1, 10000);
    this.growthRate = 0;
    this.growth = 15;
    this.grown = false;
    this.buy_price = 100;
    this.sell_price = 200;
    return this;
}

function Player(name) {
    this.username = name;
    this.money = 100;
    this.vegetables = [];
    this.max = 10;
    this.exp = 0;
    return this;
}

function grow(player)
{
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.growthRate < vegetable.growth)
            vegetable.growthRate++;
        else
            vegetable.grown = true;
    });
}

function sellPotatoe(id, player) {
    var x = 0;
    while (player.vegetables[x].id !== parseInt(id)) {
        x++;
    }
    player.money += player.vegetables[x].sell_price;
    player.vegetables.splice(x, 1);
}

function display(player) {
    var content = "";
    $("#money").html(player.money);
    player.vegetables.forEach(function (vegetable) {
        if (vegetable.grown == true) {
            content += '<section class="sellPotatoe" id="'+vegetable.id+'">' + vegetable.name + ' : ' + vegetable.growthRate + '</section>'
        }
        else
            content += '<section class="div">'+vegetable.name +' : ' + vegetable.growthRate +'</section>'
    });
    $("#vegetables").html(content);
    //print(player.vegetables);
}

function addMoney(amount,player)
{
    player.money += amount;
    display(player);
}

function buyPotatoes(amount, player) {
    var x = 0;
    while (x < amount) {
        var potatoe = new Potatoe()
        if (player.money >= potatoe.buy_price) {
            player.money -= potatoe.buy_price;
            player.vegetables.push(potatoe);
        }
        x++;
    }
}