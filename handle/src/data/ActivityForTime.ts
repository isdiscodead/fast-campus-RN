export type ActivityForTime = {
    // 시간대 별 추천 활동을 제공하기 위한 data type
    // Time의 경우 24시간을 1시간 단위로 나누어 사용 
    id?: number;
    startTime: number;
    endTime: number;
    activity?: string;
}

const getActivityForTime = (time: number): ActivityForTime => {
    if (time >= 23 || (time >= 0 && time <= 4)) {
      return {
        id: 1,
        startTime: 23,
        endTime: 4,
        activity: "잠에 들 시간이 되었어요! 😴 아직 침대가 아니시라면 핸드폰을 꺼두고 누구보다 빠르게 취침 준비를 시작해볼까요?",
      };
      
    } else if ( time >= 20 || time < 23 ) {
        return {
            id: 1,
            startTime: 23,
            endTime: 4,
            activity: "잠에 들 시간이 되었어요! 😴 아직 침대가 아니시라면 핸드폰을 꺼두고 누구보다 빠르게 취침 준비를 시작해볼까요?",
        };
    }
  
    return {
      startTime: time,
      endTime: time + 1,
      activity: "undefined",
    };
  };
  