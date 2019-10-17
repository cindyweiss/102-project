function welcome() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    }
    else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    }
    else if (hourNow > 0) {
        greeting = 'Good morning!';
    }
    else {
        greeting = 'Welcome!';
    }



    return '<h3>' + greeting + '</h3';
}
function question(){

    var answer = prompt('do you like to eat cookies? Answer yes or no.');
    var message;

    if (answer === 'yes') {
    message = 'Great so do I!';
    }
    if (answer === 'no') {
    message = 'I am sorry to hear that, I do not think we can be friends!';
    }

    return '<h3>' + message + '<h3>';
}

function inquiry(){

    var answer = prompt('Do you like to drink wine? Answer yes or no.');
    var reply;

    if (answer === 'yes') {
    reply = 'Man... you are my type of person!';
    }
    if (answer === 'no') {
    reply = 'I really tried to like you, but I am sorry you just are not my type of people!';
    }

    return '<h3>' + reply + '<h3>';
}





    // function askName (){
    //     var username = prompt('What is your name?');

    //     return '<h3>' + 'hello, ' + username + '.' + '</h3>';
    // }

    //     var getName = function(){
    //         var username + prompt ('Whats you\'re name?');
    //     }

