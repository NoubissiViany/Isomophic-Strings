const input1 = document.querySelector('.inpt1')
const input2 = document.querySelector('.inpt2')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const map = {}
let output

btn.addEventListener('click', function () {
  isomorphic()
})

function isomorphic () {
  const str1 = input1.value
  const str2 = input2.value

  if (str1.length === str2.length) {
    for (let i = 0; i < str2.length; i++) {
      if (map[str1[i]] === undefined) {
        map[str1[i]] = str2[i]
        output = true
      } else {
        if (map[str1[i]] !== str2[i]) {
          output = false
        }
      }
      result.style.visibility = 'visible'

      if (output !== true) {
        result.innerHTML = 'False'
      } else {
        result.innerHTML = 'True'
      }
    }
  } else {
    alert('Sorry!!! The strings most have the same length')
    input1.value = ''
    input2.value = ''
  }
}
