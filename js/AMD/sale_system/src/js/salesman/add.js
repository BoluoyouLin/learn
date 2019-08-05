define([
    "jquery",
    "services/salesman_service",
    "require",
    "salesman/index"], function($, salesmanService,require) {
    return function() {
            var htmlStr = `<div class="salesman-wrapper">
                                <form>
                                    <label>姓名</label>
                                    <input name="name"/>
                                    <label>年龄</label>
                                    <input name="age"/>
                                    <button type="submit">提交</button>
                                </form>  
                            </div>`
            var $str = $(htmlStr)
            $str.on("submit",function(e) {
                e.preventDefault()
                var name = $(this).find("input[name=name]").val()
                var age = $(this).find("input[name=age]").val()
                salesmanService.add({name,age})
                require("salesman/index")();
            })
            $("#main .right").html($str)
        }
})