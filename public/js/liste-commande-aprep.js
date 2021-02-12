
let reponse = false;
let btns = document.querySelectorAll('button');
window.setInterval('refresh()', 10000);

function refresh() {
  window.location.href = window.location.href
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let li = document.querySelector(`.el-${btn.value}`)
    reponse = confirm(`Voulez-vous confirmer la commande ${btn.value} avec le nombre de repas ${li.getAttribute('nbRepas')}`);
  })
})







