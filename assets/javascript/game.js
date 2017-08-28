var ScoreToMatch;
var yourScore;
var wins;
var losses;

// Used Math.random to generate the number between 19 an 120

ScoreToMatch = Math.floor(Math.random() * 101) + 19;
console.log(ScoreToMatch);

// Assigned id to Score To Match so that it would show up in html, then assigned it to Math.random

$("#random").html('Score to Match: ' + ScoreToMatch);


// for loop for Crystals - Also adjusts number of crystals on my page

for (var i = 0; i < 4; i++) {

    // variable generating a random number for the crystals (divs)  

    var random = Math.floor(Math.random() * 12) + 1;
    console.log(random);

    // div appeneded to html doc 

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "RandomInfo": random
    });

    $(".crystals").append(crystal);

}

// Used this to set it up so that the click feautre works on the four divs

$(".crystal").on('click', function () {

   //This is set up to add 4 to any random # when you hit a crystal

    var num = parseInt($(this).attr('RandomInfo'));
    previous += num ;
    console.log(num);




});