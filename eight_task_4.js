(function (){
    function validateCreditCardNumber(cardNumber){
        const regex = /^(?:\d{4}-){3}\d{4}$|^\d{16}$/;
        return regex.test(cardNumber)
    }
    console.log(validateCreditCardNumber('1234-5678-9012-3456'));
    console.log(validateCreditCardNumber('1234567890123456'));
    console.log(validateCreditCardNumber('12345678'));
    console.log(validateCreditCardNumber('1234-5678-9012-34567'));
    console.log(validateCreditCardNumber('1234-56789012-3456'));
})();