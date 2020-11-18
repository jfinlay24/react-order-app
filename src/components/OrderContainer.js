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
            toppings: {
                one: 'Chicken',
                two: 'BBQ-Sauce',
                three: 'Peppers',
                four: 'Onions'
            },
        },
        {
            id: 2,
            title: "Meat Feast",
            toppings: {
                one: 'Pepperoni',
                two: 'ham',
                three: 'ground beef',
                four: 'sausage',
                five: 'onions',
                six: 'mushrooms'
            },
        },
        {
            id: 3,
            title: "The Sizzler",
            toppings: {
                one: 'Sundried',
                two: 'tomato and garlic sauce',
                three: 'pepperoni',
                four: 'tandoori chicken',
                five: 'onions',
                six: 'jalapeño peppers',
                seven: 'herbs'
            },
        }
    ]
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [onPizzaChoice, setPizzaChoice] = React.useState("");

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
            <DisplayOrderFields
                fullname={`${firstName} ${lastName}`}
                selectedPizza={onPizzaChoice}
            />
        </div>
    );
}
export default OrderContainer