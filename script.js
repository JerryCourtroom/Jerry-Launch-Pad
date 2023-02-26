/*----------------------.
|     Hello there!      |
|   My first project!   |
|  By: JerryCourtroom   |
| Created on 2.15.2023  |
'----------------------*/
var quizVision = document.getElementById("jerryQuiz")
var infoHeadingVision = document.getElementById("extrasPrompt")
var extrasListVision = document.getElementById("listOfExtras")
var firstQuestionVision = document.getElementById("jerryFirstQuestion")
quizVision.style.display = "none"
infoHeadingVision.style.display = "none"
extrasListVision.style.display = "none"
firstQuestionVision.style.display = "none"

function extrasClick(extrasAnswer) {
    extrasAnswer = prompt("Would you like to see the extras?")
    if (extrasAnswer == "yes" || extrasAnswer == "Yes" || extrasAnswer == "YES") {
        alert("Here is the extra resources.")
        extrasVisibleToggle()
    } else if (extrasAnswer == "no" || extrasAnswer == "No" || extrasAnswer == "NO") {
        alert("Well, let's navigate back to the home page.")
    } else {
        alert("why")
    }
}
function extrasVisibleToggle() {
    infoHeadingVision.style.display = "block"
    extrasListVision.style.display = "block"
    quizVision.style.display = "block"
}
function quizClick() {
    firstQuestionVision.style.display = "block"
}