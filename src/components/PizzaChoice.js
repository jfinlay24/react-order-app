import React from "react"

class PizzaChoice extends React.Component {
    render() {
      return (
        /*<div>
          {this.props.menu.map(menu => (
            <li key={menu.id}>{menu.title}</li>
          ))}
        </div>*/
        <label>
        Pick your favorite car brand:
        <select
          name="pizzaDropdownChoice"
          value={state.pizzaDropdownChoice}
          onChange={handleChange}
        >
          <option value="pizzaType">
            {this.props.menu.map(menu => (
                <li key={menu.id}>{menu.title}</li>
            ))}
          </option>
        </select>
      </label>
      )
    }
  }
  
  export default PizzaChoice