import React from 'react';
import { shallow } from 'enzyme';
import PersonList from '../src/PersonList';
import App from '../src/App';

describe('person list', () => {

    it('should render people', () => {
        const expected = [
            { firstName: 'Alan', lastName: 'Ladd'},
            { firstName: 'Brad', lastName: 'Pitt'},
            { firstName: 'Angelina', lastName: 'Jolie'}
        ];
        const onEdit = jest.fn()


        const div = document.createElement('div');
        const personList = shallow(<PersonList people={expected} editPerson={onEdit} />, div);
        const actual = personList.find('li');
        expect(actual).toHaveLength(3);
    });

    it('has clickable people', () => {
        const people = [
            { firstName: 'Alan', lastName: 'Ladd'}
        ]
        const div = document.createElement('div');
        const onEdit = jest.fn()
        const app = shallow(<App />, div);
        const personList = shallow(<PersonList people={people} editPerson={onEdit} />, div);


        expect(personList.find('a')).toHaveLength(1)
        personList.find('a').simulate('click')
        expect(onEdit).toHaveBeenCalledTimes(1)
    })


})
