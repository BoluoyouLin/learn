(function(window) {
    // 用来存储on方法绑定的callback函数
    // domEvent = [{dom: dom, type: type, callback: function(){}}]
    const domEvent = []; 
    
    function jQuery(selector) {
        return new jQuery.prototype.init(selector)
    }

    jQuery.prototype = {
        constructor: jQuery,
        init: function(selector) {
            let doms = document.querySelectorAll(selector)
            for(let i = 0; i < doms.length; i++) {
                this[i] = doms[i]
            }
            this.length = doms.length

            return this
        }
    }

    jQuery.prototype.init.prototype = jQuery.prototype

    jQuery.extend = jQuery.prototype.extend = function(...args) {
        var target, source = [...args];
        if(args.length === 1) {
            target = this
        }
        else {
            target = source[0]
            source.splice(0, 1)
        }
        Object.assign(target, ...source)
        return target
    }

    jQuery.extend({
        each(obj, callback) {
            // 1. 数组和伪数组用for循环
            //  --> 拥有length属性且length不小于0
            // 2. 对象用for。。in
            if( (length in obj) && obj.length >= 0) {
                for(let i = 0; i < obj.length; i++) {
                    callback.call(obj[i], i, obj[i])
                }
            }
            else {
                for(var key in obj) {
                    callback.call(obj[key], key, obj[key])
                }
            }
        },
        type(obj) {
            return Object.prototype.toString.call(obj)
                .replace("[object ", "")
                .replace("]","")
                .toLowerCase()
        }
    })

    jQuery.prototype.extend({
        each(callback) {
            jQuery.each(this, callback)
        },
        css(...args) {
            // 传一个参数
            // 1. 获取样式
            // 2. 设置多个样式
            if(args.length === 1) {
                if(jQuery.type(args[0]) === "string") {
                    return window.getComputedStyle(this[0])[args[0]]
                }
                else {
                    return jQuery.each(args[0],(key, value) => {
                        this.css(key, value)
                    })
                }
            }
            else {
                this.each(function(key, dom) {
                    this.style[args[0]] = args[1]
                })
            }
        },
        on(type,callback) {
            this.each(function() {
                this.addEventListener(type,callback)
                domEvent.push({dom:this, type, callback})
            })

            //实现链式编程
            return this
        },
        off(type) {
            this.each(function() {
                var doms = domEvent.filter(item => {
                    return item.dom === this && item.type === type
                })

                doms.forEach(item => {
                    this.removeEventListener(type, item.callback)
                })
            })

            return this
        }
    })

    window.jQuery = window.$ = jQuery
})(window)