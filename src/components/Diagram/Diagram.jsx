import React from "react";
import styles from "../../styles/DiagramStyles/Diagram.module.css";
import { DiagramBar } from "./DiagramBar";

export const Diagram = ({ dataSets }) => {
    const dataSetsValues = dataSets.map((data) => data.value);

    const maxMonthValue = Math.max(...dataSetsValues);

    return (
        <div className={styles.diagram}>
            {dataSets.map((dataSet) => (
                <DiagramBar
                    key={dataSet.label}
                    value={dataSet.value}
                    maxValue={maxMonthValue}
                    label={dataSet.label}
                ></DiagramBar>
            ))}
        </div>
    );
};
