let firstStr = "86111105991011081011151153210511632991141051011154432871051101031081011151153210210811711611610111411544328411111111610410810111511532981051161011154432771111171161041081011151153210911711611610111411546";

let secondStr = "5468652073756d2074686520746f74616c206f66207468652061736369692076616c7565732066726f6d2065616368206c657474657220696e2074686520616e7377657220746f2074686520726964646c652e";

let thirdStr = "507473543466548535531534555466536545548466531466546538545544535466549533548535535544467";

function decodeStringHexadecimal(str){
    let chrArr = [];
    let len = str.length - 2;
    for(let i = 0; i < len; i+=2){
        chrArr.push(str[i] + str[i + 1]);
    }
    let convertedArr = chrArr.map(element => {
        let num = "0x" + element;
        return String.fromCharCode(num);
    });
    let convertedStr = convertedArr.join('');
    console.log(convertedStr);
}
function decodeStringDecimal(str){
    let chrArr = [];
    let len = str.length - 2;
    for(let i = 0; i < len; i+=2){
        let ascii = parseInt(str[i] + str[i + 1]);
        if(ascii < 32){
            ascii = parseInt(str[i] + str[i + 1] + str[i + 2]);
            i++;
        }
        chrArr.push(ascii);
    }
    let convertedArr = chrArr.map(element => {
        return String.fromCharCode(element);
    });
    let convertedStr = convertedArr.join('');
    console.log(convertedStr);
}
function decodeStringDecimal(str){
    let chrArr = [];
    let len = str.length - 2;
    for(let i = 0; i < len; i+=2){
        let ascii = parseInt(str[i] + str[i + 1]);
        if(ascii < 32){
            ascii = parseInt(str[i] + str[i + 1] + str[i + 2]);
            i++;
        }
        chrArr.push(ascii);
    }
    let convertedArr = chrArr.map(element => {
        return String.fromCharCode(element);
    });
    let convertedStr = convertedArr.join('');
    console.log(convertedStr);
}
decodeStringDecimal(firstStr);
decodeStringHexadecimal(secondStr);
decodeStringDecimal(thirdStr);