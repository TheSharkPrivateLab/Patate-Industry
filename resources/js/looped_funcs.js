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
                player.money += 1200;
                player.spots.length--;
            }
            else if (player.money < 0 && player.spots.length < 2) {
                player.money = 100;
            }
        }
    }
    $("#time").html('<img src="resources/img/' + season + '.png"></img><p>Jour ' + player.dayTotal + ', Année ' + player.year + '</p><p>' + season + '</p>');
    if (season === "Hiver") {
        $("#time").attr("class", "weather snow");
        $("#time").attr("style", "background-color:#A5D2FF;");
    }
    else if (season === "Automne") {
        $("#time").attr("class", "weather rain");
        $("#time").attr("style", "");
    }
    else {
        $("#time").attr("class", "");
        $("#time").attr("style", "");
    }
}

function grow(player) {
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
            $("#chat").html($("#chat").html() + '<p>' + player.chat[y][0] + '</p>');
            y++;
        }
        y = 0;
        x++;
    });
    player.chat.forEach(function (message) {
        message[1]--;
        if (message[1] === 0) {
            player.chat.splice(z, 1);
        }
        z++;
    });
    if (player.money < 100 && player.spots.length === 0) {
        player.spots.length -= 1;
        player.money += 2000;
    }
    if (player.money < 100 && player.spots.length === 0 && player.spots.length < 2) {
        player.money += 100;
    }
}

function display(player) {
    var content = "";
    var questcontent = "";
    var x = 0;
    var state;
    var y = 0;

    player.spots.forEach(function (spot) {
        if (spot.grown === true) {
            content += '<button class="sellPotato" id="' + spot.id + '"><span>' + getValString(spot.value) + '</span></button>';
            y++;
        }
        else {
            if (spot === false)
                content += '<button class="div-buy" id=' + x + '></button>';
            else {
                content += '<section class="div" id=' + x + '><span>' + spot.name + ' ' + spot.growthRate + '</span></section>';
                y++;
            }
        }
        x++;
    });
    $("#money").html('<p>Vous avez ' + player.money + '$</p><p>Parcelle utilisées : ' + y + ' / ' + player.spots.length + '</p>');
    $("#vegetables").html(content);
    content = "";
    x = 0;
    y = 0;
    player.inventory.forEach(function (item) {
        if (item.name === "Graine")
            y++;
    });
    if (y === 1) {
        content += '<span>Graine</span>';
        content += '<br>';
    }
    else if (y > 1) {
        content += '<img src="resources/img/Potato_Seeds.png"></img><span>Graines x' + y + ' </span>';
        content += '<br>';
    }
    player.inventory.forEach(function (item) {
        if (item.name !== "Graine") {
            content += '<span id="' + x + '">' + item.name + ' ' + getValString(item.value) + '</span>';
            content += ' <button class="addToLab" id="' + x + '">Lab</button><button class="sell" id="' + x + '">Vendre</button><br>';
        }
        x++;
    });
    $("#inventory").html(content);
    x = 0;
    y = 0;
    content = "";
    player.lab.forEach(function (potato) {
        if (potato[0] !== false)
            content += '<button class="div-lab-potato">' + potato[0].name + ' : Valeur : ' + getValString(potato[0].value) + '</button>';
        else
            content += '<button class="div-lab"></button>';
        content += '<button>Reprod.</button>';
        if (potato[1] !== false)
            content += '<button class="div-lab-potato">' + potato[1].name + ' : Valeur : ' + getValString(potato[1].value) + '</button><br>';
        else
            content += '<button class="div-lab"></button><br>';
    });
    $("#lab").html(content);
}