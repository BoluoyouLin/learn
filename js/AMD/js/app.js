require.config({
    baseUrl: "js"
})

require(["user/index"], function(userIndex) {
    userIndex()
    console.log("app.js")
})