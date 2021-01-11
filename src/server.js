const express = require('express')
const expressStatic = require('express-static')
var consolidate = require('consolidate');
const path = require('path')
const webRouter = express.Router()

const open = require('open')
const port = '3002'
const hostName = '127.0.0.1'
var app = express()

// 配置模板引擎
// 输出什么文件
app.set('views', path.join(__dirname, 'demo'))
app.engine('html', consolidate.ejs)
app.set('view engine', 'html')

//指定默认首页
webRouter.get('/', (req, res, next) => {
    console.log(111);
    console.log(__dirname);
    res.render('index.html')
})
app.use('/', webRouter)

app.use(expressStatic('./demo'))
app.listen(port, hostName, function () {
    console.log(`${hostName}:${port}`)
    open(`http://${hostName}:${port}`)
})
