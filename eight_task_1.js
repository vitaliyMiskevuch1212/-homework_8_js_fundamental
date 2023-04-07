(function (){
 function upperCase(string){
     if (/^[A-Z]/.test(string)){
      return "String's starts with uppercase character";
     } else {
      return "String's not starts with uppercase character";
     }
 }
console.log(upperCase("RegExp"));
 console.log(upperCase("regExp"));
 console.log(upperCase("8RegExp"));
})();