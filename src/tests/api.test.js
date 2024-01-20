import axios from 'axios';
import { fetchRestaurantData, fetchMenuData } from '../services/api';

jest.mock('axios');

describe('API functions', () => {
  it('fetches restaurant data successfully', async () => {
    const mockData = { id: 1, name: 'Mock Restaurant' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchRestaurantData();

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://frontend-challenge.free.beeceptor.com/venue/9');
  });

  it('fetches menu data successfully', async () => {
    const mockData = { id: 1, name: 'Mock Menu' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchMenuData();

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://frontend-challenge.free.beeceptor.com/menu');
  });

  it('fetches erroneously restaurant data', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    await expect(fetchRestaurantData()).rejects.toThrow('API Error');
    expect(axios.get).toHaveBeenCalledWith('https://frontend-challenge.free.beeceptor.com/venue/9');
  });

  it('fetches erroneously menu data', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    await expect(fetchMenuData()).rejects.toThrow('API Error');
    expect(axios.get).toHaveBeenCalledWith('https://frontend-challenge.free.beeceptor.com/menu');
  });
});
