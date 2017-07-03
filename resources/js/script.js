function buySpot(player) {
    if (player.money >= 2000) {
        player.spots.push(false);
        player.money -= 2000;
    }
}

function harvestPotato(id, player) {
    var x = 0;

    while (player.spots[x].id !== parseInt(id)) {
        x++;
    }
    player.inventory.push(player.spots[x]);
    player.spots[x] = false;
    display(player);
}

function sellPotato(x, player) {
    if (player.inventory[x].value === 0) {
        player.money += player.inventory[x].price * 0.5;
    }
    else if (player.inventory[x].value === 1) {
        player.money += player.inventory[x].price * 1.5;
    }
    else if (player.inventory[x].value === 2) {
        player.money += player.inventory[x].price * 2;
    }
    else if (player.inventory[x].value === 3) {
        player.money += player.inventory[x].price * 3;
    }
    player.inventory.splice(x, 1);
    display(player);
}

function addToLab(x, player) {
    var y = 0;
    while (y < player.lab.length) {
        if (player.lab[y][0] === false) {
            player.lab[y][0] = player.inventory[x];
            player.inventory.splice(x, 1);
            break;
        }
        else if (player.lab[y][1] === false) {
            player.lab[y][1] = player.inventory[x];
            player.inventory.splice(x, 1);
            break;
        }
        y++;
    }
    display(player);
}

function addMoney(amount,player)
{
    player.money += amount;
    display(player);
}

function plantPotato(player, spotId) {
    var x = 0;
    var seed;

    while (x < player.inventory.length) {
        if (player.inventory[x].type === "seed") {
            seed = player.inventory[x];
            break;
        }
         x++;
    }
    if (seed !== undefined) {
        if (player.spots[spotId] === false) {
            var potato = new Potato(seed);
            player.inventory.splice(x, 1);
            player.spots[spotId] = potato;
        }
    }
    else
        eventMessage("Vous n'avez pas de graines !", player);
}

function buyPotatosSeeds(amount, player) {
    var x = 0;
    while (x < amount) {
        var seed = new Seed();
        if (player.money >= seed.price) {
            player.money -= seed.price;
            player.inventory.push(seed);
        }
        else {
            eventMessage("Pas assez d'argent !", player);
            break;
        }
        x++;
    }
}