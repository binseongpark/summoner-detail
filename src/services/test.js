import request from 'utils/request'

export const test = {
  getSummoner: ({ summonerName }) => {
    return request(`https://codingtest.op.gg/api/summoner/${summonerName}`, {
      method: 'GET'
    })
  },
  getMatchDetail: '',
  getMatches: '',
  getMostInfo: ''
}
