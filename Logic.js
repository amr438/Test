let imgs = Array.from(document.querySelectorAll("img"))
let count = document.querySelector(".count span")
let imgsCount = imgs.length
let PreviosButton = document.querySelector(".Previos")
let nextButton = document.querySelector(".next")
let countSlide = 1;
let ul = document.createElement("ul")
for (let i = 1 ; i <=imgsCount ;i++) {
    let li =  document.createElement("li")
    li.id = i
    if (i === 1) {
        li.className = "active"
    }
    li.textContent = i
    ul.appendChild(li)
    PreviosButton.after(ul)
}
li = document.querySelectorAll("ul li")
let swap = true
nextButton.addEventListener("click" , (e)=> {
    if (countSlide < 5) {
        countSlide++
        li.forEach((li)=> {
            li.classList.remove("active");
            if (li.id == countSlide) {
                li.className = "active"
                count.textContent = li.id

                imgs.forEach((img)=> {
                    img.id = ""
                    if (img.dataset.id == li.id) {
                        img.id = "focus"
                    }
                })
            }
        })
    }
    if (countSlide == 5) {
        nextButton.style.cursor = 'no-drop'
        nextButton.style.backgroundColor= "hsl(212deg 100% 50% / 30%)"
        e.preventDefault()
    }
})
PreviosButton.addEventListener("click" , (e)=> {
if (countSlide > 1 ) {
    nextButton.style.cursor = 'pointer'
    nextButton.style.backgroundColor=" var(--blue-color)"
        countSlide--
        li.forEach((li)=> {
        li.classList.remove("active")
        if (li.id == countSlide) {
            li.className = "active"
            count.textContent = li.id

            imgs.forEach((img)=> {
                img.id = ""
                if (img.dataset.id == li.id) {
                    img.id = "focus"
                }
            })
            }
})
    }
    if (countSlide == 1) {
        e.preventDefault()
    }
})

li.forEach((e)=> {
    e.addEventListener("click" , ()=> {
        li.forEach((e)=> {
            e.classList.remove("active")
        })
        e.classList.add("active")
        count.textContent = e.id
        imgs.forEach((img)=> {
            img.id= ""
            if (img.dataset.id == e.id) {
                img.id = "focus"
            }
        })
    })
})