import React from "react";
import styles from "../../styles/CostsStyles/CostDate.module.css";

export const CostDate = ({ date }) => {
    return (
        <div className={styles["cost-date"]}>
            <div className={styles["const-date__month"]}>
                {date.toLocaleString("ru-RU", { month: "long" })}
            </div>
            <div className={styles["const-date__year"]}>
                {date.getFullYear()}
            </div>
            <div className={styles["const-date__day"]}>
                {date.toLocaleString("ru-RU", { day: "2-digit" })}
            </div>
        </div>
    );
};
