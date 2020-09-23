let random = Math.floor((Math.random()*100)+1);
let count = 0;
    



document.getElementById("button").onclick = function(){
    let num = document.getElementById("number").value;
    

    if( num == random) {
       alert("You have correct guessed! This is your Try "  + count +" You must be genius!")
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
        document.getElementById("try").innerHTML = (" This is your try " + count )
    } 

    else {
        count ++;
        
        document.getElementById("result").innerHTML = ("You need to higher ")
        document.getElementById("try").innerHTML = (" This is your try " + count )
    } 
    document.getElementById("number").value='';
    document.getElementById("number").focus();
}


