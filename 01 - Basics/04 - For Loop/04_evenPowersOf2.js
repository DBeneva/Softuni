function evenPowersOf2(num) {
    num = Number(num);
    
    for (let i = 0; i <= num; i += 2) {
        console.log(Math.pow(2, i)); // or 2 ** i        
    }
}

evenPowersOf2(6);