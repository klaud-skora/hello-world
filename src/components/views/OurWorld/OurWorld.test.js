import React from 'react';
import { shallow } from 'enzyme';
import { OurWorldComponent } from './OurWorld';

describe('Component OurWorld', () => {
  it('should render without crashing', () => {
    const component = shallow(<OurWorldComponent />);
    expect(component).toBeTruthy();
  });
});
