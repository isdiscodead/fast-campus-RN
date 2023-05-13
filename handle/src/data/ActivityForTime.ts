export type ActivityForTime = {
    // 시간대 별 추천 활동을 제공하기 위한 data type
    // Time의 경우 24시간을 1시간 단위로 나누어 사용 
    id?: number;
    startTime: number;
    endTime: number;
    activity?: string;
}