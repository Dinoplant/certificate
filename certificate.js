document.addEventListener('DOMContentLoaded', function () {


    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        console.log(nameOutput);
        nameOutput.innerHTML = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        // console.log(eventData);
        changeCert(eventData.target.value);
    });

    document.getElementById(`myform`).addEventListener(`submit`, function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = formData.name;
    });




    function changeCert(value) {
        let certificate = document.getElementById('test-section');
        certificate.classList = ""; // clear classes on each function call
        document.getElementById("internet").style.visibility = "hidden";
        switch (value) {
            case 'Skill':
                certificate.classList.add('test1');

                break;
            case 'Comedian':
                certificate.classList.add('test2');
                break;
            case 'Internet':
                document.getElementById("internet").style.visibility = "visible";
                break;
        }
        console.log(value)
    }






});
