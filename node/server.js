const readLine = require('readline')

const review = {
    name: null,
    comment: null
}

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("What is your name: ", name => {
    review.name = name
    console.log(`Thank You ${review.name.toUpperCase()}`)
    r1.question("your comment: ", comment => {
        review.comment = comment
        console.log(review.comment.slice(0, 21))
        r1.close()
    }); 
});





