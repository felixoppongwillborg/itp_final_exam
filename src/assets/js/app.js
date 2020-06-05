window.addEventListener("DOMContentLoaded", () => {
    let  button = document.getElementById("quote");
    let  message = document.getElementById("message");
  
    showMeAQuote = () => {
      message.innerHTML = "Hello, you look wonderful today!";
    };
    button.addEventListener("click", showMeAQuote);
  });