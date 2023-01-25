function circleAreaPerimeter(params) {
    let r = Number(params[0]);
    let s = Math.PI * Math.pow(r, 2);
    console.log(s.toFixed(2));

    let p = 2 * Math.PI * r;
    console.log(p.toFixed(2));
}
circleAreaPerimeter(["3"])