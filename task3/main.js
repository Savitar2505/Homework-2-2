let count = 1
let countMin = 0
const counter =()=> {
    if(count<10){
        count='0'+count
    }
    if(count===60){
        count=0
        count='0'+count
        countMin++
        if(countMin<10){
            countMin='0'+countMin
        }
        const countMinTag =document.getElementById('minutes')
        countMinTag.innerText=countMin
    }
    const countTag =document.getElementById("seconds")
    countTag.innerText=count
    count++
}
let interval

const start =()=>{
    interval=setInterval(counter, 1000)
}
const pause=()=>{
    clearInterval(interval)
}

let countReset
let countMinReset

const reset =()=> {
    countReset='0'+0
    countMinReset='0'+0
    const countMinTag =document.getElementById('minutes')
    const countTag =document.getElementById("seconds")
    countMinTag.innerText=countMinReset
    countTag.innerText=countReset
    count=0
    countMin=0
}
