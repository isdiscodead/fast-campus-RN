data = readtable('20230523160627.csv');


ecg_data = rmmissing(data.Var1);  

ecg_mean = mean(ecg_data);
ecg_std = std(ecg_data);
ecg_data = ecg_data(abs(ecg_data - ecg_mean) < 5 * ecg_std); 
%노이즈 제거(ecg 값이 평균의 5배 이상 차이 제거)


[peak_vals, r_peaks_locs] = findpeaks(ecg_data, 'MinPeakHeight', 0.4, 'MinPeakDistance', 150);
% R피크값 찾기, 노이즈 제거를 위해 피크의 최소 높이와 피크 사이의 거리 설정

time_vector_ms = (0:length(ecg_data)-1) / 500 * 1000;
rr_intervals_ms = diff(r_peaks_locs) / 500 * 1000; 
% 시간 단위 변경 (데이터의 샘플링레이트는 500hz)

rr_mean = mean(rr_intervals_ms);
rr_std = std(rr_intervals_ms);
rr_intervals_ms = rr_intervals_ms(abs(rr_intervals_ms - rr_mean) < 2 * rr_std);
%노이즈 제거(r-r interval 값이 평균의 2배 이상 차이 제거)
rmssd_val_ms = sqrt(mean(diff(rr_intervals_ms).^2));
%rmssd 값 계산

%그래프, 값 표시
figure;

subplot(3,1,1);
plot(time_vector_ms, ecg_data);
hold on;
plot(time_vector_ms(r_peaks_locs), peak_vals, 'ro');  
hold off;
title('ECG Data with R-peaks');
xlabel('Time (ms)');
ylabel('ECG amplitude (mV)');
legend('ECG data', 'R-peaks');

subplot(3,1,2);
plot(time_vector_ms(r_peaks_locs(2:length(rr_intervals_ms)+1)), rr_intervals_ms);
title('RR Intervals');
xlabel('Time (ms)');
ylabel('RR Interval (ms)');
legend('RR Intervals');

subplot(3,1,3);
text(0.5, 0.5, ['RMSSD: ', num2str(rmssd_val_ms)], 'FontSize', 14);
axis off;
