import React from "react"

class PizzaChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Select Pizza" };
    
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        alert("Your pizza choice is: " + this.state.value);
        event.preventDefault();
      }
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
    
    render() {
      return (
        // <div>
        //   {this.props.menu.map(menu => (
        //     <li key={menu.id}>{menu.title}</li>
        //   ))}
        // </div>
        <form onSubmit={this.handleSubmit}>
            <label>
            Pick a pizza:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="Small">Small</option>
                <option value="Plain">Plain</option>
                <option value="Pizza">Pizza</option>
                <option value="Please">Please</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
      
      
        )
    }
  }
  
  export default PizzaChoice