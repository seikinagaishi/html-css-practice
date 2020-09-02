const cpw = document.querySelector('#cracked')
const pw = document.querySelector('#pw')

document.querySelector('#btn').addEventListener('click', crackPassword)

async function crackPassword() {
    var val = 0
    while(val != pw.value) {
        val++
        console.log(val)
    }
    cpw.value = val
}