const inicio= document.getElementById('inicio')

// const header = document.getElementById("container-header")

const header = document.getElementById("header")

const nav = document.getElementById("container-nav")

const menu = document.querySelector("#hamburger")

const ler = document.querySelectorAll(".ler")

const ancoras = document.querySelectorAll('#nav a')

window.addEventListener('resize' , ()=>{

    if(window.innerWidth >= 1200){
        menu.style.display="none"
    }
})

ancoras.forEach(item=>{ 
    item.addEventListener("click" ,()=>{
       if(header.classList.contains('header_ativo')){
        header.classList.remove('header_ativo')
        menu.checked=false
        
        }else{
            menu.checked=true
        }
    })
})

menu.addEventListener('click',(e)=>{

    header.classList.toggle("header_ativo")


})



ler.forEach(item=>{

    item.addEventListener('click',(e)=>{

        let parente = e.target.previousElementSibling;

        if(parente.classList.contains('ativado')){

            parente.classList.remove("ativado")
            
        }else{
            parente.classList.add("ativado")
        }
    })
})

// inicio.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let mouseX=e.screenX
//     let mouseY=e.screenY
    
//     let clickImg=document.createElement('img')
//     clickImg.src="imgs/clickImg.png"
//     clickImg.classList.add("imgClick")
//     clickImg.style.left= `${mouseX-50}px`
//     clickImg.style.top= `${mouseY-150}px`
//     document.body.appendChild(clickImg)
//     setTimeout(()=>{
//         clickImg.remove()
//     },5000)

//     console.log(mouseX, mouseY)

// })


const pagina = document.querySelectorAll(".pagina")

const observer= new IntersectionObserver((e)=>{
e.forEach(item=>{

    if(item.isIntersecting == true){
        item.target.classList.add('show')
    }else{
        item.target.classList.remove('show')
    }
 })
})

pagina.forEach(e=>{

    observer.observe(e)
})