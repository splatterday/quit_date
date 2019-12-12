// Get Item from LocalStorage
// console.log("oh fuck");
console.log(localStorage);
if (localStorage.getItem('dateQuit')) {
    console.log('We have localStorage');
    var dateQuitLiteral = (localStorage.getItem('dateQuit'));
    dateQuit = (Date.parse(localStorage.getItem('dateQuit')));
    console.log(dateQuit);
    document.getElementById('quitDatePick').value = dateQuitLiteral;
    currentdate = new Date();
    console.log(currentdate, dateQuit);
    var timeDiff = currentdate - dateQuit;
    console.log(timeDiff);
    document.getElementById('smokeFree').innerHTML = dhm(timeDiff);
    progress(timeDiff);
} else {
    localStorage.setItem('dateQuit').value = 'get started!';
    document.getElementById('quitDatePick').value = '';
}

// setting current date
var currentdate = new Date();
var currentDay = currentdate.getDate();
var currentMonth = (currentdate.getMonth() + 1);
var currentYear = currentdate.getFullYear();
var currentHours = currentdate.getHours();
var currentMinutes = currentdate.getMinutes();
var currentSeconds = currentdate.getSeconds();

var datetime = "" +
    currentMonth + "/" +
    currentDay + "/" +
    currentYear + " @ " +
    currentHours + ":" +
    currentMinutes + ":" +
    currentSeconds;
document.getElementById('today').innerHTML = datetime;

// parsing date info into Days Hours Seconds
function dhm(ms) {
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return "You've been smoke free: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + sec + " seconds.";
}
// setting progress toward 4 day goal
function progress(ms) {
    console.log('Calculating progress...')
    var statushours = ["1 hour:<br><ul><li>Your blood pressure, pulse rate and the temperature of your hands and feet have returned to normal.</li></ul>",
        "8 hours:<br><ul><li>Remaining nicotine in your bloodstream has fallen to 6.25% of normal peak daily levels, a 93.75% reduction.</li></ul>",
        "12 hours:<br><ul><li>Your blood oxygen level has increased to normal.</li><li>Carbon monoxide levels have dropped to normal.</li></ul>",
        "24 hours:<br><ul><li>Anxieties have peaked in intensity and within two weeks should return to near pre-cessation levels.</ul>",
        "48 hours:<br><ul><li>Damaged nerve endings have started to regrow and your sense of smell and taste are beginning to return to normal. Cessation anger and irritability will have peaked.</li></ul>",
        "72 hours:<br><ul><li>Your entire body will test 100% nicotine-free.</li><li>Over 90% of all nicotine metabolites (the chemicals nicotine breaks down into) have passed from your body via your urine.</li><li>Symptoms of chemical withdrawal have peaked in intensity, including restlessness.</li><li>Unless use cues have been avoided, the number of cue induced crave episodes experienced during any quitting day have peaked for the average ex-user.</li><li>Lung bronchial tubes leading to air sacs (alveoli) are beginning to relax in recovering smokers.</li><li>Breathing is becoming easier and your lung's functional abilities are improving.</li></ul>",
        "96 hours:<br><ul><li>You made beaten the first four days! Enjoy your new life!</li></ul>"
    ]
    target = 86400000 * 4;
    perComplete = Math.round((ms / target) * 100);
    console.log(perComplete);
    if (perComplete > 100) {
        document.getElementById('progress-bar').style.width = '100%';
        document.getElementById('progress-bar').innerHTML = '100%';
    } else {
        document.getElementById('progress-bar').style.width = perComplete + '%';
        document.getElementById('progress-bar').innerHTML = perComplete + '%';
    }
    console.log(statushours);
    if (perComplete >= 100) {
        document.getElementById('status').innerHTML = statushours[6];
    } else if (perComplete >= 75 && perComplete < 100) {
        document.getElementById('status').innerHTML = statushours[5];
    } else if (perComplete >= 50 && perComplete < 74) {
        document.getElementById('status').innerHTML = statushours[4];
    } else if (perComplete >= 25 && perComplete < 49) {
        document.getElementById('status').innerHTML = statushours[3];
    } else if (perComplete >= 12.5 && perComplete < 25) {
        document.getElementById('status').innerHTML = statushours[2];
    } else if (perComplete >= 8.3 && perComplete < 12.5) {
        document.getElementById('status').innerHTML = statushours[1];
    } else {
        document.getElementById('status').innerHTML = statushours[0];
    }
}

// finding time since quit datetime
function calcTimeDiff() {
    console.log('Calculating Time Diff...')
    console.log(selDate);
    localStorage.setItem('dateQuit', selDate);
    var timeDiff = currentdate - selDate;
    var timeDiffMinutes = timeDiff / 60000;
    var timeDiffHours = timeDiffMinutes / 60;
    document.getElementById('smokeFree').innerHTML = dhm(timeDiff);
    progress(timeDiff);
}