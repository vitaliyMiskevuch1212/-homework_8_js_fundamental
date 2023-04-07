(function (){
function checkEmail (email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
}
    console.log(checkEmail("john.doe@example.com"));
    console.log(checkEmail("jane.doe@example"));
    console.log(checkEmail("example@com"));
    console.log(checkEmail("example.com"));
    console.log(checkEmail("example@com."));
})();