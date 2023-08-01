const _ = require('lodash');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');

// CSV 파일 읽기
let data = fs.readFileSync('20230523160627.csv', 'utf8');
data = parse(data); // parse

// ECG 데이터 추출 -> array로 변환
let ecg_data = _.map(data, (row: string[]) => parseFloat(row[0])).filter(
  (data: number) => !isNaN(data),
); // NaN 데이터 삭제

// 평균과 표준편차 계산
let ecg_mean = _.mean(ecg_data);

let devTotal = 0; /* 편차값의 합계 구하기 */
for (var i = 0; i < ecg_data.length; i++) {
  var dev = ecg_data[i] - ecg_mean;
  devTotal += dev * dev;
}
// let ecg_var = devTotal / ecg_data.length; /* 모분산값 */
// let ecg_svar = devTotal / (ecg_data.length - 1); /* 표본분산값 */
let ecg_std = parseFloat(
  Math.sqrt(devTotal / ecg_data.length).toFixed(5),
); /* 모표준편차값 */
// let ecg_sstd = Math.sqrt(devTotal / (ecg_data.length - 1));

// 이상치 제거 (5σ 범위 밖)
ecg_data = _.filter(
  ecg_data,
  (x: number) => Math.abs(x - ecg_mean) < 5 * ecg_std,
);

// R-peak 찾기 (간단한 알고리즘 사용)
let r_peaks_locs = [];
for (let i = 1; i < ecg_data.length - 1; i++) {
  if (
    ecg_data[i] > 0.4 &&
    ecg_data[i] > ecg_data[i - 1] &&
    ecg_data[i] > ecg_data[i + 1]
  ) {
    if (
      (i >= 60 && r_peaks_locs.length === 0) ||
      i - r_peaks_locs[r_peaks_locs.length - 1] >= 150
    ) {
      r_peaks_locs.push(i + 1);
    }
  }
}
console.log(r_peaks_locs, r_peaks_locs.length);

// RR 간격 계산
let rr_intervals_ms = [];
for (let i = 0; i < r_peaks_locs.length - 1; i++) {
  rr_intervals_ms.push(((r_peaks_locs[i + 1] - r_peaks_locs[i]) / 500) * 1000);
}

console.log(rr_intervals_ms);

// RMSSD 값 계산
let diff_rr_intervals_sqrd_summed_ms2 = _.sum(
  _.map(rr_intervals_ms, (x: number, i: number, arr: number[]) =>
    i > 0 ? Math.pow(x - arr[i - 1], 2) : 0,
  ),
);
let rmssd_val_ms = Math.sqrt(
  diff_rr_intervals_sqrd_summed_ms2 / (rr_intervals_ms.length - 1),
);

console.log('RMSSD: ', rmssd_val_ms);

// TODO: RMSSD 값에 따른 스트레스 여부 출력
