import axios from 'axios';
import stateNames from './stateNames.js';
import cache from './cache.js';

const basicDataCacheKey = 'cache_key_getBasicData';
const getStatesDataCacheKey = 'cache_key_getStatesDataCacheKey';
const getUsHistoricDataCacheKey = 'cache_key_getUsHistoricDataCacheKey';

const getHistoricStatesDataCacheKey = 'cache_key_getHistoricStatesDataCacheKey';

export const getBasicData = async () => {
  if (cache.get(basicDataCacheKey)) {
    return cache.get(basicDataCacheKey);
  }

  const request = await axios.get('http://covidtracking.com/api/us');

  const [covidInfo] = request.data;

  cache.set(basicDataCacheKey, covidInfo);

  return covidInfo;
};

export const getStatesData = async () => {
  if (cache.get(getStatesDataCacheKey)) {
    return cache.get(getStatesDataCacheKey);
  }

  const request = await axios.get('https://covidtracking.com/api/states');

  const stateData = request.data;
  const data = stateData.map((data) => {
    const fullStateName = stateNames.find((s) => s.abbreviation == data.state)
      .name;

    return { ...data, fullStateName };
  });

  cache.set(getStatesDataCacheKey, data);

  return data;
};

export const getUsHistoricData = async () => {
  if (cache.get(getUsHistoricDataCacheKey)) {
    return cache.get(getUsHistoricDataCacheKey);
  }

  const request = await axios.get('https://covidtracking.com/api/us/daily');

  const data = request.data;

  cache.set(getUsHistoricDataCacheKey, data);

  return data;
};

export const getHistoricStatesData = async () => {
  if (cache.get(getHistoricStatesDataCacheKey)) {
    return cache.get(getHistoricStatesDataCacheKey);
  }

  const request = await axios.get('https://covidtracking.com/api/states/daily');

  const data = request.data;

  cache.set(getHistoricStatesDataCacheKey, data);

  return data;
};

export const getHistoricStateData = async (state) => {
  const info = await getHistoricStatesData();

  return info.filter((d) => d.state === state);
};

export const getStateData = async (state) => {
  const states = await getStatesData();

  return states.find((s) => s.state === state);
};
