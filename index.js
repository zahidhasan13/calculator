function deleteText() {
    document.getElementById("text-area").value = ''
}

function calculator(newValue) {
  document.getElementById("text-area").value += newValue;
}

function answer() {
    const a = document.getElementById("text-area").value;
    const b = eval(a);
    document.getElementById("text-area").value = b;
}
