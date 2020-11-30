
var startBtn=document.getElementById("startButton");
var resetBtn=document.getElementById("resetButton");
var increaseSession=document.getElementById("plusSession");
var decreaseSession=document.getElementById("minusSession");
var increaseBreak=document.getElementById("plusBreak");
var decreaseBreak=document.getElementById("minusBreak");
var pauseBtn=document.getElementById("pauseButton");
var continueBtn=document.getElementById("continueButton");
var heading=document.getElementById("head");
var timerName;
var count=0;


increaseSession.addEventListener("click",function(){
    var stime=document.getElementById("STIME");
    var btime=document.getElementById("BTIME").innerHTML;
    var disptime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    let timeArray = disptime.split(/[:]/);
    var min=parseInt(timeArray[0]);
    min=min+1;
    changedisptime.innerHTML=min+":00";
    stime.innerHTML=min+" min";
})

decreaseSession.addEventListener("click",function(){
    var stime=document.getElementById("STIME");
    var disptime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    let timeArray = disptime.split(/[:]/);
    var min=parseInt(timeArray[0]);

    if(min>1)
    {
    min=min-1;
    }
     if(min<10)
     {
     changedisptime.innerHTML="0"+min+":00";    
     }
     else
    changedisptime.innerHTML=min+":00";
    stime.innerHTML=min+" min";
})

increaseBreak.addEventListener("click",function(){
    var btime=document.getElementById("BTIME");
    var breaktime=document.getElementById("BTIME").innerHTML;
    let timeArray = breaktime.split(/[ ]/);
    var min=parseInt(timeArray[0]);
    min=min+1;
    btime.innerHTML=min+" min";
})
decreaseBreak.addEventListener("click",function(){
    var btime=document.getElementById("BTIME");
    var breaktime=document.getElementById("BTIME").innerHTML;
    let timeArray = breaktime.split(/[ ]/);
    var min=parseInt(timeArray[0]);
    if(min>1)
    min=min-1;
    btime.innerHTML=min+" min";
})




    startBtn.addEventListener("click",function()
    {
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='none';
    PBTN.style.display='block';
    //console.log(time);
    heading.innerHTML="Session Starts :)";
    increaseSession.disabled=true;
    decreaseSession.disabled=true;
    increaseBreak.disabled=true;
    decreaseBreak.disabled=true;
    startTimer();
    })

function startTimer()
{
    var presentTime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=presentTime.split(/[:]/);
    var min=checkMinute(parseInt(timeArray[0]-0));
    var s=parseInt(timeArray[1])-1;
    console.log(s);
    var sec=checkSeconds(s);

    if(sec==59)
    {
        min=min-1;
        if(min<10)
        min="0"+min;
    }
    changedisptime.innerHTML=min+":"+sec;

    if(min==00 && sec==00)
    {
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='block';
    CBTN.style.display='none';
    PBTN.style.display='none';
        breakTime();

        return;
    }
    timerName=setTimeout(startTimer,1000);
}

pauseBtn.addEventListener("click",function()
{
    clearTimeout(timerName);
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='block';
    PBTN.style.display='none'; 
    heading.innerHTML="Session Paused :(";   

});
continueBtn.addEventListener("click",function()
{
    clearTimeout(timerName);
    var SBTN=document.getElementById("SBTN");
    var PBTN=document.getElementById("PBTN");
    var CBTN=document.getElementById("CBTN");
    SBTN.style.display='none';
    CBTN.style.display='none';
    PBTN.style.display='block'; 

    startTimer();   
    heading.innerHTML="Session Starts :)";
});

resetBtn.addEventListener("click",function(){
window.location.reload();
})

function checkMinute(min)
{
    if(min<10)
    {
        min="0"+min;
    }
    return min;
}	
function checkSeconds(s)
{
    var sec=parseInt(s);
if (sec < 10 && sec >= 0) 
{
    sec = "0" + sec;
} 
  if (sec < 0)
   {
       sec = "59";
  }

console.log("return time"+sec);
return sec;
}    


function breakTime()
{
    var bMin=document.getElementById("BTIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=bMin.split(/[ ]/);
    var min=timeArray[0];
    changedisptime.innerHTML="0"+min+":00";
    count=count+1;
    heading.innerHTML="Break Time :)";
    startBreak();
}
function startBreak()
{
    var presentTime=document.getElementById("TIME").innerHTML;
    var changedisptime=document.getElementById("TIME");
    var timeArray=presentTime.split(/[:]/);
    var min=checkMinute(parseInt(timeArray[0]-0));
    var s=parseInt(timeArray[1])-1;
    console.log(s);
    var sec=checkSeconds(s);

    if(sec==59)
    {
        min=min-1;
        if(min<10)
        min="0"+min;
    }
    changedisptime.innerHTML=min+":"+sec;
    if(min==00 && sec==00)
    {
        heading.innerHTML="Pomodoro Timer";
        clearTimeout(timerName);
        alert("Break Over.You can start your session again!");
        window.location.reload();
        return;
    }
    timerName=setTimeout(startBreak,1000);
}
