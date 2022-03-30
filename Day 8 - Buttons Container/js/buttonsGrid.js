const btnValues = [1, 2, 3, 6, 9, 8, 7, 4];
const buttons = [1, 2, 3, 6, 9, 8, 7, 4];

function rotate() {
  btnValues.unshift(btnValues.pop());
  for (let [i, v] of buttons.entries()) {
    document.getElementById(`btn${v}`).innerHTML = btnValues[i];
  }
}
