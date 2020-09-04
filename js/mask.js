const mask = (selector) => {
    function setMask(e) {
        // default mask
        let matrix = '+###############';

        let maskFound = false;
        maskList.forEach(item => {
            if ((this.value.length) > 1 && (item.code.indexOf(this.value, 0) == 0)) {
                maskFound = true;
                lastMatrix = item.code;
            }
        });

        if ((this.value.length) > 1 && !maskFound) {
            matrix = lastMatrix;
        }

        let i = 0,
            val = this.value.replace(/\D/g, '');


        this.value = matrix.replace(/(?!\+)./g, function(a) {
            return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.value = '+';
        input.addEventListener('input', setMask);
        input.addEventListener('focus', setMask);
        input.addEventListener('blur', setMask);
    });
};