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
    return '<h3>' + greeting + '</h3>';
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

    while( answer !== 'yes'){
        var answer = prompt('Do you like to drink wine? You might want to answer yes!.');
    }

    if (answer === 'yes') {
    reply = 'Man... you are my type of person!';
    }
    if (answer === 'no') {
    reply = 'I really tried to like you, but I am sorry you just are not my type of people!';
    }

    return '<h3>' + reply + '<h3>';
}




    function howMany(){
        var count = prompt('Awesome, how many glasses do you think you will need tonight?');

        while (count === '' || isNaN(count)){
            var count = prompt('Awsome, how many glasses do you think you will need tonight? Please enter a number');
         }

         return count;
    }

    function showOrder(){
        var item = '<img src="images/glass-wine.jpeg">';
        var total = howMany();
        var result = '';
        
        for(var i = 0; i < total; i++){
            result = result + '<p>Glass #' + (i + 1) + '' + item + '</p>';
        }
        return result;
    }
    
    
    
    
    
    
    
    
    



