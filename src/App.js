import { useState } from "react";
import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

function App() {
    const [costs, setCosts] = useState([
        {
            date: new Date(2023, 3, 17),
            description: "Тостер",
            amount: 199.99,
        },
        {
            date: new Date(2023, 2, 12),
            description: "Холодильник",
            amount: 999.99,
        },
        {
            date: new Date(2023, 1, 3),
            description: "Микроволновка",
            amount: 499.99,
        },
    ]);

    const addNewCost = (newCost) => {
        setCosts((prev) => [newCost, ...prev]);
    };

    return (
        <div>
            <NewCost addNewCost={addNewCost}></NewCost>
            <Costs costs={costs}></Costs>
        </div>
    );
}

export default App;
