import React from "react"

function PizzaChoice({ menu, onPizzaChoice, onPizzaChoiceChange }) {

    return (
        <div>
            <div>
                <select 
                value={onPizzaChoice} 
                onChange={(e) => onPizzaChoiceChange(e.target.value)}>
                    {menu.map(menu => (
                        <option key={menu.id} value={menu.title}>
                            {menu.title}
                        </option>
                    ))}
               </select>
            </div>
        </div>
    )
}

export default PizzaChoice