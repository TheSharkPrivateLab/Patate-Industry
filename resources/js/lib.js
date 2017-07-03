function print(a) { console.log(a); }

function getRandomInt(max) {
    var min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function eventMessage(message, player) {
    player.chat.unshift([message, 15]);
}

function getNumberOfPotatos(player) {
    var x = 0;
    player.spots.forEach(function (spot) {
        if (spot !== false) {
            x++;
        }
    });
    return x;
}

function getValString(value)
{
    var values = ["Mis&eacuterable", "Acceptable", "Excellente", "Divine"];
    return values[value];
}