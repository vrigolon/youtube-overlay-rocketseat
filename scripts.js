const videos = [
  {name: "Iniciando com Git | Diego Fernandes", id: "MW7hrQe6aYo", time: "06:26 min"},
  {name: "Criando contribuição open-source no Github do zero! | Diego Fernandes", id: "mcd7lqpUzIA", time: "42:25 min"},
  {name: "Ambiente de desenvolvimento NodeJS com Docker e Docker Compose | Diego Fernandes", id: "AVNADGzXrrQ", time: "17:30 min"},
  {name: "Recriando Pipefy do zero (com drag n' drop) | Diego Fernandes", id: "awRtgpRsdTQ", time: "01:11:00 min"},
  {name: "Deploy de apps Node.js | Masterclass #03", id: "ICIz5dE3Xfg", time: "01:14:12 min"},
  {name: "Técnicas de estudo e aprendizado tradicional | Podcast FalaDev #11", id: "QfcozcbDhNM", time: "43:46 min"},
  
]

const wrapper = document.getElementById("videoWrap");
let myHTML = '';

  for (video of videos) {
  myHTML += `<div class="card" id="${video.id}">
  <div class="card__image-container">
    <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.name}">
  </div>
  <div class="card__content">
    <p>${video.name}</p>
  </div>
  <div class="card__info">
    <p>${video.time}</p>
    <p class="card__price">
      Gratuito
    </p>
  </div>
</div>`
  }

wrapper.innerHTML = myHTML


const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("iframe").src = `https://www.youtube-nocookie.com/embed/${videoId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector("iframe").src = ""
})




