function scene4() {

  // Setup Stage
  stage = document.querySelector('#stage');
  kingsLanding = document.querySelector('#kings-landing');
  stageImg = stage.querySelector('#stage-img');
  kingsSrc = kingsLanding.getAttribute('src');
  stageImg.setAttribute('src', kingsSrc);

  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer)
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.top = '40%'
  danerysContainer.style.left = '25%'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '25%'
  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.width = '60%'
  danerys.style.position = 'absolute'
  danerys.style.top = '-45%'
  dress = document.querySelector('#blue-dress')
  danerysContainer.append(dress)
  dress.style.position = 'absolute'
  dress.style.bottom = 0
  // Character 2
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.top = '40%'
  drogoContainer.style.left = '70%'
  drogoContainer.style.width = '10%'
  drogoContainer.style.height = '37%'
  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.position = 'absolute'
  drogo.style.width = '65%'
  drogo.style.top = 0
  bulky = document.querySelector('#bulky-man')
  drogoContainer.append(bulky)
  bulky.style.position = 'absolute'
  bulky.style.width = '70%'
  bulky.style.bottom = '50px'

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    danerys.style.transform = 'rotateY(0deg)'
    dress.style.transform = 'rotateY(0deg)'
    drogo.style.transform = 'rotateY(0deg)'
    bulky.style.transform = 'rotateY(0deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(180deg)'
    danerys.style.left = '25%'
    dress.style.transform = 'rotateY(180deg)'
    drogo.style.transform = 'rotateY(180deg)'
    bulky.style.transform = 'rotateY(180deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(0deg)'
    danerys.style.left = '0'
    dress.style.transform = 'rotateY(0deg)'
    drogo.style.transform = 'rotateY(0deg)'
    bulky.style.transform = 'rotateY(0deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(180deg)'
    danerys.style.left = '25%'
    dress.style.transform = 'rotateY(180deg)'
    drogo.style.transform = 'rotateY(180deg)'
    bulky.style.transform = 'rotateY(180deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(0deg)'
    danerys.style.left = '0'
    dress.style.transform = 'rotateY(0deg)'
    drogo.style.transform = 'rotateY(0deg)'
    bulky.style.transform = 'rotateY(0deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(180deg)'
    danerys.style.left = '25%'
    dress.style.transform = 'rotateY(180deg)'
    drogo.style.transform = 'rotateY(180deg)'
    bulky.style.transform = 'rotateY(180deg)'
  })

  frame(function() {
    danerys.style.transform = 'rotateY(0deg)'
    dress.style.transform = 'rotateY(0deg)'
    drogo.style.transform = 'rotateY(0deg)'
    bulky.style.transform = 'rotateY(0deg)'
  })

  frame(function() {
    danerysContainer.style.left = '10%'
    drogoContainer.style.left = '60%'
  })

  frame(function() {
    danerysContainer.style.top = '50%'
    drogoContainer.style.top = '50%'
  })

  frame(function() {
    danerysContainer.style.top = '60%'
    drogoContainer.style.top = '60%'
  })

  frame(function() {
    danerysContainer.style.display = 'none'
    drogoContainer.style.display = 'none'
  })

}
