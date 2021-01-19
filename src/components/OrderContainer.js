import React from "react"

import PizzaChoice from "./PizzaChoice";
import Header from "./Header";
import NameInput from "./NameInput";
import DisplayOrderFields from "./DisplayOrderFields";

function OrderContainer() {
    const menu = [
        {
            id: 1,
            title: "Texas BBQ",
            description: "The Texas BBQ pizza comes with Tiger crust, and four toppings: \n - Chicken \n - BBQ-Sauce \n - Peppers \n - Onions"
        },
        {
            id: 2,
            title: "Meat Feast",
            description: "The Meat Feast pizza comes with Stuffed crust, and six toppings: \n - Pepperoni \n - Ham \n - Ground Beaf \n - Sausage \n - Onions \n - Mushrooms"
        },
        {
            id: 3,
            title: "The Sizzler",
            description: "The Sizzler pizza comes with Tiger crust, and seven toppings: \n - Sundried Tomoatos \n - Tomato and Garlic Sauce \n - Pepperoni \n - Tandoori Chicken \n - Onions \n - Jalapeño peppers \n - Herbs"
        }
    ]
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [onPizzaChoice, setPizzaChoice] = React.useState("");
    const menuDes = menu.filter(menuDes => menuDes.title === onPizzaChoice);
    console.log(menuDes[0]);

    return (
        <div class="main">
            <Header />
            <div class="orderInput">
                <NameInput
                    firstName={firstName}
                    onFirstNameChanged={setFirstName}
                    lastName={lastName}
                    onLastNameChanged={setLastName}
                />
                <PizzaChoice
                    menu={menu}
                    onPizzaChoice={onPizzaChoice}
                    onPizzaChoiceChange={setPizzaChoice}
                />
            </div>
            <div>
                menuDes1 = {menuDes.map(menuDes => <div>{menuDes.description}</div>)}
            </div>
            <DisplayOrderFields
                menu={menu}
                fullname={`${firstName} ${lastName}`}
                selectedPizza={onPizzaChoice}
                selectedDes = {menuDes.map(menuDes => <div>{menuDes.description}</div>)}
            />
        </div>
    );
}
export default OrderContainer