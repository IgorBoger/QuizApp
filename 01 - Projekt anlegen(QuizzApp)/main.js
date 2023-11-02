let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das HTML Tag?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 2
    },

    {
        "question": "Wie bindet man eine Webseite in eine Webseite ein?",
        "answer_1": "Robbie Williams",
        "answer_2": "Laddy Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 2
    },

    {
        "question": "Mit welchem Befehl machen wir ein Container zum Flexbox?",
        "answer_1": "Robbie Williams",
        "answer_2": "Laddy Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "display: flex;",
        "right_answer": 4
    },

    {
        "question": "Wie?",
        "answer_1": "Robbie Williams",
        "answer_2": "Laddy Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was....?",
        "answer_1": "Robbie Williams",
        "answer_2": "Laddy Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
    let currentQuestions = 0;

}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // TODO: Show end screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('current-question').innerHTML = currentQuestion + 1; // Wird aktule Fragezahl angezeigt, (zbs 1,2,3 usw)!!!
        document.getElementById('ask').innerHTML = question['question']
        document.getElementById('answer_1').innerHTML = question['answer_1']
        document.getElementById('answer_2').innerHTML = question['answer_2']
        document.getElementById('answer_3').innerHTML = question['answer_3']
        document.getElementById('answer_4').innerHTML = question['answer_4']
    }
}

function answer(selection) { // Variable - (selection) wir aus - onclick="answer('answer_1,2,3, oder 4')" übergeben!!!

    let question = questions[currentQuestion]; // 2) Aktuelle Frage aus let questions an Stelle [0].

    console.log('Selected answer is', selection); // 1) Herausgefunden welche Variable - (selection) ist drinn/ausgewählt!!!

    let selectedQuestionNumber = selection.slice(-1); // 4) Wird somit letzte Zeichen aus Variable - (selection) rausgeholt um es vergleichen zu können!!!

    console.log('selectedQuestionNumber is', selectedQuestionNumber); // 4.1) Wird letzte Zeichen aus - let selectedQuestionNumber ausgelogt!!!

    // console.log('Current question is', question);  // Wir die ganze Frage ausgelogt!!
    console.log('Current question is', question['right_answer']); // 3) Hier wird dierekt richtige Antwort ausgelogt als(1,2,3 oder 4)!!!


    let idOfRightAnswer = `answer_${question['right_answer']}`; // Richtige Antwort als Variable definirt!!!

    if (selectedQuestionNumber == question['right_answer']) { // 5) Wird richtige Antwort vergliechen mit letzte Zeichen von ausgewählte Antwort!!!
        console.log('Richtige Antwort!!!'); // Wird den Richtige Wert/Antwort ausgelogt!!!
        document.getElementById(selection).parentNode.classList.add('bg-success');// Wenn der Antwort richtig ist, wird als Grün markiert!!!
        // .parentNode - Wir die clssList für übergeordneter container zugefügt!!!
        // bg-success die classe wir aus Bootstrap zugefügt!!!
    } else {
        console.log('Falsche Antwort!!!') // Wird den Falche Wert/Antwort ausgelogt!!!
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // Wenn der Antwort falsch ist, wird als Rot markiert!!!
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');// Richtige Anwort wird direkt mit angezeigt!!!
    }
    document.getElementById('next-button').disabled = false; // Der Button wir wieder aktiviert!!!
}

function nextQuestion() {
    currentQuestion++; // Ändert von 0 auf 1!!!
    document.getElementById('next-button').disabled = true; // Der Button wir wieder deaktiviert!!!
    resetAnswerButton();
    showQuestion();
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}