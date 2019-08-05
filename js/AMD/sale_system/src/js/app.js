require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-3.3.1",
        services: "../services"
    }
});

require(["jquery","salesman/index","product/index"], function($,salesmanIndex,productIndex) {
    var htmlStr = `<div class="left">
                            <ul>
                                <li class="product">产品列表</li>
                                <li class="salesman">销售员列表</li>
                            </ul>
                        </div>
                        <div class="right">
                        </div>`;
    $("#main").html(htmlStr)

    $("#main .left").on("click","li", function() {
        if($(this).hasClass("salesman")) {
            salesmanIndex()
        }
        else if($(this).hasClass("product")){
            productIndex()
        }
    })
});