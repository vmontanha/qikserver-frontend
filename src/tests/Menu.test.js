import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { fetchRestaurantData, fetchMenuData } from '../services/api';
import Menu from '../components/Menu/Menu';
import '@testing-library/react';

jest.mock('../services/api');

describe('Menu component', () => {
  const mockRestaurantData = {
    id: 1,
    name: 'Mock Restaurant',
    webSettings: {
      bannerImage: 'mock-banner.jpg',
    },
    address1: 'Mock Street',
    city: 'Mock City',
    country: 'Mock Country',
    ccySymbol: '$',
  };

  const mockMenuData = {
    sections: [
      {
        id: 1,
        name: 'Mock Section',
        items: [
          {
            id: 1,
            name: 'Mock Item',
            description: 'Mock description',
            price: 10.99,
            images: [{ id: 1, image: 'mock-item.jpg' }],
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    fetchRestaurantData.mockResolvedValue(mockRestaurantData);
    fetchMenuData.mockResolvedValue(mockMenuData);
  });

  it('renders menu component with data', async () => {
    render(<Menu />);

    await waitFor(() => {
      expect(screen.getByAltText('Mock Restaurant')).toBeInTheDocument();
    });
  });
});
