import { merge } from 'state/utils';
import { createReducer } from 'redux-yo';

import { editDappActions } from './actions';

export const editSteps = {
  completed: 'completed',
  detailsForm: 'detailsForm',
};

const initialState = {
  editStep: editSteps.detailsForm,
};

export const editDappReducer = createReducer(
  {
    [editDappActions.reset]: () => initialState,
    [editDappActions.setEditStep]: (state, editStep) => merge(state, { editStep }),
  },
  initialState
);
