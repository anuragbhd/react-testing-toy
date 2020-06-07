import { SAVE_COMMENT } from '../types';
import * as actions from '../index';

describe('saveComment action', () => {
  it('returns the correct type', () => {
    const action = actions.saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('returns the correct payload', () => {
    const action = actions.saveComment('New comment');
    expect(action.payload).toEqual('New comment');
  });
});
