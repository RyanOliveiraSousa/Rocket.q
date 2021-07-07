export default function Modal (){

    
    const cancelButton = document.querySelector('.button.cancel')
    cancelButton.addEventListener("click", close)

      //criada para usar so o const e nao repetir o dom  
    const modalWrapper =  document.querySelector(".modal-wrapper")


    function open(){
        //funcionalidade de atribuir a classe active para a modal
        /*document.querySelector(".modal-wrapper").classList.add("active")*/
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active da modal
       /* document.querySelector(".modal-wrapper").classList.remove("active")*/
       modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}