/**
 * Mocking client-server processing
 */
const _measurement_ch1_data = [{
    "value": 123.31,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },
  {
    "value": 124.51,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },{
    "value": 126,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },
  {
    "value": 127,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },{
    "value": 130,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 130,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 130,
      "row": 0.53,
      "outlier": false,
    }]
  },
  {
    "value": 123.31,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },{
    "value": 123.31,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  },
  {
    "value": 123.31,
    "row": 0.53,
    "cv": 0.0,
    "replicate": [{
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }, {
      "value": 123.31,
      "row": 0.53,
      "outlier": false,
    }]
  }
]
const LATENCY = 100
export default {
  getFullMeasurements(cb) {
    setTimeout(() => cb(_measurement_ch1_data), LATENCY)
  },
}
