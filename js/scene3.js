function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div')
  stage.append(danerysContainer)
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.top = '40%'
  danerysContainer.style.left = '25%'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '37%'
  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  danerys.style.width = '60%'
  danerys.style.position = 'absolute'
  danerys.style.top = 0
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
  egg = document.querySelector('#egg')
  drogoContainer.append(egg)
  egg.style.position = 'absolute'
  egg.style.width = '50%'
  egg.style.top = '40%' //40% start 20% end
  egg.style.left = '-30%' //-30 start -350end
  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '-30%'
  })

  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '-120%'
  })
  // Stage direction 2
  // inbetween frame
  frame(function() {
    egg.style.top = '30%'
    egg.style.left = '-210%'
  })

  frame(function() {
    egg.style.top = '25%'
    egg.style.left = '-300%'
  })
  //ending frame
  frame(function() {
    egg.style.top = '20%'
    egg.style.left = '-350%'
  })

  frame(function() {
    egg.style.top = '25%'
    egg.style.left = '-300%'
  })

  frame(function() {
    egg.style.top = '30%'
    egg.style.left = '-210%'
  })

  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '-120%'
  })

  frame(function() {
    egg.style.top = '40%'
    egg.style.left = '-30%'
  })
}
