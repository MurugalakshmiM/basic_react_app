import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import * as actionTypes from '../container/actionTypes/actionTypes'

export function * getApiCallWatch () {
  yield takeEvery(actionTypes.GET_API_ASYNC, getApiCallGenerator)
}

function * getApiCallGenerator (...args) {
  try {
    const url = 'http://universities.hipolabs.com/search?country=turkey'
    const response = yield call(axios.get, url)
    yield put({
      type: actionTypes.GET_API,
      payload: response.data
    })
  } catch (error) {
    console.log('error')
  }
}
