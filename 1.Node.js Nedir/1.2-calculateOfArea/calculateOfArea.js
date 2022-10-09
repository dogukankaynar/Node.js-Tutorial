const radius = process.argv.splice(2);

function calculateCircle (r){
    let circleArea= 3*(r*r)
    console.log(circleArea);
}

calculateCircle(radius[0]*1);