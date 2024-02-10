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

    // document.getElementById(`myform`).addEventListener(`submit`, function (eventData) {
    //     eventData.preventDefault(); //stop page reload when form is submitted
    //     console.log(eventData.target);
    //     var formData = new FormData(eventData.target);
    //     formData = Object.fromEntries(formData);

    //     //update certificate information when form is submitted:
    //     let nameOutput = document.getElementById('nameOutput');
    //     nameOutput.innerText = formData.name;
    // });




    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = "";
        let certTop = document.getElementById(`certificate-top-text`);
        let certMid = document.getElementById(`certificate-mid-text`);
        let certSign = document.getElementById(`certificate-bot-sign-text`);
        let certDate = document.getElementById(`certificate-bot-date-text`);

        switch (value) {
            case 'Skill':
                certTop.innerText = `SKILL ISSUE`
                certMid.innerText = `For typing "youre", using easy mode, and consistently using lowercase I. Honestly, Git Gud.`
                break;
            case 'Comedian':
                certTop.innerText = `UNINTENTIONAL COMEDIAN`
                certMid.innerText = `For being the center of every joke, even unexpectedly.`
                break;
            case 'Internet':
                certTop.innerText = `INTERNET USER`
                certMid.innerText = `For being able to look up 1+1, and finding angry redditors on the internet.`
                break;
        }
        console.log(value)
    }






});
