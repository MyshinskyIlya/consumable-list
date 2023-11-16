import styles from "../../styles/CostsStyles/CostItem.module.css";
import { CostDate } from "./CostDate";
import { Card } from "../../UI/Card/Card";

export const CostItem = ({ date, description, amount }) => {
    return (
        <Card className={styles["cost-item"]}>
            <CostDate date={date}></CostDate>
            <div className={styles["cost-item__description"]}>
                <h2>{description}</h2>
                <div className={styles["cost-item__price"]}>${amount}</div>
            </div>
        </Card>
    );
};
