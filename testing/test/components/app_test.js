
import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('renders something', () => {
		expect(component.find('.comment-box')).to.exits;
	});

	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exits;
	})
});