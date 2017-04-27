import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comment';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comment reducers', () => {
	it('handles action with unknown type', () => {
		//expect(commentReducer()).to.be.instanceof(Array);
		expect(commentReducer(undefined, {})).to.eql([]); 
	});

	it('handles action of type SAVE_COMMENT', () => {
 		const action = {
 			type: SAVE_COMMENT,
 			payload: 'new comment'
 		};

 		expect(commentReducer([], action));
	});
})
