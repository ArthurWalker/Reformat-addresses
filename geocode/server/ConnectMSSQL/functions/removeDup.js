var removeDup=function(address){
   var list_address=address.split(" ");
   var new_address=[list_address[0]];
   for (let index = 1; index < list_address.length; index++) {
        if (new_address[new_address.length-1]!=list_address[index]){
            new_address.push(list_address[index]);
        }
   }
   return new_address.join(" ");
}

module.exports=removeDup;
