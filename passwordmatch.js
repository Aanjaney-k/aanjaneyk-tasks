var attempts=4;
var seconds=10;
var timer;
function passwordmatch() {
    var password=1234;
    var x=document.getElementById("pass").value;
    var button=document.getElementById("btn");
    var attempt=document.getElementById("msg");
    for(var i=1;i<=1;i++)
    {
        while(x!=password && attempts>0)
        {
            attempts--;
            attempt.innerHTML="Wrong Password....Attempt Left:"+attempts;
            return false;
        }
        while(x==password)
        {
            attempt.innerHTML="Password Correct";
            attempts=4;
            return false;
        }
    }
    if (attempts == 0) {

        button.disabled = true;
        seconds = 10;                          

        timer = setInterval(function () { 

            seconds--;
            attempt.innerHTML = "Please Wait " + seconds + " Seconds";

            if (seconds == 0) {
                clearInterval(timer);              
                attempts = 4;
                locked = false;
                button.disabled = false;
                attempt.innerHTML = "Try again";
            }

        },1000);
    }
}         