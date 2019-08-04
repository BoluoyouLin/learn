define([], function() {
    return function() {
        var htmlStr = `<div class="left">
                            <ul>
                                <li>产品列表</li>
                                <li>销售员列表</li>s
                            </ul>
                        </div>
                        <div class="right">
                        </div>`
        $("#main").html(htmlStr)
    }
});