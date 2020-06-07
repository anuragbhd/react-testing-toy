import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import CommentList from '../CommentList';

let wrapped;
let comments = ['Comment 1', 'Comment 2'];

beforeEach(() => {
  wrapped = mount(
    <Root initialState={{ comments }}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('CommentList', () => {
  it('creates one <li> per comment', () => {
    expect(wrapped.find('li')).toHaveLength(comments.length);
  });

  it('displays text for each comment', () => {
    expect(wrapped.render().text()).toContain(comments[0]);
    expect(wrapped.render().text()).toContain(comments[1]);
  });
});
