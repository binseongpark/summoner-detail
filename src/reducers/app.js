import { DEFAULT_ASSIGN, GET_SUMMONER_SUCCESS } from "actions";

const initialState = {
  item: {},
  info: {
    summoner: {}
  },
  mostInfo: {
    champions: [],
    recentWinRate: []
  },
  matches: {
    games: [],
    champions: [],
    positions: [],
    summary: []
  },
  mostSelectedIndex: 0,
  gameSelectedIndex: 0 //0: 전체, 1: 솔로, 2: 자유
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ASSIGN:
      return {
        ...state,
        ...action.data,
      };
    case GET_SUMMONER_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
