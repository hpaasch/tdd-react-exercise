import React from 'react';
import { shallow } from 'enzyme';
import PersonEdit from '../src/PersonEdit';

describe('person edit', () => {
    it('should exist', () => {
        const div = document.createElement('div');
        shallow(<PersonEdit />, div);
    })
})
