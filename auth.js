const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const defaultUsername = "admin";
    const defaultPassword = "12345";

    if(
      username === defaultUsername &&
      password === defaultPassword
    ){

      localStorage.setItem("login", "true");

      window.location.href = "home.html";

    }else{

      alert("Username atau Password salah");

    }

  });

}