function pointRectangleBorder(params) {
    let x1 = Number(params[0]);
    let y1 = Number(params[1]);
    let x2 = Number(params[2]);
    let y2 = Number(params[3]);
    let x = Number(params[4]);
    let y = Number(params[5]);

    if ((x == x1 || x == x2) && (y >= y1 && y <= y2) && (y == y1 || y == y2) && (x >= x1 && x <= x2)) {
                console.log("Border");
            }
            else if (x > x1 && x < x2 && y > y1 && y < y2 && x < x1 && x > x2 && y < y1 && y > y2) {
                console.log("Inside / Outside");
            }
            else {
                console.log("Inside / Outside");
            }
}
pointRectangleBorder(["2", "-3", "12", "3", "8", "-1"])

/*
   if ((x == x1 || x == x2) && (y >= y1 && y <= y2))
            {
                Console.WriteLine("Border");
            }
            else if ((y == y1 || y == y2) && (x >= x1 && x <= x2))
            {
                Console.WriteLine("Border");
            }
            else if (x > x1 && x < x2 && y > y1 && y < y2)
            {
                Console.WriteLine("Inside / Outside");
            }
            else if (x < x1 && x > x2 && y < y1 && y > y2)
            {
                Console.WriteLine("Inside / Outside");
            }
            else
            {
                Console.WriteLine("Inside / Outside");
            }
x съвпада с x1 или x2 и същевременно y е между y1 и y2 

y съвпада с y1 или y2 и същевременно x е между x1 и x2 
*/