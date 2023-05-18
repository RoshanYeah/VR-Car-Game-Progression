AFRAME.registerComponent("drive",{
    tick:function(){
        var gameStateValue = document.querySelector("gameStates")

        if(gameStateValue === 'play'){
            this.driveTheCar()
        }
    },
    driveTheCar:function(){

        var wheelRotation = 0
     
        window.addEventListener('keydown', function(e){
            //steering wheel rotation on the left and right arrow
            var wheel = document.querySelector("#wheel")
            
            if(e.key=="ArrowLeft" && wheelRotation>-40){
              wheelRotation -= 5;
              wheel.setAttribute("rotation",{x:0,y:0,z:wheelRotation})
            } 
            if(e.key=="ArrowRight" && wheelRotation<40){
              wheelRotation +=5
              wheel.setAttribute("rotation",{x:0,y:0,z:wheelRotation})
            }

            //camera movement control
            var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMovementControls = cameraRig.getAttribute("movement-controls")
            
            cameraRig.setAttribute('movement-controls', {'speed' : cameraMovementControls.speed+0.05});

            var cameraDirection = new THREE.Vector3()
            cameraRig.object3D.getWorldDirection(cameraDirection)

            if(e.key == "ArrowRight"){
               cameraRotation.y -= 5
               cameraRig.setAttribute("rotation", {x:0,y:cameraDirection.y,z:0})
               cameraRig.setAttribute("movement-controls",{'speed' : cameraMovementControls.speed+0.05});
            }

            if(e.key == "ArrowLeft"){
                cameraRotation.y += 5;
                cameraRig.setAttribute('rotation' , {x:0,y:cameraDirection.y,z:0})
                cameraRig.setAttribute('movement-controls',{'speed' : cameraMovementControls.speed+0.05});
            }

            var multiply = 10;
            //apply acceleration 
            if(e.key == "ArrowUp"){
                
            }
        
        })
    }
})