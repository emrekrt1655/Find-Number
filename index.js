let random = Math.floor((Math.random()*100)+1);
let count = 0;
    



document.getElementById("button").onclick = function(){
    let num = document.getElementById("number").value;
    

    if( num == random) {
       alert("You have correct guessed! This is your "  + count +". Try. You must be genius!")
        var r = confirm("Do you wanna play again???");
        if (r == true) {
             random = Math.floor((Math.random()*100)+1);
             count = 0;
             document.getElementById("result").innerHTML = ("")
             document.getElementById("try").innerHTML = ("")
        }
        else{
            alert("Thanks for gaming!!!")
        }
    }
    
    else if (num > random) {
        count ++;
        
        document.getElementById("result").innerHTML = ("You need to lower ")
        document.getElementById("try").innerHTML = (count + ". try ")
    } 

    else {
        count ++;
        
        document.getElementById("result").innerHTML = ("You need to higher ")
        document.getElementById("try").innerHTML = (count + ". try ")
    } 
    document.getElementById("number").value='';
    document.getElementById("number").focus();
}


