let input = document.querySelector('input')

input.addEventListener('input', e => {
  const valueFrominput = e.target.value
  if (valueFrominput.length >= 3) {
    setValue(valueFrominput)
    console.log(valueFrominput)
  }
})

async function setValue(value) {
  await browser.storage.local.set({ value })
}

async function init() {
  let { value } = browser.storage.local.get('value')
  if (!value) {
    value = ''
  }
  input.value = value
  setValue('')

  // storage contains two items,
  // "kitten" and "monster"
  function setItem() {
    console.log('OK')
  }

  function gotKitten(item) {
    console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`)
  }

  function gotMonster(item) {
    console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`)
  }

  function onError(error) {
    console.log(error)
  }

  // define 2 objects
  var monster = {
    name: 'Kraken',
    tentacles: true,
    eyeCount: 10
  }

  var kitten = {
    name: 'Moggy',
    tentacles: false,
    eyeCount: 2
  }

  // store the objects
  browser.storage.local.set({ kitten, monster }).then(setItem, onError)

  browser.storage.local.get('kitten').then(gotKitten, onError)
  browser.storage.local.get('monster').then(gotMonster, onError)
}

init().catch(err => console.error(err))
