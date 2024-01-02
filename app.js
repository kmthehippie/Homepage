

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)

        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show")
        }
    })
})


const hiddenEls = document.querySelectorAll(".hidden");

hiddenEls.forEach(el=>{
    observer.observe(el)
})



//make a fact function for sliders.

const CreateSlider = function(image1, image2, image3, image4, text, title, worklink){
    //parent
    const createCardSlider = document.createElement("div")
    createCardSlider.classList.add("card-slider");
    //child of parent
    const createCardSlides = document.createElement("div");
    createCardSlides.classList.add("card-slides")
    createCardSlider.appendChild(createCardSlides)
    //children of child
    const createInputOne = document.createElement("input");
    createInputOne.setAttribute("type", "radio")
    createInputOne.setAttribute("id", "radio1")
    createInputOne.setAttribute("name", "radio-btn")
    createCardSlides.appendChild(createInputOne)
    const createInputTwo = document.createElement("input");
    createInputTwo.setAttribute("type", "radio")
    createInputTwo.setAttribute("id", "radio2")
    createInputTwo.setAttribute("name", "radio-btn")
    createCardSlides.appendChild(createInputTwo)
    const createInputThree = document.createElement("input");
    createInputThree.setAttribute("type", "radio")
    createInputThree.setAttribute("id", "radio3")
    createInputThree.setAttribute("name", "radio-btn")
    createCardSlides.appendChild(createInputThree)
    const createInputFour = document.createElement("input");
    createInputFour.setAttribute("type", "radio")
    createInputFour.setAttribute("name", "radio-btn")
    createInputFour.setAttribute("id", "radio4")
    createCardSlides.appendChild(createInputFour)

    const createSlide = document.createElement("div");
    createSlide.setAttribute("class", "slide first")
    const createImg = document.createElement("img");
    createImg.setAttribute("src", image1)
    createImg.setAttribute("alt", null)
    createSlide.appendChild(createImg)
    createCardSlides.appendChild(createSlide)

    const createSlideDivTwo = document.createElement("div")
    createSlideDivTwo.setAttribute("class", "slide")
    const createImg2 = document.createElement("img");
    createImg2.setAttribute("src", image2)
    createImg2.setAttribute("alt", null)
    createSlideDivTwo.appendChild(createImg2)
    createCardSlides.appendChild(createSlideDivTwo)

    const createSlideDivThree = document.createElement("div")
    createSlideDivThree.setAttribute("class", "slide")
    const createImg3 = document.createElement("img");
    createImg3.setAttribute("alt", null)
    createImg3.setAttribute("src", image3)
    createSlideDivThree.appendChild(createImg3)
    createCardSlides.appendChild(createSlideDivThree)

    const createSlideDivFour = document.createElement("div")
    createSlideDivFour.setAttribute("class", "slide")
    const createImg4 = document.createElement("img");
    createImg4.setAttribute("alt", null)
    createImg4.setAttribute("src", image4)
    createSlideDivFour.appendChild(createImg4)
    createCardSlides.appendChild(createSlideDivFour)

    const createNavAuto = document.createElement("div")
    createNavAuto.classList.add("nav-auto");
    createCardSlides.appendChild(createNavAuto)

    const createAutoBtnOne = document.createElement("div");
    createAutoBtnOne.classList.add("auto-btn1")
    createNavAuto.appendChild(createAutoBtnOne)
    const createAutoBtnTwo = document.createElement("div");
    createAutoBtnTwo.classList.add("auto-btn2")
    createNavAuto.appendChild(createAutoBtnTwo)
    const createAutoBtnThree = document.createElement("div");
    createAutoBtnThree.classList.add("auto-btn3")
    createNavAuto.appendChild(createAutoBtnThree)
    const createAutoBtnFour = document.createElement("div");
    createAutoBtnFour.classList.add("auto-btn4")
    createNavAuto.appendChild(createAutoBtnFour)


    const createNavManual = document.createElement("div")
    createNavManual.classList.add("nav-manual")
    createCardSlides.appendChild(createNavManual)
    const labelOne = document.createElement("label");
    labelOne.classList.add("manual-btn")
    labelOne.setAttribute("for", "radio1")
    createNavManual.appendChild(labelOne)
    const labelTwo = document.createElement("label");
    labelTwo.setAttribute("for", "radio2")
    labelTwo.classList.add("manual-btn")
    createNavManual.appendChild(labelTwo)
    const labelThree = document.createElement("label");
    labelThree.setAttribute("for", "radio3")
    labelThree.classList.add("manual-btn")
    createNavManual.appendChild(labelThree)
    const labelFour = document.createElement("label");
    labelFour.setAttribute("for", "radio4")
    labelFour.classList.add("manual-btn")
    createNavManual.appendChild(labelFour)

    const createCardText = document.createElement("div")
    createCardText.classList.add("card-text")
    

    const linkName = document.createElement("a")
    linkName.setAttribute("href", worklink)
    linkName.textContent = title;
    createCardText.appendChild(linkName)
    const cardPara = document.createElement("p")
    cardPara.classList.add("card-para")
    cardPara.textContent = text
    createCardText.appendChild(cardPara)

    return{
        createCardSlider,
        createCardText
    }

}

//Create sliders only when button pressed > or <


const buttonR = document.querySelector(".button-right");
const buttonL = document.querySelector(".button-left");

const workCardOne = CreateSlider("./Media/bship1.png", "./Media/bship2.png","./Media/bship3.png", "./Media/bship5.png", "Following the course, I built a battleship game using pure vanilla JS. Here I built the computer to be able to select adjacent squares once the ship has been hit. It was very challenging and fun to build this project.", "Battleship", "https://kmthehippie.github.io/Battleship/")

const workDone = document.querySelector(".work-done")
workDone.appendChild(workCardOne.createCardSlider)
workDone.appendChild(workCardOne.createCardText)



const workCardTwo = CreateSlider("./Media/lib1.png", "./Media/lib2.png","./Media/lib3.png", "./Media/lib4.png", "In my attempt to create a mini library, I learnt how to make use of local storages and how to beautify forms. It was very tricky! But I managed figured some of it out. I settled with how it looks like now.", "Mini Library", "https://kmthehippie.github.io/Library/")

const workCardThree = CreateSlider("./Media/rps1.png", "./Media/rps2.png","./Media/rps1.png", "./Media/rps2.png", "This game was quick and easy to make. I enjoyed it a lot. My favorite thing about this is the colors I used. These are my 3 (well, maybe 4) favorite colors! White, black and yellow!", "Rock Papers Scissors", "https://kmthehippie.github.io/RPS/")

const workCardFour = CreateSlider("./Media/ttt1.png", "./Media/ttt2.png","./Media/ttt3.png", "./Media/ttt1.png", "Tic tac toe! This game was quite a challenge to code. Not the layout or design etc. It was the intelligence of the computer that had me stumped for days. Finally with the help of YOUTUBE, I got through this project. By the way, I was always curious, why is it toe and not tow?", "Tic Tac Toe", "https://kmthehippie.github.io/Tic-tac-toe/")

const workCardFive = CreateSlider("./Media/todo1.png", "./Media/todo2.png","./Media/todo1.png", "./Media/todo2.png", "This was one of my favorite projects. When it was complete, it was very rewarding. I thought I would have started to use it on my own for daily use, but I guess Notion's got me beat for this.", "To Do List", "https://kmthehippie.github.io/to-do/")

const workCardArrays = [workCardOne, workCardTwo, workCardThree, workCardFour, workCardFive]

let workCounter = 0
buttonR.addEventListener("click", ()=>{
workDone.removeChild(workDone.children[0])
workDone.removeChild(workDone.children[0])
workCounter ++ 
if (workCounter > workCardArrays.length -1){
    workCounter = 0;
} else if (workCounter < 0){
    workCounter = workCardArrays.length-1
}
workDone.appendChild(workCardArrays[workCounter].createCardSlider)
workDone.appendChild(workCardArrays[workCounter].createCardText)


})
buttonL.addEventListener("click", ()=>{
workDone.removeChild(workDone.children[0])
workDone.removeChild(workDone.children[0])

workCounter --
if (workCounter > workCardArrays.length){
    workCounter = 0;
} else if (workCounter < 0){
    workCounter = workCardArrays.length-1
}
workDone.appendChild(workCardArrays[workCounter].createCardSlider)
workDone.appendChild(workCardArrays[workCounter].createCardText)

})




let counter = 1;
const radioOne = function (){setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++
    if (counter > 4){
        counter = 1
    }
}, 3999)}