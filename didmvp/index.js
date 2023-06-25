const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', function (req, res)  {

    res.header("Access-Control-Allow-Origin", "*"); //package.json의 Proxy 설정을 했으나, cors 문제가 발생해 heder에 처리함.


    res.send([
        {
            'id': 1,
            'image': 'https//placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '9612223',
            'gender': '남자',
            'job': '대학생'
            },  
            {
            'id': 2,
            'image': 'https//placeimg.com/64/64/2',
            'name': '안정환',
            'birthday': '9612223',
            'gender': '남자',
            'job': '대학생'
            },
            {
            'id': 3, 
            'image': 'https//placeimg.com/64/64/3',
            'name': '금지엽',
            'birthday': '9612223',
            'gender': '여자',
            'job': '대학생'
            }

    ]);
})

app.listen(port, () => {console.log(`Listen on port ${port}`)});