require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-3.3.1"
    }
});

require(["jquery","sale_man/index"], function($,saleManIndex) {
    var htmlStr = `<div class="left">
                            <ul>
                                <li>产品列表</li>
                                <li>销售员列表</li>
                            </ul>
                        </div>
                        <div class="right">
                        </div>`;
    $("#main").html(htmlStr)
});