function checkTextareaValue() {
    var textareaValue = document.getElementById('uzenet').value;

    if (textareaValue === null || textareaValue.trim() === '') {
        document.getElementById('uzenet').style.border = "3px solid red";
        document.getElementById("hiba").textContent = "Hiba! Az üzenet törzse üres!";

    } else {
        document.getElementById("uzi").style.display = "none";
        document.getElementById("done").style.display = "block";
    }
  }