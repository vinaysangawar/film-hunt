import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../header-component'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
    }

    const enzymeWrapper = shallow(<Header {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Header', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()
            expect(enzymeWrapper.find('h1').text()).toBe('Film Hunt')
            expect(enzymeWrapper.find('p').text()).toContain('Hunt for your next film to watch!')
        })
    })
})