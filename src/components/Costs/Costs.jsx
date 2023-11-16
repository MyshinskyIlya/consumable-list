import { useState } from "react";
import styles from "../../styles/CostsStyles/Costs.module.css";
import { Card } from "../../UI/Card/Card";
import { CostsFilter } from "../CostsFilter/CostsFilter";
import { CostItem } from "./CostItem";
import { CostDiagram } from "./CostDiagram";
import { CostTotalPrice } from "./CostTotalPrice";

export const Costs = ({ costs }) => {
    const [year, setYear] = useState("2023");

    const filterCosts = costs.filter(
        (i) => i.date.getFullYear().toString() === year
    );

    return (
        <div>
            <Card className={styles.costs}>
                <CostsFilter year={year} setYear={setYear}></CostsFilter>
                <CostDiagram filterCosts={filterCosts}></CostDiagram>
                {filterCosts.length ? (
                    filterCosts.map((cost) => (
                        <CostItem
                            key={Math.random()}
                            date={cost.date}
                            description={cost.description}
                            amount={cost.amount}
                        ></CostItem>
                    ))
                ) : (
                    <h2 style={{ color: "whitesmoke", textAlign: "center" }}>
                        Расходы не найдены
                    </h2>
                )}
                <CostTotalPrice filterCosts={filterCosts}></CostTotalPrice>
            </Card>
        </div>
    );
};
