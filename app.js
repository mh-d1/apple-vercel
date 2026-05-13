function goUsn(){

  window.location.href = "home.html";

}

function goGallery(){

  window.location.href = "gallery.html";

}

function toggleSidebar(){

  const sidebar = document.getElementById("sidebar");

  if(sidebar){

    sidebar.classList.toggle("active");

  }

}

function closeApp(){

  /* DESKTOP / BROWSER */

  if(window.history.length > 1){

    window.close();

  }

  /* ANDROID WEB APP / PWA */

  if(navigator.app){

    navigator.app.exitApp();

  }

  /* FALLBACK */

  setTimeout(() => {

    window.location.href = "about:blank";

  },100);

}
if("serviceWorker" in navigator){

  window.addEventListener("load", () => {

    navigator.serviceWorker.register("sw.js");

  });

}



window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  const button = document.querySelector(".theme-toggle");

  if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    if(button){
      button.innerHTML = "🌙";
    }

  }

});

function toggleTheme(){

  document.body.classList.toggle("light-mode");

  const button = document.getElementById("themeButton");

  if(document.body.classList.contains("light-mode")){

    localStorage.setItem("theme","light");

    if(button){
      button.innerHTML = "Light Mode";
    }

  }else{

    localStorage.setItem("theme","dark");

    if(button){
      button.innerHTML = "Dark Mode";
    }

  }

}

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  const button = document.getElementById("themeButton");

  if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    if(button){
      button.innerHTML = "Light Mode";
    }

  }else{

    if(button){
      button.innerHTML = "Dark Mode";
    }

  }

});

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  const button = document.getElementById("themeButton");

  if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    if(button){
      button.innerHTML = "Light Mode";
    }

  }else{

    if(button){
      button.innerHTML = "Dark Mode";
    }

  }

});

document.addEventListener("click", function(e){

  const sidebar = document.getElementById("sidebar");

  const menuBtn = document.querySelector(".menu-btn");

  if(
    sidebar &&
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ){

    sidebar.classList.remove("active");

  }

});