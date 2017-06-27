function Potatoe(seed)
{
    this.type = seed.type;
    this.name = seed.name;
    this.id = seed.id;
    this.value = 42;
    return this;
}

function Seed()
{
    this.type = "potatoe";
    this.name = "Graine";
    this.id = getRandomInt(1000000);
    this.growthRate = 0;
    this.growth = 30;
    this.price = 100;
    this.value = 42;
    return this;
}


function Player(name) {
    this.username = name;
    this.money = 500;
    this.vegetables = [];
    this.inventory = [];
    this.season = 0; // 0 Spring, 1 Summer, 2 Autumn, 3 Winter
    this.daySeason = 0;
    this.dayTotal = 0;
    this.year = 0;
    this.spots = [false, false, false, false, false, false, false, false, false, false];
    this.exp = 0;
    this.chat = [["Cliquer sur une parcelle pour y planter une patate !", 15]];
    return this;
}

function InventoryItem() {
    this.name = "";
    this.amount = 1;
    return this;
}