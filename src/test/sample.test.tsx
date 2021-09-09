import React from 'react';
import { render, screen } from '@testing-library/react'
import TopList from "../tsx/views/pages/top/TopList"

describe('sample test', () => {
  test('renders App component', () => {
    render(<TopList />)
    screen.debug();
  });
});
