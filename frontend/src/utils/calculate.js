export function calculateBike(distance, engine) {
    if (engine === 'small') {
        return distance * 0.08277;
    } else if (engine === 'medium') {
        return distance * 0.10086;
    } else if (engine === 'large') {
        return distance * 0.13237;
    } else {
        return distance * 0.11337;
    }
}

export function calculatePetrolCar(distance, engine) {
    if (engine === 'small') {
        return distance * 1.2 * 120;
    } else if (engine === 'medium') {
        return distance * 1.2 * 150;
    } else if (engine === 'large') {
        return distance * 1.2 * 180;
    }
}

export function calculateDieselCar(distance, engine) {
    if (engine === 'small') {
        return distance * 1.2 * 90;
    } else if (engine === 'medium') {
        return distance * 1.2 * 120;
    } else if (engine === 'large') {
        return distance * 1.2 * 150;
    }
}

