(function (){
    function checkLogin(login) {
        const loginRegex = /^[a-zA-Z][a-zA-Z\d]{1,9}$/;
        if (!loginRegex.test(login)) {
            return false;
        }

        const numberRegex = /\d+(\.\d+)?/g;
        const numbers = login.match(numberRegex);
        return numbers || false;
    }
    console.log(checkLogin('ee1.1ret3'));
    console.log(checkLogin('ee1*1ret3'));
})();