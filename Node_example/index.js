var rect = {
    a:0,
    perimeter: (x,y) => {return 2*(x+y);},
    area: (x,y) => {return (x*y);},
}

const reactangle = require("./rectangle.js");

const solveRec = (l,b) => {
    console.log("2 canh la " + l + " va " + b);
    
    reactangle(l,b, (err,reactangle1) => {
        if(err)
        {
            console.log(err.message);
        }
        else 
        {
            console.log(reactangle1.perimeter(l,b));
            console.log(reactangle1.area(l,b));
        }
    })
}

solveRec(1,2);