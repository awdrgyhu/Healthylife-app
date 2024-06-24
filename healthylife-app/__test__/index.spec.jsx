import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import AboutPage from '../app/about/page';



// Mock data
const mockGoals = [
  { code: '1', title: 'Goal 1' },
  { code: '2', title: 'Goal 2' },
  { code: '3', title: 'Goal 3' },
];
// jest.mock('next/router', () => require('next-router-mock'));
describe('AboutPage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders correctly and fetches goals', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockGoals));

    render(<AboutPage/>);

    // Check if the loading state or initial render is shown
   
    expect(screen.getByText('THE GOALS')).toBeInTheDocument();
    expect(screen.getByText('17 GOALS TO TRANSFORM OUR WORLD')).toBeInTheDocument();

  });
});



