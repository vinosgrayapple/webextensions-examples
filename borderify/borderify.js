/*
Just draw a border round the document.body.
*/
// document.body.style.border = "10px solid red";
// parent.frames[1].document.body.style.border = '10px solid red'
// let content = parent.frames[1].document.body
// content.style.border = '10px solid red'
let style = document.createElement('style')
document.body.appendChild(style)

browser.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && 'value' in changes) {
    update(changes.value.newValue)
  }
})

function update(value) {
  const content = [
    ...parent.frames[1].document.querySelectorAll('#DLLTable tr')
  ]
  const re = new RegExp(value, 'i')
  content.forEach(el => {
    if (!re.test(el.children[5].innerText.trim())) {
      el.remove()
    }
  })
  // content.style.border = `${~~(value / 10)}px solid red`
}
browser.storage.local.get('value').then(res => update(res.value))
