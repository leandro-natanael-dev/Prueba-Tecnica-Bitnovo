import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ConceptSlice {
  concept: string;
}

const initialState: ConceptSlice = {
  concept: '',
};

/**
 * Actualiza el estado del concepto
 * @param {ConceptState} state - Estado del concepto
 * @param {PayloadAction<string>} action - Accion que contiene el nuevo concepto
 */

const conceptSlice = createSlice({
  name: 'concept',
  initialState,
  reducers: {
    setConcept: (state, action: PayloadAction<string>) => {
      state.concept = action.payload;
    },
  },
});

export const {setConcept} = conceptSlice.actions;
export default conceptSlice.reducer;
