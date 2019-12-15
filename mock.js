const express = require('express')
const app = express()

app.get('/course/list', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,post,put,delete')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code: 0,
        list: [
            { name: "苹果", id: 1 },
            { name: "西瓜", id: 2 },
            { name: "梨子", id: 3 },
            { name: "香蕉", id: 4 },
        ]
    })
})

app.listen(3000, () => {
    console.log("mocking...");
})