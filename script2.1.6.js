let bg1 = document.getElementById("bg1")
let bg2 = document.getElementById("bg2")
let bg3 = document.getElementById("bg3")
let bg4 = document.getElementById("bg4")
let bg5 = document.getElementById("bg5")
let bg6 = document.getElementById("bg6")
let time = 5000

let slider = function silder(){
    if(bg1.className === "bgImg"
        && bg2.className === "bgImg"
        && bg3.className === "bgImg"
        && bg4.className === "bgImg"
        && bg5.className === "bgImg"
        && bg6.className === "bgImg"){
            bg1.className = "bgImgShow"
        } else if(bg1.className === "bgImgShow"){
            bg1.className = "bgImg"
            bg2.className = "bgImgShow"
        } else if(bg2.className === "bgImgShow"){
            bg2.className = "bgImg"
            bg3.className = "bgImgShow"
        } else if(bg3.className === "bgImgShow"){
            bg3.className = "bgImg"
            bg4.className = "bgImgShow"
        } else if(bg4.className === "bgImgShow"){
            bg4.className = "bgImg"
            bg5.className = "bgImgShow"
        } else if(bg5.className === "bgImgShow"){
            bg5.className = "bgImg"
            bg6.className = "bgImgShow"
        } else if (bg6.className === "bgImgShow"){
            bg6.className = "bgImg"
            bg1.className = "bgImgShow"
        }

        setTimeout("slider()", time)
}

window.onload = slider()