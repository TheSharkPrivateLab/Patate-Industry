function time(player) {
    var season;

    player.daySeason += 3;
    player.dayTotal += 3;
    if (player.season === 0) {
        season = "Printemps";
        if (player.daySeason > 93) {
            player.season = 1;
            player.daySeason = 0;
        }
    }
    else if (player.season === 1) {
        season = "Été";
        if (player.daySeason > 94) {
            player.season = 2;
            player.daySeason = 0;
        }
    }
    else if (player.season === 2) {
        season = "Automne";
        if (player.daySeason > 90) {
            player.season = 3;
            player.daySeason = 0;
        }
    }
    else if (player.season === 3) {
        season = "Hiver";
        if (player.daySeason > 89) {
            player.season = 0;
            player.daySeason = 0;
            player.year++;
            player.money -= 300;
            if (player.money < 0 && player.spots.length > 1) {
                player.money += 2000;
                player.spots.length--;
            }
            else if (player.money < 0 && player.spots.length < 2)
            {
                player.money += 100;
            }
        }
    }
    $("#time").html('<p>Jour '+player.dayTotal+', Année '+player.year+'</p><p>'+season+'</p>');
}

function buySpot(player) {
    if (player.money >= 2000) {
        player.spots.push(false);
        player.money -= 2000;
    }
}

function grow(player)
{
    var value;
    var rand;
    var valString = "";
    var x = 0;
    var y = 0;
    var z = 0;

    player.spots.forEach(function (vegetable) {
        if (vegetable.growthRate < vegetable.growth)
            vegetable.growthRate++;
        else {
            vegetable.grown = true;
            if (vegetable.value === 42) {
                value = getRandomInt(100);
                if (value > 95)
                    vegetable.value = 3;
                else if (value > 70)
                    vegetable.value = 2;
                else if (value < 20)
                    vegetable.value = 0;
                else
                    vegetable.value = 1;
            }

            if (vegetable.value == 0)
                valString = "Misérable";
            else if (vegetable.value == 1)
                valString = "Acceptable";
            else if (vegetable.value == 2)
                valString = "Excellente";
            else if (vegetable.value == 3)
                valString = "Divine";
        }
        $("#chat").html("");
        while (y < 5 && player.chat[y] !== undefined) {
            $("#chat").html($("#chat").html() + '<p>'+player.chat[y][0] + '</p>');
            y++;
        }
        y = 0;
        x++;
    });
    player.chat.forEach(function (message) {
        message[1]--;
        if (message[1] === 0)
        {
            player.chat.splice(z,1);
        }
        z++;
    });
    if (player.money < 100 && player.spots.length === 0)
    {
        player.spots.length -= 1;
        player.money += 2000;
    }
    if (player.money < 100 && player.spots.length === 0 && player.spots.length < 2) {
        player.money += 100;
    }
}

function sellPotatoe(id, player) {
    var x = 0;
    var mult;

    while (player.spots[x].id !== parseInt(id)) {
        x++;
    }
    if (player.spots[x].value == 0)
        mult = 0.5;
    else if (player.spots[x].value == 1)
        mult = 1.5;
    else if (player.spots[x].value == 2)
        mult = 2;
    else if (player.spots[x].value == 3) {
        mult = 4;
        if (player.season == 3)
            mult *= 2;
    }
    player.money += player.spots[x].price * mult;
    player.spots[x] = false;
    display(player);
}

function display(player) {
    var content = "";
    var questcontent = "";
    var x = 0;
    var state;
    var y = 0;
    
    player.spots.forEach(function (spot) {
        if (spot.value === 0)
            state = "Misérable";
        else if (spot.value === 1)
            state = "Acceptable";
        else if (spot.value === 2)
            state = "Excellente";
        else if (spot.value === 3)
            state = "Divine";
        if (spot.grown === true) {
            content += '<button class="sellPotatoe" id="' + spot.id + '">' + spot.name + ' : Valeur : ' + state + '</button>';
            y++;
        }
        else {
            if (spot === false)
                content += '<button class="div-buy" id=' + x + '><br></button>';
            else {
                content += '<section class="div" id=' + x + '><img src="patate.png" alt="Patate"><br>' + spot.name + ' <br> ' + spot.growthRate + '</section>';
                y++;
            }
        }
        x++;
    });
    $("#money").html('<p>Vous avez ' + player.money + '$</p><p>Parcelle utilisées : ' + y + ' / ' + player.spots.length + '</p>');
    x = 0;
    $("#vegetables").html(content);
    content = "";
    player.inventory.forEach(function (item) {
        content += '<span>'+item.name+' </span>';
        if (item.name !== "Graine")
            content += '<button>Lab</button><button>Vendre</button><br>';
        else
            content += '<br>';
    });
    $("#inventory").html(content);
}

function addMoney(amount,player)
{
    player.money += amount;
    display(player);
}

function plantPotatoe(player, spotId) {
    var x = 0;
    var seed;

    while (x < player.inventory.length) {
        print(player.inventory[x]);
        if (player.inventory[x].type === "seed") {
            seed = player.inventory[x];
            break;
        }
         x++;
    }
    if (seed !== undefined) {
        if (player.spots[spotId] === false) {
            var potatoe = new Potatoe(seed);
            player.inventory.splice(x, 1);
            player.spots[spotId] = potatoe;
        }
        else
            eventMessage("Pas assez d'argent !", player);
    }
    else
        eventMessage("Vous n'avez pas de graines !", player);
}

function buyPotatoesSeeds(amount, player) {
    var x = 0;
    while (x < amount) {
        var seed = new Seed();
        if (player.money >= seed.price) {
            player.money -= seed.price;
            player.inventory.push(seed);
        }
        x++;
    }
}