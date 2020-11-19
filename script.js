//SOLUTION 1
function expandedForm(num){
    if(num.toString().includes(".")){
        let numString = num.toString();
        let numArray=numString.split(".");

        let expanded;
        expanded= expandedWholeNumber(numArray[0])

        let denominator="10";

        if(numArray[0] != 0){
            expanded += " + ";
        }

        for(i=0; i<numArray[1].length; i++){
            if(numArray[1][i] != 0){
                expanded += numArray[1][i] + "/" + denominator; //two dimensional array
                if(i<numArray[1].length-1){
                    expanded += " + ";
                }
            }
            denominator += "0";
        }

        console.log(expanded); 
    }
    else{
        console.log(expandedWholeNumber(num));
    }
}

//SOLUTION 4 from week 5
function expandedWholeNumber(num){
    let string = num.toString().split("").reverse().map((a,i) => a * Math.pow(10, i)).filter(a=> a > 0).reverse().join(" + ");
    return string;
}

expandedForm(1.24); // should return '1 + 2/10 + 4/100'
expandedForm(77.304); // should return '7 + 3/10 + 4/1000'
expandedForm(0.04); // should return '4/100'
expandedForm(4);

//SOLUTION 2
function expandedForm2(num){
    const parts=num
        .toString()
        .split(".");
        console.log(parts[0]
        .split('')
        .reverse()
        .map((x,i) => x * Math.pow(10, i))
        .filter((x) => x)
        .reverse()
        .concat(
            parts[1]
            .split('')
            .map((x,i) => x !== "0" ? x + "/" + Math.pow(10,i+1) : "")
            .filter((x) => x) 
        )
        .join(" + "));
    
}

expandedForm2(1.24); // should return '1 + 2/10 + 4/100'
expandedForm2(77.304); // should return '7 + 3/10 + 4/1000'
expandedForm2(0.04); // should return '4/100'