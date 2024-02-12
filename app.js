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

    if (document.getElementById(`print`) != null) {
        let printElement = document.getElementById(`print`);
        printElement.addEventListener(`click`, function (e) {
            window.print();
        });
    }

    let theDate = new Date().toLocaleDateString(`en-us`, {
        weekday: `long`, year: `numeric`, month: `short`, day: `numeric`
    })


    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = "";

        let certTop = document.getElementById(`certificate-top-text`);
        let certMid = document.getElementById(`certificate-mid-text`);
        let certSign = document.getElementById(`certificate-bot-sign-text`);
        let certDate = document.getElementById(`certificate-bot-date-text`);
        let certImage = document.getElementById(`certificate-image`)
        certImage.classList = ``;
       





        switch (value) {
            case 'Skill':
                certificate.classList.add('certificate-skill');
                certTop.innerText = `SKILL ISSUE`;
                certMid.innerText = `For typing "youre", using easy mode, and consistently using lowercase I. Honestly, Git Gud.`;
                certSign.innerText = `Ms.Slow`
                certImage.classList.add(`certificate-image-skill`);

                certDate.innerText = theDate;
                break;
            case 'Comedian':
                certificate.classList.add('certificate-comedian');
                certTop.innerText = `UNINTENTIONAL COMEDIAN`;
                certMid.innerText = `For being the center of every joke, even unexpectedly.`;
                certSign.innerText = `Your Friend Group`
                certImage.classList.add(`certificate-image-comedian`);
                certDate.innerText = theDate;
                break;
            case 'Internet':
                certificate.classList.add('certificate-internet');
                certTop.innerText = `INTERNET USER`;
                certMid.innerText = `For being able to look up 1+1, and finding angry twitter users on the internet.`;
                certSign.innerText = `Google themselves`
                certImage.classList.add(`certificate-image-internet`);
                certDate.innerText = theDate;
                break;
        }
        console.log(value)
    }






});
