import React from 'react';
import { shallow } from 'enzyme';
import { MapComponent } from './Map';

describe('Component Map', () => {
  it('should render without crashing', () => {
    const component = shallow(<MapComponent />);
    expect(component).toBeTruthy();
  });
});
