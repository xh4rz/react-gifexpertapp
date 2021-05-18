import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el <GifExpertApp/>', () => {
	// const category = 'One Punch';
	test('debe de mostrarse el componente', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar una lista de categorias', () => {
		const categories = ['One Punch', 'Dragon Ball'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
