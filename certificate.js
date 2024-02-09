document.addEventListener('DOMContentLoaded', function () {


    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');

        nameOutput
        console.log(eventData);
    });

    document.getElementById(`myform`).addEventListener(`submit`, function (eventData) {
        let formData = new FormData(eventData);
    });










});
