const validate = () => {
    const calcInputs = document.querySelectorAll('.calc-block > input');
    const forms = document.querySelectorAll('form');
   
    
    calcInputs.forEach(input => input.addEventListener('input', e => {
        
        e.target.value = e.target.value.replace(/\D+/g, '');
            
    }));

    forms.forEach(form => {
        const texts = form.querySelectorAll('input[type="text"]');
        const placeHolders = form.querySelectorAll('input[placeholder="Ваше сообщение"]');
        const emails = form.querySelectorAll('input[type="email"]');
        const tels = form.querySelectorAll('input[type="tel"]');

        texts.forEach(input => input.addEventListener('input', e => {

            e.target.value = e.target.value.replace(/[^а-яё\-\s]/gi, '');

        }));

        placeHolders.forEach(input => input.addEventListener('input', e => {

            e.target.value = e.target.value.replace(/[^а-яё\-\s]/gi, '');

        }));

        emails.forEach(input => input.addEventListener('input', e => {

            e.target.value = e.target.value.replace(/[^a-z\d@\-\!\_\.\~\*\']/gi, '');
            
        }));

        tels.forEach(input => input.addEventListener('input', e => {

            e.target.value = e.target.value.replace(/[^\d\(\)\-]/gi, '');

        }));
    });


};

export default validate;