let validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if (check !== true) {
                send = false;
                // exibir o erro
                console.log(check);
            }
        }
        //send = false;
        if (send) {
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let ruleDetails = rules[k].split('=');
                switch (ruleDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }

                        break;
                    case 'min':

                        break;
                }
            }
        }
        return true;
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);