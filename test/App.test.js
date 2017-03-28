import React from 'react';
import App from '../src/App';
import PersonList from '../src/PersonList';
import PersonEdit from '../src/PersonEdit';
import { shallow } from 'enzyme';

describe('app', () => {

    it('has state', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);
        expect(app.state().people).toHaveLength(3);
    });

    it('passes people to state', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);
        const personList = app.find(PersonList.name);
        expect(personList.props().people).toHaveLength(3);
    });

    it('switches to PersonEdit when onEdit is called', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);
        expect(app.state().editing).toEqual(null)
        const person = app.state().people[0]
        const personList = app.find(PersonList.name);

        app.node._self.onEdit(person)
        expect(app.state().editing).toEqual(person)
    })

    it('should render a person to be edited', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);
        app.node._self.onEdit(app.state().people[0]);
        const personEdit = app.find(PersonEdit.name);

        expect(app.state().editing).toBe(app.state().people[0])
        expect(personEdit.props().person).toBe(app.state().people[0])
    })
})
