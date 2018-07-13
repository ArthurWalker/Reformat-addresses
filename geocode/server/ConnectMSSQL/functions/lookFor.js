var lookFor = function(address){
    var word = "KILBRANISHDRIVEWOODVIEWPARKLIMERICK";
    if (address.includes(" "+word+" ")){
        console.log(address);
    }else if (address.includes(" "+word)){
        console.log(address);
    }else if (address.includes(word+" ")){
        console.log(address);
    }
}

module.exports=lookFor;