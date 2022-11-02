let red = 0
let green = 0
let blue = 0

const reset = () => {
    document.getElementById("start").style.opacity = 1
    document.getElementById("title").style.fontSize = '5rem'
}

const start = () => {
    document.getElementById("start").style.opacity = 0
    document.getElementById("title").style.fontSize = '3rem'
    document.getElementById("resultscreen").style.opacity = 0

    red = Math.floor(255 * Math.random())
    green = Math.floor(255 * Math.random())
    blue = Math.floor(255 * Math.random())
    document.getElementById("color").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    document.getElementById("game").style.opacity = 1
}

['red','green','blue'].forEach(a => {
    document.getElementById(a).addEventListener("input", () => {
        const r = document.getElementById("red").value == ''? 0 : document.getElementById("red").value
        const g = document.getElementById("green").value == ''? 0 : document.getElementById("green").value
        const b = document.getElementById("blue").value == ''? 0 : document.getElementById("blue").value
    
    document.getElementById("input-color").style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
})

function submit() {
    const r = document.getElementById("red").value == ''? 0 : document.getElementById("red").value
    const g = document.getElementById("green").value == ''? 0 : document.getElementById("green").value
    const b = document.getElementById("blue").value == ''? 0 : document.getElementById("blue").value

    document.getElementById("game").style.opacity = 0
    document.getElementById("resultscreen").style.opacity = 1
    document.getElementById("start").style.opacity = 1
    document.getElementById("title").style.fontSize = '5rem'

    if (r == red && g == green && b == blue) {
        document.getElementById("resultscreen").innerHTML = `You Win<br>Color: ${red}, ${green}, ${blue}`
    } else {
        document.getElementById("resultscreen").innerHTML = `You Lost<br>Color: ${red}, ${green}, ${blue}<br>Your Color: ${r}, ${g}, ${b}`
    }
}