import React, { useState } from "react";
import styles from "../../styles/NewCostStyles/CostForm.module.css";

export const CostForm = ({ addNewCost, setIsButton }) => {
    const [userInput, setUserInput] = useState({
        date: "",
        description: "",
        amount: "",
    });

    const descriptionChangeHandler = (e) =>
        setUserInput((prev) => {
            return { ...prev, description: e.target.value };
        });
    const amountChangeHandler = (e) =>
        setUserInput((prev) => {
            return { ...prev, amount: e.target.value };
        });

    const dateChangeHandler = (e) => {
        setUserInput((prev) => {
            return { ...prev, date: e.target.value };
        });
    };

    const addNewCostSubmit = (e) => {
        e.preventDefault();

        addNewCost({
            ...userInput,
            date: new Date(userInput.date),
            amount: +userInput.amount,
        });

        setUserInput({
            date: "",
            description: "",
            amount: "",
        });
    };

    return (
        <form onSubmit={addNewCostSubmit}>
            <div className={styles["new-cost__controls"]}>
                <div className={styles["new-cost__control"]}>
                    <label>Название</label>
                    <input
                        type="text"
                        value={userInput.description}
                        onChange={descriptionChangeHandler}
                    />
                </div>
                <div className={styles["new-cost__control"]}>
                    <label>Сумма</label>
                    <input
                        type="number"
                        value={userInput.amount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={styles["new-cost__control"]}>
                    <label>Дата</label>
                    <input
                        className={styles["new-cost__control_dateinput"]}
                        type="date"
                        onChange={dateChangeHandler}
                        value={userInput.date}
                    />
                </div>
                <div className={styles["new-cost__action"]}>
                    <button type="submit">Добавить расход</button>
                    <button onClick={() => setIsButton(false)}>Отмена</button>
                </div>
            </div>
        </form>
    );
};
