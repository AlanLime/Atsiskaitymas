

const vip = [
    "Andriew",
    "Robert",
    "Steve"
]

console.log(vip)

localStorage.setItem("vip", JSON.stringify(vip));

const btn = document.getElementById('but');

btn.onclick = function(event){
event.preventDefault();
document.getElementById('botn1').innerHTML = vip[0];
document.getElementById('botn5').innerHTML = vip[1];
document.getElementById('botn9').innerHTML = vip[2];

}

function dragstart_handler(ev) {

    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }

  function drop_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    let a = document.getElementById(data);
    let b = ev.target;
    console.log(a,b);

    let at = a.innerText;
    let bt = b.innerText;

    a.innerText = bt;
    b.innerText = at;
  }
  

function previewFile() {
    const content = document.querySelector(".content");
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        content.innerText = reader.result;
      },
      false
    );
  
    if (file) {
      reader.readAsText(file);
    }
  }
  