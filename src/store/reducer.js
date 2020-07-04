import { ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY } from './types';

const initialState = {
  startups: [
    // {
    //   id: 1,
    //   company: 'Company name',
    //   industry: 'Real Estates',
    //   location: 'Accra',
    //   joined: new Date(),
    //   approved: false,
    // },
  ],
};

export default (state = initialState, { type, payload, id, updated_info }) => {
  switch (type) {
    case ADD_COMPANY:
      return { ...state, startups: [...state.startups, payload] };

    case DELETE_COMPANY:
      const filteredComps = state.startups.filter(
        (startup) => startup.id !== payload
      );
      return { ...state, startups: filteredComps };

    case EDIT_COMPANY:
      const updatedAccstInfo = state.startups.map((startup) => {
        if (startup.id === id) {
          return { ...startup, ...updated_info };
        } else {
          return startup;
        }
      });
      return { ...state, startups: updatedAccstInfo };

    default:
      return state;
  }
};
