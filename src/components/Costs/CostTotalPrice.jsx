import React from "react";
import styles from "../../styles/CostsStyles/CostTotalPrice.module.css";
import { Card } from "../../UI/Card/Card";

export const CostTotalPrice = ({ filterCosts }) => {
    let totalYearsCosts = filterCosts.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    return (
        <Card className={styles.total}>
            <div>Расходы за год</div>
            <div>{"$" + totalYearsCosts.toFixed(2)}</div>
        </Card>
    );
};
