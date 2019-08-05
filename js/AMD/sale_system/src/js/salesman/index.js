define([
    "services/salesman_service",
    "jquery",
    "salesman/add"
], function(salesmanService,$,salesmanAdd) {
    return function() {
        var htmlStr = `<div class="salesman-wrapper">
                            <div class="top">
                                <h3>销售员列表</h3>
                                <button>新增</button>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>姓名</th>
                                        <th>年龄</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${salesmanService.getList().map( item => {
                                        return `<tr>
                                                    <td>${item.name}</td>
                                                    <td>${item.age}</td>
                                                </tr>`
                                    }).join("")}
                                </tbody>
                            </table>
                        </div>`
        $(".right").html(htmlStr)
        $(".top button").on("click", function() {
            salesmanAdd()
        })
    }
});