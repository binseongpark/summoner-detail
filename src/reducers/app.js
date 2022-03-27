import { DEFAULT_ASSIGN, GET_SUMMONER_SUCCESS } from "actions";

const initialState = {
  item: {},
  info: {
    summoner: {},
  },
  mostInfo: {
    champions: [],
    recentWinRate: [],
  },
  matches: {
    games: [],
    champions: [],
    positions: [],
    summary: [],
  },
  filteredGames: [],
  mostSelectedIndex: 0,
  gameSelectedIndex: 0, //0: 전체, 1: 솔로, 2: 자유,
  soloGames: [],
  freeGames: [],
  searchList: [
    {
      id: 63140297,
      summoner_id: "8MmRmZ2XQ3XzKUAdkLzaMh1Nz5r9TSs3KLb28puiw85yta0",
      acct_id: "WKX_hsoQwACkPJyH_9AHOGRL6xhrzP72ugDnko079rTcH3Y",
      puuid:
        "Wz5p1lxINxjzyVdEKsiwRR2rUnsK29jTL2PnntM1a3N3C_KOfYs56cgaX24qgHmToCG7oHvbAE9d9A",
      name: "bsp",
      internal_name: "bsp",
      profile_image_url:
        "https://opgg-static.akamaized.net/images/profile_icons/profileIcon5091.jpg?image=q_auto",
      level: 527,
      updated_at: "2022-03-26T23:32:56+09:00",
      solo_tier_info: {
        tier: "SILVER",
        division: 2,
        lp: 58,
        tier_image_url:
          "https://opgg-static.akamaized.net/images/medals/silver_2.png?image=q_auto",
        border_image_url:
          "https://opgg-static.akamaized.net/images/borders2/silver.png",
      },
    },
    {
      id: 4460427,
      summoner_id: "4b4tvMrpRRDLvXAiQ_Vmh5yMOsD0R3GPGTUVfIanp1Httg",
      acct_id: "O219YcoOZLt1fZoiuCX02gjYuxqk9GESea5tTSjzEYWg",
      puuid:
        "XbXYoWgmpJEwCvxzt9B5vtVZCf6HyqDKd1vSLULuOzKY22q2NMirjt3u75JjyUZumP7RMXU07pPNGQ",
      name: "Hide on bush",
      internal_name: "hideonbush",
      profile_image_url:
        "https://opgg-static.akamaized.net/images/profile_icons/profileIcon6.jpg?image=q_auto",
      level: 554,
      updated_at: "2022-03-27T17:35:42+09:00",
      solo_tier_info: {
        tier: "CHALLENGER",
        division: 1,
        lp: 672,
        tier_image_url:
          "https://opgg-static.akamaized.net/images/medals/challenger_1.png?image=q_auto",
        border_image_url:
          "https://opgg-static.akamaized.net/images/borders2/challenger.png",
      },
    },
  ],
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
