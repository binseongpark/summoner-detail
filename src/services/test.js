import request from "utils/request";

export const test = {
  getInfo: ({ summonerName }) => {
    return request(`https://codingtest.op.gg/api/summoner/${summonerName}`, {
      method: "GET",
    });
  },
  //
  getMatches: ({ summonerName }) => {
    return request(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`, {
      method: "GET",
    });
  },
  getMostInfo: ({ summonerName }) => {
    return request(`https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`, {
      method: "GET",
    });
  },
  getItem: () => {
    return request(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`, {
      method: "GET",
    });
  },
};
