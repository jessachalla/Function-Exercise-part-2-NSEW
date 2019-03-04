(function(){
    
    //initial position and direction
    let positionN = 0;
    let positionE = 0;
    let direction = "N";

    //moveForward:takes a distance parameter.
    //Move the character forward
    //(basedonthe direction they are facing)
    //the specified distance.
    function moveForward(distance) {
        if (direction === "N") {
            positionN = positionN + distance;
        } else if (direction === "E") {
            positionE = positionE + distance;
        } else if (direction === "S") {
            positionN = positionN - distance;
        } else if (direction === "W") {
            positionE = positionE - distance;
        }
        console.log(`Your position is ${positionN} steps N and ${positionE} steps E. You moved ${direction}.`);
        return(distance)
    }

    //moveBackward:takes a distance parameter.
    //Move the character backward
    //(based on the direction they are facing) 
    //the specified distance.
    function moveBackward(distance) {
        if (direction === "N") {
            positionN = positionN - distance;
        } else if (direction === "E") {
            positionE = positionE - distance;
        } else if (direction === "S") {
            positionN = positionN + distance;
        } else if (direction === "W") {
            positionE = positionE + distance;
        }
        console.log(`Your position is ${positionN} steps N and ${positionE} steps E. You moved ${direction}.`);
    }

    //turnRight:change the direction by 90 degrees to the right.
    function turnRight() {
        if (direction === "N") {
            direction = "E";
        }
        else if (direction === "E") {
            direction = "S";
        }
        else if (direction === "S") {
            direction = "W"
        }
        else if (direction === "W") {
            direction = "N";
        }
    }

    //turnLeft:change the direction by 90 degrees to the left.
    function turnLeft() {
        if (direction === "N") {
            direction = "E";
        }
        else if (direction === "E") {
            direction = "S";
        }
        else if (direction === "S") {
            direction = "W";
        }
        else if (direction === "W") {
            direction = "N";
        }
    }

    //printLocation:logs the current position (N and E) to the console.
    function printLocation() {
    console.log(`Print Location: Over all, you moved North ${positionN} steps and East ${positionE} steps.`);
    }

    moveForward(5);
    turnRight();
    moveForward(2);
    printLocation();
    turnLeft();
    turnLeft();
    moveForward(7);
    turnRight();
    moveBackward(3);
    printLocation();

})();