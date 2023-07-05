function toggleMode() {
  let html = document.documentElement
  html.classList.toggle('light')
  // ou:
// if (html.classList.contains('light')) {
//    html.classList.remove('light')
//  } else {
//    html.classList.add('light')
//  }

  let img = document.querySelector('#profile img')
  
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }
}