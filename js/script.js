
2
down vote
favorite
1
function rolldice() {
    var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var dicetotal = x + y;
    var double = 0;
    $('.dice1').attr('id', "dice" + x);
    $('.dice2').attr('id', "dice" + y);
    if (x == y) { //<----checking if there is a double
        var double = double++; //<---increment double count
        //Now reroll the dice, but if you hit 3 doubles in a row, you get message go to jail.
    }
};