import { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = (props) => {
    const { onAddIncome } = props;
    const [income, setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
        description: "",
    });

    const handleChange = (key, value) => setIncome({ ...income, [key]: value });

    return (
        <div>
            <EmojiPickerPopup
                icon={income.icon}
                onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
            />
            <Input
                value={income.source}
                onChange={(e) => handleChange("source", e.target.value)}
                label="Income Source"
                placeholder="Freelance, Salary, etc."
                type="text"
            />
            <Input
                value={income.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                label="Amount"
                placeholder="Enter amount"
                type="number"
            />
            <Input
                value={income.date}
                onChange={(e) => handleChange("date", e.target.value)}
                label="Date"
                placeholder="YYYY-MM-DD"
                type="date"
            />
            <Input
                value={income.description}
                onChange={(e) => handleChange("description", e.target.value)}
                label="Description"
                placeholder="Optional description"
                type="text"
            />
            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    className="add-btn primary-btn-fill"
                    onClick={() => {
                        onAddIncome(income)
                        setIncome({ source: "", amount: "", date: "", icon: "", description: "" });
                    }}
                >
                    Add Income
                </button>
            </div>
        </div>
    )
};

export default AddIncomeForm;