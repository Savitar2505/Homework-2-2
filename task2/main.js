function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random =()=> {
    let container = document.getElementById('container')
    let elemen = document.createElement('div')
    elemen.setAttribute('class', 'element')

    let number = document.createTextNode(getRandomIntInclusive(0, 20))

    elemen.appendChild(number)
    container.appendChild(elemen)
}

let interval = setInterval(random, 5000)

const start =()=> {
    interval = setInterval(random, 5000)

}

const stop =()=>{
    clearInterval(interval)
}
