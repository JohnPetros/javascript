const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

const insertKeys = () => {
  alert('Teste')
  const containerKeys = document.querySelector("#containerKeys");
  for (let k = 0; k < keys.length; k++) {
    containerKeys.innerHTML += `
            <div class="key">${keys[k]}</div>
        `;
    console.log(keys[k]);
  }
};

window.document.addEventListener("load", insertKeys);
