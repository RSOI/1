const source = document.querySelector('#source')
let debounceActive = false

const getResult = function () {
  fetch(`/reduce?source=${source.value}`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .then(response => {
      const result = document.querySelector('.result')
      result.innerHTML = response.result
    })
}

source.addEventListener('input', () => {
  if (!debounceActive) {
    debounceActive = true
    setTimeout(() => {
      debounceActive = false
      getResult()
    }, 1000)
    getResult()
  }
})