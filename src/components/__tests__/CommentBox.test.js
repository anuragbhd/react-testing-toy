import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('CommentBox', () => {
  it('shows a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  describe('textarea', () => {
    const comment = 'hello, how are you';

    beforeEach(() => {
      const mockChangeEventObj = { target: { value: comment } };
      wrapped.find('textarea').simulate('change', mockChangeEventObj);
      wrapped.update(); // re-render the component as setState, being async, might not have finished yet
    });

    it('allows user to enter a comment', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual(comment);
    });

    it('is emptied on form submit', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });
});
