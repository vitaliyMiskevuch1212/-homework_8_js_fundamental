(function (){
    function checkEmail (email){
const emailRegex = /^[A-Za-z0-9]+([_-][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
if (emailRegex.test(email)){
    return "Email is correct!";
}else {
   return "Email is not correct!";
}
}
    console.log(checkEmail('my_mail@gmail.com')); // "Email is correct!"
    console.log(checkEmail('#my_mail@gmail.com')); // "Email is not correct!"
    console.log(checkEmail('my_ma--il@gmail.com')); // "Email is not correct!"

})()