const userDividenGoal = null;

const getDividendUserGoal = () => {
    if (userDividenGoal == null) {
        null;
    } else {
        userDividenGoal;
    }
};

const setDividendUserGoal = (dividendGoal) => {
    if (userDividenGoal == null) {
        userDividenGoal = dividendGoal;
    }
};

export default {
    getDividendUserGoal,
    setDividendUserGoal,
};
