import { call, select, takeEvery, put } from "redux-saga/effects";
import { api } from "services";
import * as actions from "actions";

export function* initFlow(payload) {
  try {
    const res = yield call(api.test.getItem);

    const app = yield select((state) => state.app);

    yield put({
      type: actions.DEFAULT_ASSIGN,
      data: {
        ...app,
        item: res,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export function* getSummonerRequestFlow(payload) {
  try {
    const { summonerName } = payload.data;

    let res = yield call(api.test.getInfo, { summonerName });

    let o = {
      info: res,
    };

    res = yield call(api.test.getMostInfo, { summonerName });
    o = {
      ...o,
      mostInfo: res,
    };
    res = yield call(api.test.getMatches, { summonerName });
    o = {
      ...o,
      matches: res,
    };

    for (let i = 0; i < o.matches.games.length; i++) {
      let gameId = o.matches.games[i].gameId;
      res = yield call(api.test.getMatchDetail, { summonerName, gameId });

      o.matches.games[i].teams = res.teams;
    }

    const app = yield select((state) => state.app);

    let filteredGames = [...o.matches.games];
    o.filteredGames = filteredGames;
    // 솔랭, FreeTier

    let solos = o.matches.games.filter((item) => item.gameType === "솔랭");
    let soloWins;
    let soloLosses;
    if (Array.isArray(solos) && solos.length > 0) {
      soloWins = solos.filter((item) => item.isWin).length;
      soloLosses = solos.filter((item) => !item.isWin).length;
    }

    o.soloGames = {
      games: Array.isArray(solos) ? solos.length : 0,
      soloWins,
      soloLosses,
    };

    let frees = (o.freeGames = o.matches.games.filter(
      (item) => item.gameType === "자유 5:5 랭크"
    ));
    let freeWins;
    let freeLosses;

    if (Array.isArray(frees) && frees.length > 0) {
      freeWins = frees.filter((item) => item.isWin).length;
      freeLosses = frees.filter((item) => !item.isWin).length;
    }

    o.freeGames = {
      games: Array.isArray(frees) ? solos.length : 0,
      freeWins,
      freeLosses,
    };

    yield put({
      type: actions.GET_SUMMONER_SUCCESS,
      data: o,
    });
  } catch (e) {
    console.error(e);
  }
}

export function* filteredGamesFlow(payload) {
  try {
    const { filterType } = payload.data;

    const app = yield select((state) => state.app);
    const { matches } = app;
    const { games } = matches;

    let filteredGames = games.filter((item) => {
      if (filterType === "") return true;

      return item.gameType === filterType;
    });

    yield put({
      type: actions.DEFAULT_ASSIGN,
      data: {
        filteredGames,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export function* searchSummonerRequestFlow(payload) {
  try {
    const { keyword } = payload.data;

    let res = yield call(api.test.getSummoner, {
      summonerName: keyword,
    });
  } catch (e) {
    console.error(e);
  }
}

export default function* watch() {
  yield takeEvery(actions.INIT, initFlow);
  yield takeEvery(actions.GET_SUMMONER_REQUEST, getSummonerRequestFlow);
  yield takeEvery(actions.FILTERED_GAMES, filteredGamesFlow);
  yield takeEvery(actions.SEARCH_SUMMONER_REQUEST, searchSummonerRequestFlow);
}
