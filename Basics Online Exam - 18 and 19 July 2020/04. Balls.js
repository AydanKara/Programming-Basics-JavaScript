function balls(params) {
    let n = Number(params[0]);
    let index = 1;
    let color = "";
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let other = 0;
    let divide = 0;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        color = params[index];
        index++;
        switch (color) {
            case "red": red++; total += 5; break;
            case "orange": orange++; total += 10; break;
            case "yellow": yellow++; total += 15; break;
            case "white": white++; total += 20; break;
            case "black": divide++; total /= 2; break;
            default: other++; continue;
        }
    }
    console.log(`Total points: ${Math.floor(total)}`)
    console.log(`Red balls: ${red}`)
    console.log(`Orange balls: ${orange}`)
    console.log(`Yellow balls: ${yellow}`)
    console.log(`White balls: ${white}`)
    console.log(`Other colors picked: ${other}`)
    console.log(`Divides from black balls: ${divide}`)
}
balls([
"3", 
"white", 
"black", 
"pink"]) 