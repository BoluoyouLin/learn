define(["user/detail"], function(userDetail) {
    return function() {
        console.log("用户模块")
        userDetail()
    }
})