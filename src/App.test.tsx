import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
  }

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      const { enzymeWrapper } = setup()
    })
  })
})