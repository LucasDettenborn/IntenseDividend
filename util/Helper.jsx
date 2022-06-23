const dividendYieldConvertWeight = (dy) => {
    dy = parseFloat(dy);
    console.log(dy);
    if (dy != null && dy != undefined) {
        if (dy <= 2) return 1;
        else if (dy > 2 && dy <= 3.5) return 2;
        else if (dy > 3.5 && dy <= 5.5) return 3;
        else if (dy > 5.5 && dy <= 7) return 4;
        else return 5;
    } else {
        return -1;
    }
};

const payOutConvertWeight = (py) => {
    py = parseInt(py);
    console.log(py);
    if (py != null && py != undefined) {
        if (py <= 55) return 5;
        else if (py > 55 && py <= 65) return 4;
        else if (py > 65 && py <= 75) return 3;
        else if (py > 75 && py <= 85) return 2;
        else return 1;
    } else {
        return -1;
    }
};

const dividendValuationConvertWeight = (dv) => {
    dv = parseFloat(dv);
    console.log(dv);
    if (dv != null && dv != undefined) {
        if (dv <= -5 && dv <= -2) return 1;
        else if (dv > -2 && dv <= -1) return 2;
        else if (dv > -1 && dv <= 0) return 3;
        else if (dv > 0 && dv <= 2) return 4;
        else return 5;
    } else {
        return -1;
    }
};

export default {
    dividendYieldConvertWeight,
    payOutConvertWeight,
    dividendValuationConvertWeight,
};
