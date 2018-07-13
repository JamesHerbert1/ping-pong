// Business logic
var numbersToBePingponged = [];

function pingPong (number){
    for (var index = 1; index <= number; index+=1){
        if(index % 15 === 0){
            numbersToBePingponged.push("pingpong");
        }
    }
}