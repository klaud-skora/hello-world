import React from 'react';
import { shallow } from 'enzyme';
import { EuropeComponent } from './Europe';

describe('Component Europe', () => {
  it('should render without crashing', () => {
    const component = shallow(<EuropeComponent />);
    expect(component).toBeTruthy();
  });
});
