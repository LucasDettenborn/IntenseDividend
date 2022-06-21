import { useState } from 'react';

const [userDividenGoal, setUserDividenGoal] = useState(null);

const getDividendUserGoal = (dividendGoal) => {
    if (userDividenGoal == null) {
        setUserDividenGoal(dividendGoal);
    } else {
        userDividenGoal;
    }
};

export default {
    getDividendUserGoal,
};
