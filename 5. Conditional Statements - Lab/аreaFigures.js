function аreaFigures(input) {

    let type = input[0];
    let a = Number(input[1]);
    let area = 0; 

    if (type === "square") {
        area = a * a;
    } else if(type === "rectangle") {
        let b = Number(input[2]);
        area = a * b;
    } else if (type === "circle") {
        area = Math.PI * Math.pow(a,2);
    } else {
        let h = Number(input[2]);
        area = a * h / 2;
    }
    
    console.log(area.toFixed(3));
}

аreaFigures(["triangle", "4.5", "20"]) 