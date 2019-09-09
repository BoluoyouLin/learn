var xhr = new XMLHttpRequest()
xhr.open('GET', '/api', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr(null)

var xhr = new XMLHttpRequest()
xhr.open('GET','./api',true);
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        if(xhr.status == 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr(null)

let xhr = new XMLHttpRequest()
xhr.open('GET','url',true)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
}
xhr.send()