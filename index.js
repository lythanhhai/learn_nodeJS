var rect = {
    a:0,
    perimeter: (x,y) => {return 2*(x+y);},
    area: (x,y) => {return (x*y);},
}

const solveRec = (l,b) => {
    console.log("2 canh la " + l + " va " + b);
    if(l <= 0 || b <=0)
    {
        console.log("khong hop le");
    }

    else 
    {
        console.log("chu vi la: " + rect.perimeter(l,b));
        console.log("dien tich la: " + rect.area(l,b));
    }
}

solveRec(1,2);