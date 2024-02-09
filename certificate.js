document.addEventListener('DOMContentLoaded', function () {


    // if (document.querySelectorAll('.button') !== null) {
    //     let buttons = document.querySelectorAll('.button');
    //     buttons.forEach(button => button.addEventListener('click', processForm))
    // }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        console.log(nameOutput);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        console.log(eventData);
        let info = document.getElementById('info');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    //document.getElementById(`myform`).addEventListener(`submit`, function (eventData) {
    // eventData.preventDefault(); //stop page reload when form is submitted
    // console.log(eventData.target);
    // var formData = new FormData(eventData.target);
    // formData = Object.fromEntries(formData);

    // //update certificate information when form is submitted:
    // let nameOutput = document.getElementById('nameOutput');
    // let info = document.getElementById('info');
    // nameOutput.innerText = formData.name;
    // info.innerText = formData.type;
    //  });










});
