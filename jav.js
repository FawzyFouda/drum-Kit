
document.addEventListener("keydown" ,function keyCode(event) {
    
        let x = event.code;
        function removetransition(){
          key1.classList.remove('animate');
        }
        
        switch(x) {
            case "KeyA":
            document.getElementById('a1').currentTime=0;
            document.getElementById('a1').play();
            var key1 = document.querySelector(".keyA");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyS":
              document.getElementById('a2').currentTime=0;
            document.getElementById('a2').play();
            var key1 = document.querySelector(".keyS");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyD":
            document.getElementById('a3').currentTime = 0;
            document.getElementById('a3').play();
            var key1 = document.querySelector(".keyD");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyF":
            document.getElementById('a4').currentTime = 0;
            document.getElementById('a4').play();
            var key1 = document.querySelector(".keyF");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyG":
            document.getElementById('a5').currentTime = 0;
            document.getElementById('a5').play();
            var key1 = document.querySelector(".keyG");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyH":
            document.getElementById('a6').currentTime = 0;
            document.getElementById('a6').play();
            var key1 = document.querySelector(".keyH");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyJ":
            document.getElementById('a7').currentTime = 0;
            document.getElementById('a7').play();
            var key1 = document.querySelector(".keyJ");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyK":
            document.getElementById('a8').currentTime = 0;
            document.getElementById('a8').play();
            var key1 = document.querySelector(".keyK");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
            case "KeyL":
            document.getElementById('a9').currentTime = 0;
            document.getElementById('a9').play();
            var key1 = document.querySelector(".keyL");
            key1.classList.add('animate');
            key1.addEventListener('transitionend',removetransition); 
            break;
          }
   }); 

 
  