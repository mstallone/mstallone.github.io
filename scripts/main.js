$(document).ready(function() {
    $('.container').hide();

    $(document).on('keyup', function(event) {
        if (event.keyCode === 27) goHome();
    });

    addProjects();
});

function goHome(){
    $(".mdl-layout").toggleClass("blur");
    document.title = "Matthew Stallone";

    if($(".mdl-layout").hasClass("blur")){
        $(".mdl-layout").one('webkitTransitionEnd', function() {
            $('.container').show();
            $('.close').addClass('animated rollIn');
            //$('.container').addClass('animated fadeInUp');
        });
    } else {
        $('.container').hide();
        $('.close').removeClass('animated rotateIn');
        document.title = "Matthew Stallone's Portfolio";
    }
}

function addProjects() {
    $("#portfolio").empty();

    $("#portfolio").append(newProject("BlindAssist", "My prototype for a navigational aide for the visually impaired (aka NAVI). NAVI \
    helps the visually impaired navigate their world by utilizing infrared obstacle detection algorithms I wrote. My algorithms allow the \
    prototype to digitally map the 3-D space around the user, including identifying the size of and distance from obstacles. NAVI gives \
    feedback through two different modes. One is tonal feedback based on distance; the second utilizes text to speech to describe the distance \
    and height of the objects in the user’s pathway. The Android communicates through bluetooth with an Arduino.", "BlindAssist", ["MainActivity.java", "main.ino"]));

    $('#portfolio').append(newProject("ThoughtCloud", "A instant mass-messaging service, which sends messages as \"thoughts\" \
    to all users with the app open. The \"thought\" only lasts on the screen for a few seconds, and then disapears forever.\
    The app utilizes the Android SDK and Node.js", "ThoughtCloud", ["Server.js", "MainActivity.java", "Settings.java"]));

    $('#portfolio').append(newProject("BatteryBar", "A Mac OS X app that overrides the UI to display the battery percent on the menu bar.",
    "BatteryBar",
    ["Demo.png", "AppDelegate.m", "LoginItemAppDelegate.m", "PreferencesTextField.m", "PreferencesWindowController.m", "PreferencesViewController.h", "PreferencesViewController.m", "BatteryBar.app"]));

    $('#portfolio').append(newProject("Infinity-Scroll", "A project for iOS, which allos Infinity page scroll (implemented for \
        NSDate) using UIPageViewController", "Infinity-Scroll",
    ["Demo.gif", "DetailedViewController.h", "DetailedViewController.m", "ViewController.h", "ViewController.m"]));

    $('#portfolio').append(newProject("CodeForces Python", "Python to solutions to some problems at <a href='http://codeforces.com'>http://codeforces.com</a>", "CodeForces_Python",
    ["112A_PetyaAndStrings.py","282A_Bit++.py",
"116A_Tram.py","339A_HelpfulMaths.py",
"131A_cAPSlOCK.py","588B_DuffInLove.py",
"133A_HQ9+.py","588B_DuffInLove_2.py",
"158B_Taxi.py","607A_ChainReaction.py",
"160A_Twins.py","608A_SaitamaDestroysHotel.py",
"219A_K-String.py","608B_HammingDistanceSum.py",
"231A_Team.py","609A_USBFlashDrives.py",
"236A_BoyOrGirl.py","609B_TheBestGift.py",
"25A_IQTest.py","609C_LoadBalancing.py",
"266A_StonesOnTheTable.py",
"281A_WordCapitalization.py"]));

    $('#portfolio').append(newProject("Brainf*ck Interpreter", "A simple, full-featured Brainf*ck interpreter in Javascript. \
    \"Brainfuck is an esoteric programming language noted for its extreme minimalism. The language consists of only eight simple commands\
     and an instruction pointer. Nevertheless, it was shown to be Turing-complete. It is designed to challenge and amuse programmers, and\
      was not made to be suitable for practical use. It was created in 1993 by Urban Müller. The language's name is a reference to the vulgar term \
      \"brain fuck\", which refers to things so complicated or unusual that they exceed the limits of one's understanding\"\
      (<a href=\"https://en.wikipedia.org/wiki/Brainfuck\">Wikipedia</a>).", "Brainfuck", ["main.js"]));
}

function newProject(name, description, link, paths){
    var mainFiles = "";

    for (i = 0; i < paths.length; i++) {
        mainFiles += '<div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">\
                        <form method="get" target="_blank" action="Projects/' + link + '/' + paths[i] + '">\
                            <button class="mdl-button mdl-js-button mdl-button--primary">\
                                <span style="text-transform: capitalize;">view ' + paths[i] +'</span>\
                            </button>\
                        </form>\
                    </div>';
    }

    return '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">\
        <div class="mdl-card mdl-cell mdl-cell--12-col">\
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">\
                <h4 class="mdl-cell mdl-cell--12-col">' + name + '</h4>\
                <p class="mdl-cell mdl-cell--12-col">' + description + '<br><br><strong>Main files:</strong></p>\
                ' + mainFiles+ '
            </div>\
            <div class="mdl-card__actions">\
                <a href="Projects/' + link + '/' + link +'.zip' + '" class="mdl-button" download>download full project</a>\
            </div>\
        </div>\
    </section>\
    <section class="section--center mdl-grid mdl-grid--no-spacing"></section>';
}