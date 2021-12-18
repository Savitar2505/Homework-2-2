let span = document.getElementsByTagName('span')
for (let i = 0; i<span.length; i++){
    span[i].classList.toggle('hidden')
}
for (let p of document.getElementsByTagName('p')){
    let button =document.createElement('button')
    let buttonContent = document.createTextNode('Посмотеть ответ')
    button.appendChild(buttonContent)
    p.insertAdjacentElement('afterend', button)
}

let buttons= document.getElementsByTagName('button')
for(let i =0; buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
            span[i].classList.toggle('hidden')
    } )
}

