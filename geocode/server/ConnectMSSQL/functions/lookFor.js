var lookFor = function(address){
    var word = /\sTE\s/;
    if (address!=null && word.test(address)){
        console.log(address);
    }

    // var term = " TE ";
    // if (address != null && address.toUpperCase().includes(term)){
    //     console.log(address);
    // }
}

module.exports=lookFor;