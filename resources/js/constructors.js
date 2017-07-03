function Potato(seed)
{
    this.type = "potato";
    this.name = "Patate";
    this.id = seed.id;
    this.growthRate = seed.growthRate;
    this.growth = seed.growth;
    this.price = seed.price;
    this.value = 42;
    return this;
}

function getRandomInt(max) {
    var min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function Seed()
{
    this.type = "seed";
    this.name = "Graine";
    this.id = getRandomInt(1000000);
    this.growthRate = 0;
    this.growth = 3;
    this.price = 100;
    this.value = 42;
    return this;
}


function Player(name) {
    this.username = name;
    this.money = 500;
    this.inventory = [];
    this.lab = [[false, false, false], [false, false, false], [false, false, false]];
    this.season = 0; // 0 Spring, 1 Summer, 2 Autumn, 3 Winter
    this.daySeason = 0;
    this.dayTotal = 0;
    this.year = 0;
    this.spots = [false, false, false, false, false, false, false, false, false, false];
    this.exp = 0;
    this.chat = [];
    return this;
}

function InventoryItem() {
    this.name = "";
    this.amount = 1;
    return this;
}