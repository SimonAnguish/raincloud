import React, { Component } from 'react'
import List from './List'
import Form from './Form'
import './App.scss'

class App extends Component {
    state = {
        cards: [],
    }

    removeCard = index => {
        const { cards } = this.state

        this.setState({
            cards: cards.filter((cards, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = card => {
        this.setState({
            cards: [...this.state.cards, card]
        })
    }

    render() {
        const { cards } = this.state

        return (
            <div className="App">
                <List cardData={cards} removeCard={this.removeCard} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App