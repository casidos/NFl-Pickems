export default function seasonReducer(state = {season: '', loading: false}, action) {
  switch (action.type) {

    case 'CREATING_SEASON':
      return {season: '', loading: true};

      case 'NEW_SEASON':
        return {season: '', loading: false};

    default:
      return state;

  }
};