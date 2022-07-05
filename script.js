const thanks = document.querySelector(".thanks")
const btn = document.querySelector(".btn")
const form = document.querySelector("#form")

form.addEventListener('submit', (e) =>{
   e.preventDefault()
   setInterval(function clickBtn(e){

    thanks.classList.add('show')
       
    }, 100)
})

