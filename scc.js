const getcolor=()=>{
    const digi=Math.floor(Math.random()*16777215)
    const randomcolor="#"+ digi.toString(16)
    document.body.style.backgroundColor = randomcolor
    document.getElementById("dig").innerText=randomcolor
    console.log(digi)
}
document.getElementById("fun").addEventListener("click",getcolor)