const appear =() => {
    let div=document.getElementById('container')
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'element')

    let divContent = document.createTextNode('Element')

    newDiv.appendChild(divContent)
    div.appendChild(newDiv)
}