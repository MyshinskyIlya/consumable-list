import React, { useState } from "react";
import { CostForm } from "./CostForm";
import styles from "../../styles/NewCostStyles/NewCost.module.css";

export const NewCost = ({ addNewCost }) => {
    const [isButton, setIsButton] = useState(false);

    return (
        <div className={styles["new-cost"]}>
            {isButton ? (
                <CostForm
                    setIsButton={setIsButton}
                    addNewCost={addNewCost}
                ></CostForm>
            ) : (
                <button
                    style={{ margin: "auto", fontSize: "1.2rem" }}
                    onClick={() => setIsButton(true)}
                >
                    Добавить новый расход
                </button>
            )}
        </div>
    );
};
