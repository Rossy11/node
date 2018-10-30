/**
 * Created by Rossy1 on 2018/10/30.
 */
// 引入WebSocket模块
var ws = require('nodejs-websocket')
var PORT = 3030

var server = ws.createServer(function(conn){
    console.log('New connection')
    conn.on("text",function(str){
        console.log("Received"+str)
        conn.sendText("返回数据："+str)
    })
    conn.on("close",function(code,reason){
        console.log("connection closed")
    })
    conn.on("error",function(err){
        console.log("handle err")
        console.log(err)
    })
}).listen(PORT)

console.log('websocket server listening on port ' + PORT)