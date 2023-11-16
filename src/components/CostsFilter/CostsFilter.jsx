import React from "react";
import styles from "../../styles/CostsFilterStyles/CostsFilterStyles.module.css";

export const CostsFilter = ({ setYear, year }) => {
    const yearChangeHandler = (e) => {
        setYear(e.target.value);
    };

    return (
        <div>
            <div className={styles["costs-filter"]}>
                <div className={styles["costs-filter_n_control"]}>
                    <label>Выбор по году</label>
                    <select value={year} onChange={yearChangeHandler}>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
