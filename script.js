const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
console.log(display, buttons);
let string = "";

function del() {
  string = display.value;
  display.value.slice(0, -1);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button was clicked");
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        display.value = "Error";
        console.error(" expression", error);
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
    console.log(string);
  });
});
