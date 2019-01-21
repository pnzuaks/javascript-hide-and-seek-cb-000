
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {

}

function deepestChild() {
  var grand = document.getElementById('grand-node')
  var allDivs = grand.querySelectorAll('div')

  for (let i = 0; i < allDivs.length; i++) {
    if (allDivs[i].textContent !== null)
      return allDivs[i]
  }
}
