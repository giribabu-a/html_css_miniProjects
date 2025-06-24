function showForm(id){
    let formsDomEle = document.querySelectorAll(".form-section")

   formsDomEle.forEach(function (element){
        element.classList.remove('active')
   })

   document.getElementById(id).classList.add('active')
}