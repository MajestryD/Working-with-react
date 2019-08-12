const locateReducer = (state = 'home',action) => {
  switch (action.type) {
    case 'controller':
      return state = 'controller';
    case 'website':
      return state = 'website';
    case 'appraise':
      return state = 'appraise';

      break;
    default:
      return state;

  }
};

export default locateReducer;
