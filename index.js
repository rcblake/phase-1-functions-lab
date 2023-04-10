
function distanceFromHqInBlocks (destinationBlock) {
    return destinationBlock > 42 ? destinationBlock - 42 : 42 - destinationBlock
}

function distanceFromHqInFeet (destinationBlock) {
    return distanceFromHqInBlocks(destinationBlock)*264
}

function distanceTravelledInFeet (start,destination) {
    return destination > start ? (destination - start)*264 : (start - destination)*264
}

function calculatesFarePrice (start,destination) {
    if (distanceTravelledInFeet (start,destination) < 400 ) {
        return 0 }
        else if (distanceTravelledInFeet (start,destination) < 2001) {
           return ((distanceTravelledInFeet (start,destination)-400)*.02)
        }
            else if (distanceTravelledInFeet (start,destination) <2501) {
              return  25
            }
                else { 
                    return `cannot travel that far`}
}
