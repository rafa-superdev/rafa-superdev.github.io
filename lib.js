function elemento(seletor) {
  if (seletor.indexOf("#") != -1) {
    seletor = seletor.replace('#', '')
    return document.getElementById(seletor)
  } else if (seletor.indexOf('.') != -1) {
    seletor = seletor.replace('.', '')
    return document.getElementsByClassName(seletor)
  } else {
    return document.getElementsByTagName(seletor)
  }
}
