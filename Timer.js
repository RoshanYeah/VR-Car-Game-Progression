AFRAME.registerComponent("gameStates",{
    schema:{
      gameState : {type:'string', default:'play'}
    },
    init:function(){
        var timerEl = document.querySelector("#timer")
        this.timer(300)
    },
    timer:function(duration){
        var minutes,seconds
        setInterval(()=>{
           if(duration>0){
            this.data.gameState = 'play';
            minutes = parseInt(duration/60)
            seconds = parseInt(duration%60)
            //09:01
            if(minutes<10){
                minutes = "0"+minutes
            }
            if(seconds<10){
                seconds = "0"+seconds
            }
            duration -=1
           }else{
            this.data.gameState = 'over';
            //set the velocity to zero
            var cameraRig = document.querySelector("#camera-rig")
            cameraRig.setAttribute("velocity", {x:0,y:0,z:0});
            //set the Speed to zero
            var carSpeed = document.querySelector("#speed")
            carSpeed.setAttribute("text",{value:"0"})
            //game over text
            var gameOver = document.querySelector("#gameOver")
            gameOver.setAttribute("visible", true);
           }
        },1000)
    }
})