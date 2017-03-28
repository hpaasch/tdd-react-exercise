import React, { Component } from 'react';

export default class PersonList extends Component {

    get list() {
        return this.props.people.map((person, i) => <li key={i}>{person.firstName} {person.lastName} <a href="#" onClick={() => this.props.editPerson(person)}>edit</a></li>)
    }

    render () {
        return (
            <ul>
                {this.list}
            </ul>
        )
    }

}