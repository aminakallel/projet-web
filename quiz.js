    const correctAnswers = {
        q1: "b", // b
        q2: "a", // a
        q3: "b", // b
        q4: "b", // b
        q5: "b", // b
        q6: "a", // a
        q7: "b", // b
        q8: "c", 
        


};


document.getElementById('submitQuiz').addEventListener('click', function () {
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const correctList = document.getElementById('correctAnswers');
    correctList.innerHTML = ''; // Efface les résultats précédents

    // Vérifie les réponses
    Object.keys(correctAnswers).forEach(question => {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        } else {
            // Affiche la bonne réponse pour chaque question incorrecte
            const li = document.createElement('li');
            li.textContent = `Question ${question.slice(1)}: ${correctAnswers[question]}`;
            correctList.appendChild(li);
        }
    });
    

   // Affiche le score
   document.getElementById('score').textContent = score;
   document.getElementById('result').style.display = 'block';
});