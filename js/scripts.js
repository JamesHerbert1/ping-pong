// Business logic
var numbersToBePingponged = [];

function pingPong (number){
    for (var index = 1; index <= number; index+=1){
        if(index % 15 === 0){
            numbersToBePingponged.push("pingpong");
        }
        else if(index % 5 === 0){
            numbersToBePingponged.push("pong");
        }
        else if(index % 3 === 0){
            numbersToBePingponged.push("ping");
        }
    }
}