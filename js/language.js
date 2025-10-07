document.getElementById('learn-more-button').addEventListener('click', function () {
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});

function submitQuiz() {
    var results = '';
    var correctAnswers = ['A', 'B', 'A'];
    var form = document.getElementById('quiz-form');
    var userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value
    ];

    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            results += 'Question ' + (i + 1) + ': Correct<br>';
        } else {
            results += 'Question ' + (i + 1) + ': Incorrect<br>';
        }
    }

    document.getElementById('quiz-results').innerHTML = results;
}