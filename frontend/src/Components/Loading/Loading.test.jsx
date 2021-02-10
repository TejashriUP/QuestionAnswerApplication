import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Loading from './Loading';

describe('Loading', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should render loading text', async () => {
    await act(async () => {
      render(<Loading />, container);
    });

    expect(container.querySelector('#loading').textContent).toBe('Loading...');
  });
});
