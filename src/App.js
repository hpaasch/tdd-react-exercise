import React, {Component} from 'react';
import './App.css';
import PersonList from './PersonList';
import PersonEdit from './PersonEdit';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [
                {firstName: 'Alan', lastName: 'Ladd'},
                {firstName: 'Brad', lastName: 'Pitt'},
                {firstName: 'Angelina', lastName: 'Jolie'}
            ],
            editing: null
        }

        this.onEdit = this.onEdit.bind(this)
    }

    onEdit(person) {
        // let that = this
        // this.state.editing = person
        // this.setState(this.state)
        this.setState({
            editing: person
        })
    }

    toggleEdit() {
        return <PersonEdit person={this.state.editing} />
    }

    render() {
        return (
            <div>
                <PersonList
                    people={this.state.people}
                    editPerson={this.onEdit}
                    />

                <PersonEdit person={this.state.editing} />

            </div>
        );
    }
}

