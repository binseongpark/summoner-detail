import { call, select, takeEvery, put } from "redux-saga/effects";
import { api } from "services";
import * as actions from "actions";

export function* initFlow(payload) {
  try {
    const res = yield call(api.test.getItem);
    console.log("@@@@ res: ", res);

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

    const app = yield select((state) => state.app);
    console.log("@@@@ app: ", app);

    yield put({
      type: actions.GET_SUMMONER_SUCCESS,
      data: o,
    });
  } catch (e) {
    console.error(e);
  }
}

export default function* watch() {
  yield takeEvery(actions.INIT, initFlow);
  yield takeEvery(actions.GET_SUMMONER_REQUEST, getSummonerRequestFlow);
}
