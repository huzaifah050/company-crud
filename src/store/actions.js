import { ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY } from './types';

export const addCompany = (newCompany) => {
  return {
    type: ADD_COMPANY,
    payload: newCompany,
  };
};

export const deleteCompany = (id) => {
  return {
    type: DELETE_COMPANY,
    payload: id,
  };
};

export const editCompany = (id, updated_info) => {
  return {
    type: EDIT_COMPANY,
    id,
    updated_info,
  };
};
