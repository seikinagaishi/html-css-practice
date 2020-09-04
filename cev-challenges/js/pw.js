const cpw = document.querySelector('#cracked')
const pw = document.querySelector('#pw')
document.querySelector('#btn').addEventListener('click', crackPassword)



async function crackPassword() {
    var size = pw.value.length;

    var val = ['']
    if(pw.value != '') {

        if(parseInt(pw.value) == pw.value) {
            var spaceBetween = 1000000000000000
            for(var i = 0; i != pw.value; i++) {
                console.log(i);
                if(i + spaceBetween < pw.value) {
                    i += spaceBetween
                } else {
                    spaceBetween /= 10
                }
            }

            i = i.toString()
            if(size > i.length) {
                var difference = size - i.length
                var arrayWith0 = ['']
                var position = i.length - 1

                for(var j = size - 1; j >= 0; j--) {
                    if(j > difference - 1) {
                        arrayWith0[j] = i[position]
                        position--
                    } else {
                        arrayWith0[j] = 0
                    }
                }
                i = arrayWith0.toString().replace(/,/g, "")
            }
            cpw.value = i
        } 
        
        else {
            for(var i = size - 1; i >= 0; i--) {

                for(j = 0; j < 256; j++) {
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
}