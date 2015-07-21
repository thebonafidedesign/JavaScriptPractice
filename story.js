var hero = prompt("Choose a noun.");
var heroName = prompt("And what is this " + hero + "'s name?");
var heroCity = prompt("Where does " + heroName + " live (location)?");
var heroGender = prompt("Is " + heroName + " a he or she?");
var heroHome = prompt("What type of home does " + heroName + " live in?");
var heroSidekickName = prompt("What is the name of " + heroName + "'s sidekick?");
var heroSidekick = prompt("What is " + heroSidekickName + " (another noun)?");
var villian = prompt("Choose a vicious creature (another noun).");
var villianName = prompt("What is the name of this " + villian + "?");
var damselName = prompt("Who needs saving (or just put in another name)?");
var damsel = prompt("And what is " + damselName + " (another noun)?");
var damselHome = prompt("What type of home does " + damselName + " live in?");

var sentence = '<h2>There once was a(n) ' + hero + ' who\'s name was ' + heroName + '. ' + heroName + ' lived in a magical land called ' + heroCity + ' where ' + heroGender + ' lived in a(n) ' + heroHome + ' with ' + heroSidekickName + ', ' + heroName + '\'s ' + heroSidekick + ' sidekick. Their land was always attacked by a vicious ' + villian + ', named ' + villianName + ', who\'s only purpose was to try and kidnap, ' + damselName + ', a(n) ' + damsel + ' who lived in a(n) ' + damselHome + '.</h2>';

alert("All done! Are you ready for the story?");

document.write(sentence);
