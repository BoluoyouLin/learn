// 异步加载图片的例子
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image()
        
        image.onload = function() {
            resolve(image)
        }

        image.onerror = function() {
            reject(new Error("Could not load image at" + url))
        }

        image.url = url
    });
}

// Promise对象实现Ajax操作
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if(this.readyState === 4) {
                if(this.status === 200) {
                    resolve(this.response);
                }else {
                    reject(new Error(this.statusText));
                }
            }
        }

        const xhr = new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange = handler
        xhr.responseType = 'json'
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();
    });

    return promise
}

getJSON().then((json) => {
    console.log(json)
}).catch((err) => {
    console.log(err)
})

