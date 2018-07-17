var removeDup=require('./removeDup');
var removeDup_Dub=function(address){
    var list_address=address.split(' ');
    var new_address="";
    var index = 0;
    while (index <list_address.length){
        new_address+=" "+list_address[index];
        if (/\b[0-9]+\b/.test(list_address[index+1])){
            new_address+=list_address[index+1];
            index++;
        }
        index++;
    }
    return removeDup(new_address);
 }
 
 module.exports=removeDup_Dub;