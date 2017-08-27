var ScoreToMatch;
var yourScore;
var wins;
var losses;

// Used Math.random to generate the number between 19 an 120
ScoreToMatch = Math.floor(Math.random() * 101) + 19;
console.log(ScoreToMatch);

$("#random").html('Score to Match:');


// for loop for random number - Also adjusts number of crystals on my page

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

    console.log($(this).attr("RandomInfo"));





});