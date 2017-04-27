import {renderComponent, expect} from '../test_helper';
import CommnentBox from '../../src/components/comment_box';

describe('Comment box', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommnentBox);
	});

	it('has a text area', () => {
		expect(component.find('textarea')).to.exits;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exits;
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});

	describe("entering some text", () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new commnet');
		});

		it('shows text that in the textarea', () => {
			expect(component.find('textarea')).to.have.value('new commnet');
		});

		it("when submitted, clear the input", () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});

});