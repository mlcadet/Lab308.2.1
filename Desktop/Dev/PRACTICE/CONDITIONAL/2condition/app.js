//Calculate the area of the circle

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
    console.log(area);
    console.log('The area of the plant is:' +  PI * radius * radius);

    let space = 0.8;
    let plants = 100;
    let week = 10;
    let newArea = plants * space * 2 *  week;
    console.log(newArea);
    console.log('The area of the new area:' +  plants * space * 2 *  week);
    
    try{
        if(newArea < area){
        console.log("You can add more plant");
        } else if (newArea == area){
            console.log("You have the exact amount plants");
        } else{
            throw("TOO MANY PLANTS")
        }
    } catch(error){
        console.log(error);
    }
    