import React from "react"

class PizzaChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Select a pizza",
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //alert("Your pizza choice is: " + this.state.value);
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick a pizza:
                    <select value={this.state.value} onChange={this.handleChange}>
                            {this.props.menu.map(menu => (
                                <option key={menu.id} value={menu.title}>
                                    {menu.title}
                                </option>
                            ))}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h5>
                    Pizza Choice: {this.state.value}
                </h5>
            </div>


        )
    }
}

export default PizzaChoice