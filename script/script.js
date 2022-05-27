let topPos = 50
let leftPos = 50

target.onmouseenter = function(){
    topPos = Math.floor(Math.random()*100)
    leftPos = Math.floor(Math.random()*100)
    target.style.top = topPos + '%'
    target.style.left = leftPos + '%'
}
target.onclick = function(){
    alert('You win')
}
let set = 0
settingsBtn.onclick = function(){
    settingsBtn.style.animation = 'none'
    if(set==0){
        settingsWindow.style.display = 'flex'
        set++
        setTimeout(function(){
            settingsBtn.style.animation = 'animSetOpen 1.5s forwards'
        }, 100)
    }else{
        settingsWindow.style.display = 'none'
        set--
        setTimeout(function(){
            settingsBtn.style.animation = 'animSetClose 1.5s forwards'
        }, 100)
    }  
}
targetColor.oninput = function(){
    target.style.backgroundColor = targetColor.value
    target.style.backgroundImage = 'none'
    target.style.borderRadius = '50%'
    target.style.border = '10px double white'
}
bgColor.oninput = function(){
    document.body.style.backgroundColor = bgColor.value
}
speed.onchange = function(){
    target.style.transition = speed.value/2 + 's'
}
mushroom.onclick = function(){
    mushroom.style.border = '1px solid black'
    bird.style.border = 'none'
    aliens.style.border = 'none'
    pikachu.style.border = 'none'
    target.style.backgroundImage = 'url(img/skins/mushroom.png)'
    target.style.border = 'none'
    target.style.borderRadius = '0'
    target.style.backgroundColor = 'transparent'
}
bird.onclick = function(){
    mushroom.style.border = 'none'
    bird.style.border = '1px solid black'
    aliens.style.border = 'none'
    pikachu.style.border = 'none'
    target.style.backgroundImage = 'url(img/skins/bird.png)'
    target.style.border = 'none'
    target.style.borderRadius = '0'
    target.style.backgroundColor = 'transparent'
}
aliens.onclick = function(){
    mushroom.style.border = 'none'
    bird.style.border = 'none'
    aliens.style.border = '1px solid black'
    pikachu.style.border = 'none'
    target.style.backgroundImage = 'url(img/skins/aliens.png)'
    target.style.border = 'none'
    target.style.borderRadius = '0'
    target.style.backgroundColor = 'transparent'
}
pikachu.onclick = function(){
    mushroom.style.border = 'none'
    bird.style.border = 'none'
    aliens.style.border = 'none'
    pikachu.style.border = '1px solid black'
    target.style.backgroundImage = 'url(img/skins/pikachu.png)'
    target.style.border = 'none'
    target.style.borderRadius = '0'
    target.style.backgroundColor = 'transparent'
}