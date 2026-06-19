let studentName = "Rahul"
let answerCorrect = 4
let answerWrong = 1

const finalScore = (name, correct, wrong) =>{
    if(name == "Unknown") {
        return "Invalid Student" 
    }
    return (correct * 4) - (wrong * 1)
}

console.log(finalScore(studentName, answerCorrect, answerWrong))