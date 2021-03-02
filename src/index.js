module.exports = 
function toReadable (number) {

    const readable = {
      hundred: "",
      ten: "",
      one: "",
      result: "",
    }
    const readOne = function(n){
        switch(n){
            case "1": return "one"; break;
            case "2": return "two"; break;
            case "3": return "three"; break;
            case "4": return "four"; break;
            case "5": return "five"; break;
            case "6": return "six"; break;
            case "7": return "seven"; break;
            case "8": return "eight"; break;
            case "9": return "nine"; break;
            
            default:"";
        }
    } 
    const readHundred = n => `${readOne(n)} hundred `;
    const readTen = function(n){
        switch(n){
            case "10": return "ten"; break;
            case "11": return "eleven"; break;
            case "12": return "twelve"; break;
            case "13": return "thirteen"; break;
            case "14": return "fourteen"; break;
            case "15": return "fifteen"; break;
            case "16": return "sixteen"; break;
            case "17": return "seventeen"; break;
            case "18": return "eighteen"; break;
            case "19": return "nineteen"; break;
            case "2": return "twenty"; break;
            case "3": return "thirty"; break;
            case "4": return "forty"; break;
            case "5": return "fifty"; break;
            case "6": return "sixty"; break;
            case "7": return "seventy"; break;
            case "8": return "eighty"; break;
            case "9": return "ninety"; break;
        
            default:"";
        }
    }
  
    
    const numberArray = number.toString().slice('');
    if(numberArray.length === 3){
      readable.hundred = readHundred(numberArray[0]);
      if(numberArray[1]=== "1"){
        readable.ten = readTen(numberArray[1].toString() + numberArray[2].toString());
      } else if(numberArray[2] !== 0) {
        readable.ten = readTen(numberArray[1]);
          readable.one = readOne(numberArray[2]);
        }
    }
    if(numberArray.length === 2){
      if(numberArray[0]=== "1"){
        readable.ten = readTen(numberArray[0].toString() + numberArray[1].toString());
      } else if(numberArray[1] !== 0) {
        readable.ten = readTen(numberArray[0]);
          readable.one = readOne(numberArray[1]);
        }
    }
    if (numberArray.length === 1){
        readable.one = numberArray[0]=== "0" ? "zero" : readOne(numberArray[0]); 
    }
  
      readable.result += readable.hundred ? `${readable.hundred} `  : '';
      readable.result += readable.ten ? `${readable.ten} ` : '';
      readable.result += readable.one ? `${readable.one} ` : '';
  
  return readable.result.replace(/ +/g, ' ').trim();
    
  }
