//https://github.com/liggth/inputmask-phones
const inputmaskPhones = (selector) => {
    function setMask() {
        let matrix = '+###############';
        maskList.forEach(item => {
            let code = item.code.replace(/[\s#]/g, ''),
                phone = this.value.replace(/[\s#-)(]/g, '');

            if (phone.includes(code)) {
                matrix = item.code;
            }
        });

        let i = 0,
            val = this.value.replace(/\D/g, '');

        this.value = matrix.replace(/(?!\+)./g, function (a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        //When input is empty
        if (!input.value) input.value = '+';

        //When input contains digits without plus
        if (input.value.length && input.value.indexOf('+') == -1) {
            input.value = '+' + input.value;
        }
        input.addEventListener('input', setMask);
        input.addEventListener('focus', setMask);
        input.addEventListener('blur', setMask);

        input.dispatchEvent(new Event('input'));
    });
};