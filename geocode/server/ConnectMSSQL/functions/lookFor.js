var lookFor = function(address){
    var word = /\bAM\b/;
    if (address!=null && word.test(address)){
        console.log(address);
    }

    // var term = " TE ";
    // if (address != null && address.toUpperCase().includes(term)){
    //     console.log(address);
    // }
}

module.exports=lookFor;