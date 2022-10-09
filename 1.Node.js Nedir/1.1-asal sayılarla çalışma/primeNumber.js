const parameters= process.argv.slice(2) //parametreleri terminalden aldık. 

function showPrimeNumber (lowNumber, highNumber) {
    for(let i=lowNumber; i<=highNumber; i++){
        let isPrime=true;
        for(let j=2;j<=i;j++){
            if(i%j===0 &&  j !==i ){
                isPrime=false;
            }
        }
        if(isPrime) console.log(i);
    }
}

showPrimeNumber(parameters[0]*1,parameters[1]*1) ;//aldıgımız parametreleri int dönüştürmek için 1 ile çarptık
// artık terminale 'node showPrimeNumber 1 20' seklinde parametre girerek çalıştırabiliriz.