
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {

}

function deepestChild() {
  var divs = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0; i < divs.length; i++) {
    if (divs[i].textContent !== null)
      return divs[i]
  }
}
