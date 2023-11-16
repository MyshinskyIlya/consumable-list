import React from "react";
import styles from "../../styles/DiagramStyles/DiagramBar.module.css";

export const DiagramBar = ({ value, maxValue, label }) => {
    let barFillHeigh = "0%";

    if (maxValue > 0) {
        barFillHeigh = Math.round((value / maxValue) * 100) + "%";
    }

    return (
        <div className={styles["diagram-bar"]}>
            <div className={styles["diagram-bar__inner"]}>
                <div
                    className={styles["diagram-bar__fill"]}
                    style={{ height: barFillHeigh }}
                ></div>
            </div>
            <div className={styles["diagram-bar__label"]}>{label}</div>
        </div>
    );
};
