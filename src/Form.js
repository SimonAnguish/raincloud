import React, { Component } from 'react'
import './Form.scss'

class Form extends Component {
    initialState = {
        name: '',
        genus: '',
        species: '',
        watering: '',
    }

    state = this.initialState

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, genus, species, watering } = this.state

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="genus">Genus</label>
                <input
                    type="text"
                    name="genus"
                    id="genus"
                    value={genus}
                    onChange={this.handleChange} />
                <label htmlFor="species">Species</label>
                <input
                    type="text"
                    name="species"
                    id="species"
                    value={species}
                    onChange={this.handleChange} />
                <label htmlFor="watering">Water me every</label>
                <input
                        type="text"
                        name="watering"
                        id="watering"
                        value={watering}
                        onChange={this.handleChange} />
                <button type="submit" value="Submit" onClick={this.submitForm}>Save</button>
            </form>
        )
    }
}

export default Form