import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import { StyledButton } from '../components/Button/styles'
import Button from '../components/Button'

// Jest styled components to help facilitate testing of component styling
// when using css in JS library styled components
import 'jest-styled-components'

describe('Button', () => {

  it('React component matches snapshot', () => {

    // Import React component to test features that is not related to styling
    const reactComponent = mount(<Button />)
    expect(toJson(reactComponent)).toMatchSnapshot()
  })

  // Import styled component to test features that is related to styling
  it('Styled component matches snapshot', () => {
    const styles = shallow(<StyledButton />)
    expect(toJson(styles)).toMatchSnapshot()
  })
})