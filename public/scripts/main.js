import  Modal  from './modal.js'

const modal = Modal()


const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")




//pegar todos os botoes que existe com a classe check
const checkButtons = document.querySelectorAll(".action a.check")


checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click",handleclick)

})

//Quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".action a.delete")

deleteButton.forEach(button => {

    button.addEventListener("click",(event) => handleclick(event, false))

})

function handleclick(event, check = true){

    event.preventDefault()

    const text = check ? "Marcar como lida": "Excluir"
                const slug = check ? "check" : "delete"
                const roomId = document.querySelector("#room-id").dataset.id
                const questionId = event.target.dataset.id


                const form = document.querySelector(".modal form")
                form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

                

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML =   `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //abrir modal
    modal.open()
}




