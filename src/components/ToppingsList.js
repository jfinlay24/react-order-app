import React from "react"

import PizzaChoice from "./PizzaChoice";
import Header from "./Header";
import NameInput from "./NameInput";


class ToppingsList extends React.Component {
  state = {
    menu: [
      {
        id: 1,
        title: "Texas BBQ",
        description: "The Texas BBQ pizza comes with Tiger crust, and four toppings\: \n \- Chicken \n \- BBQ-Sauce \n \- Peppers \n \- Onions"
      },
      {
        id: 2,
        title: "Meat Feast",
        description: "The Meat Feast pizza comes with Stuffed crust, and six toppings\: \n \- Pepperoni \n \- Ham \n \- Ground Beaf \n \- Sausage \n \- Onions \n \- Mushrooms"
      },
      {
        id: 3,
        title: "The Sizzler",
        description: "The Sizzler pizza comes with Tiger crust, and seven toppings\: \n \- Sundried Tomoatos \n \- Tomato and Garlic Sauce \n \- Pepperoni \n \- Tandoori Chicken \n \- Onions \n \- Jalapeño peppers \n \- Herbs"
      }
    ]
  };
  render() {
    return (
      <div>
        <NameInput />
        <Header />
        <PizzaChoice menu={this.state.menu} />
      </div>
    );
  }
}
export default ToppingsList