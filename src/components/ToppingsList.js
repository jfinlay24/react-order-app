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