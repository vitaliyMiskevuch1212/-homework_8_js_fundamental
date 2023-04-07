(function (){
 const inputString = "Java Script";
 const outputString = inputString.replace(/^(\w+)\s+(\w+)$/, '$2, $1');
 console.log(outputString);
})();