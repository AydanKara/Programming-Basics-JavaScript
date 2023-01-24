function barcodeGenerator(params) {
    let first = Number(params[0]); 
    let second = Number(params[1]);              
    let printLine = "";
    let i = first / 10 % 10
    for (let d1 = Math.floor(first / 1000); d1 <= Math.floor(second / 1000); d1++) {
        if (d1 % 2 == 0) {
            continue;
        }
        for (let d2 = Math.floor(first / 100 % 10); d2 <= Math.floor(second / 100 % 10); d2++) {
            if (d2 % 2 == 0) {
                continue;
            }
            for (let d3 = Math.floor(first / 10 % 10); d3 <= Math.floor(second / 10 % 10); d3++) {
                if (d3 % 2 == 0) {
                    continue;
                }
                for (let d4 = (first % 10); d4 <= second % 10; d4++) {
                    if (d4 % 2 == 0) {
                        continue;
                    }
                    printLine += `${d1}${d2}${d3}${d4} `;  
                }
            }
        }
    }
    console.log(printLine);
}
barcodeGenerator(["2345", "6789"]) 

