 var getUserName = prompt("Helloo! Who are you? Please state your name: "); 

 console. log(getUserName); 

 document .getElementById ("username") .innerText= getUserName;

 // tooltip
 /*tooltip js */

 $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })