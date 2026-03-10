 array = [
     "| web developer",
     "| marketer",
     "| programmer",
     "| videographer",
     "| designer"

 ];

 var i = 0;

 function idk() {
     setInterval(function() {
         i++;
         $('#arrayHere').text(array[i]);
         console.log(i);
         if (i > 3) {
             i = -1;
         }

     }, 1000);

 }

 idk();
