import React, { Component } from 'react';

export default class PersonEdit extends Component {

    get editingPerson() {
        return this.props.person
    }

    render () {
        return (
            <div>
                {/*<form>*/}
                    {/*<label htmlFor="firstName">First Name</label>*/}
                    {/*<input name="firstName" type="text" defaultValue={this.editingPerson.firstName} />*/}
                    {/*<label htmlFor="lastName">Last Name</label>*/}
                    {/*<input name="lastName" type="text" defaultValue={this.editingPerson.lastName} />*/}
                    {/*<input type="submit"/>*/}
                {/*</form>*/}
            </div>
        )
    }
}