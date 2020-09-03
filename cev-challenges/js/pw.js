const cpw = document.querySelector('#cracked')
const pw = document.querySelector('#pw')
document.querySelector('#btn').addEventListener('click', crackPassword)

async function crackPassword() {
    var size = pw.value.length;

    var val = ['']
    if(pw.value != '') {
        for(var i = size - 1; i >= 0; i--) {
            for(var j = 0; j < 256; j++) {
                val[i] = j;
                val[i] = String.fromCharCode(val[i])
                var pass = val.toString().replace(/,/g, "")
                console.log(pass)
                if(pass == pw.value) {
                    cpw.value = pass
                    return
                }
            }
        }
    }
}