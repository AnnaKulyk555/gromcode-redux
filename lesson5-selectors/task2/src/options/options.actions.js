export const TOOGLE_OPTION = 'OPTIONS/TOOGLE_OPTION';

export const toggleOption = optionId => ({
  type: TOOGLE_OPTION,
  payload: {
    optionId,
  },
});
