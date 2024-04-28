//fetch("http://localhost:3000/comments")
//    .then((response) => response.json())
//    .then((json) => console.log(json)); //전체 데이터 조회

fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id로 조회

