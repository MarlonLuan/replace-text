function change() {
  let aula = document.querySelector('input[name="aula"]:checked').value;
  aula = aula.trim();

  let input = document.getElementById("input").value;
  input = input.split(">")[1] || input;
  input = input.split("<")[0];
  input = input.trim();

  if (input.slice(-1) == ".") {
    input = input.substring(0, input.length - 1);
  }

  document.getElementById("textarea").value = "Aula " + aula + " - " + input;

  const copyText = document.getElementById("textarea");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");

  clean();
}

function clean() {
  document.getElementById("input").value = "";
}
