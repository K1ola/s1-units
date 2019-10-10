import React from 'react';
import Order from './Order';
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {fakeOrders} from '../mock/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order component', () => {
//   it('render with empty state', () => {
//     const wrapper = shallow(<Order order={""}/>);
//     // wrapper.setProps({key: "", order: ""});
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });

  it('render with fakecomponent', () => {
    const wrapper = shallow(<Order key={0} order={fakeOrders[0]}/>);
    // wrapper.setProps({key: 0, order: fakeOrders[0]});
    expect(toJson(wrapper)).toMatchSnapshot();
   });

   it('check empty values', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]} />);
    wrapper.setProps({order: {}});
    expect(wrapper.find(".Order-items").children().length).toEqual(0);
  });
});
