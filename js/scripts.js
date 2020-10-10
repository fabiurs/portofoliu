function afiseaza() {
  document.getElementById("welcom").style.opacity = "0";
  document.getElementById("clk").style.display = "none";
  setTimeout(() => {
    document.getElementById("wrapper").style.display = "block";
    setTimeout(() => {
      document.getElementById("wrapper").style.opacity = "1";
      document.getElementById("welcom").style.display = "none";
      setTimeout(() => {
        document.getElementById("r1").style.opacity = "1";setTimeout(() => {
          document.getElementById("r2").style.opacity = "1";setTimeout(() => {
            document.getElementById("r3").style.opacity = "1";setTimeout(() => {
              document.getElementById("r4").style.opacity = "1";setTimeout(() => {
                document.getElementById("r5").style.opacity = "1";setTimeout(() => {
                  document.getElementById("r6").style.opacity = "1";setTimeout(() => {
                    document.getElementById("r7").style.opacity = "1";setTimeout(() => {
                      document.getElementById("r8").style.opacity = "1";        
                    }, 1000);        
                  }, 1000);        
                }, 1000);        
              }, 1000);        
            }, 1000);        
          }, 500);        
        }, 500);        
      }, 500);
    }, 500);
  }, 1500);
}


function arataNume(){
  var i = 0;
  setInterval(() => {
      if(i > 34){
        document.getElementById("eu").style.opacity = "1";
        setTimeout(function(){
          document.getElementById("btn-welcom").style.opacity = "1";
        }, 1000)
        clearInterval();
      }
      else{
          document.getElementsByClassName("litera")[i].style.opacity = "1";
          i++;
      }
  }, 100);
}