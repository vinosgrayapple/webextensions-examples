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
  // style.innerText = `html {filter: sepia(${value}%) !important}`
  let content = parent.frames[1].document.body
  content.style.border = `${~~(value/10)}px solid red`
}
browser.storage.local.get('value').then(res => update(res.value))
