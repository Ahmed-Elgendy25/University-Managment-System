import { LocationTyped } from './professor-types';

const LocationsData: LocationTyped[] = [
  {
    id: 1,
    name: 'Campus 1',
    buildings: [
      {
        id: 1,
        name: 'Building 1',
        rooms: [
          { id: 1, name: '1001' },
          { id: 2, name: '1002' },
        ],
      },
      {
        id: 2,
        name: 'Building 2',
        rooms: [
          { id: 1, name: '2001' },
          { id: 2, name: '2002' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Campus 2',
    buildings: [
      {
        id: 3,
        name: 'Building 3',
        rooms: [
          { id: 1, name: '3001' },
          { id: 2, name: '3002' },
        ],
      },
      {
        id: 4,
        name: 'Building 4',
        rooms: [
          { id: 1, name: '4001' },
          { id: 2, name: '4002' },
        ],
      },
    ],
  },
];

export default LocationsData;
