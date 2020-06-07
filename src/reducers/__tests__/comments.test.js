import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

describe('commentsReducer', () => {
  it('handles action with the type of saveComment', () => {
    const comment = 'new comment';

    const result = commentsReducer([], {
      type: SAVE_COMMENT,
      payload: comment,
    });

    expect(result).toEqual([comment]);
  });

  it('handles action of unknown type', () => {
    const result = commentsReducer([], {
      type: 'updateComment',
    });

    expect(result).toEqual([]);
  });
});
