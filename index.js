const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send("<h1>강아지</h1>")
})

app.get('/dogsound', (req, res) => {
    res.send({'sound': '멍멍'})
})

app.get('/song', (req, res) => {
    res.send("<a href= https://www.youtube.com/watch?v=UTTHlzfl2SM&list=RDDYrY1E4-9NI&index=11>노래 링크</a>")
})

app.get('/cat', (req, res) => {
    res.send('고양이')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if (name == 'dog') {
        res.send({'sound': '멍멍'})
    } else if (name == "cat") {
        res.send({'sound' : '야옹'})
  } else if (name == "cow") {
        res.send({'sound' : '음메'})
   } else {
        res.send({'sound' : '알수없음'})
   }
  })

app.get('/user/:id', (req, res) => {
    const q = req.query
    console.log(q)
    console.log(q.q)
    console.log(q.name)
    res.send({'userid': q.name})

    // console.log(q.q) 쓰면   q 값이 나오고        console.log(q.name) 쓰면 name 이 나오고

    // http://localhost:3000/user/asdf?q=kwon&name=hello&age=20   하면
    // { q: 'kwon', name: 'hello', age: '20' }
    // 키: '값'
    
})
            // app.get('/user/:id', (req, res) => {
            //     const p = req.params
            //     console.log(p.id)
            //     res.send({'userid': p.id})
            //                         // http://localhost:3000/user/kwon   를 넣으면
            //                         // { id: 'kwon' }   가 나온다
            // })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})