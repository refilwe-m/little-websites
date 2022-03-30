let lights = document.getElementsByClassName("circle");

lights[0].addEventListener("click", () => {
  let element = document.querySelector("#redOff");
  applyCSS(element);
});

lights[1].addEventListener("click", () => {
  let element = document.querySelector("#amberOff");
  applyCSS(element);
});

lights[2].addEventListener("click", () => {
  let element = document.querySelector("#greenOff");
  applyCSS(element);
});

function applyCSS(element) {
  switch (element.id) {
    case "redOff":
      {
        element.setAttribute("id", "redOn");
        if (document.querySelector("#amberOn") != null)
          document.querySelector("#amberOn").setAttribute("id", "amberOff");
        if (document.querySelector("#greenOn") != null)
          document.querySelector("#greenOn").setAttribute("id", "greenOff");
      }
      break;
    case "greenOff":
      {
        element.setAttribute("id", "greenOn");
        if (document.querySelector("#redOn") != null)
          document.querySelector("#redOn").setAttribute("id", "redOff");
        if (document.querySelector("#amberOn") != null)
          document.querySelector("#amberOn").setAttribute("id", "amberOff");
      }
      break;
    case "amberOff":
      {
        element.setAttribute("id", "amberOn");
        if (document.querySelector("#greenOn") != null)
          document.querySelector("#greenOn").setAttribute("id", "greenOff");
        if (document.querySelector("#redOn") != null)
          document.querySelector("#redOn").setAttribute("id", "redOff");
      }
      break;
  }
}
