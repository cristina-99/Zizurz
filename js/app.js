function ToggleMenu() {
    var x = document.getElementById("myTopnav");
    if(x.classList.contains("showMenu")){
      x.classList.remove("showMenu");
    }else{
      x.classList.add("showMenu")

    }
    // if (x.className === "topnav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "topnav";
    // }
  }