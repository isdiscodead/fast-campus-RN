import dayjs from "dayjs";


export const fillEmptyColumns = (columns, start, end) => {
    const filledColumns = columns.slice(0);

    // 1. 첫 날 이전 공백 채우기
    const startDay = dayjs(start).get("day"); // 첫날의 요일 
    for ( let i=0 ; i <= startDay ; i += 1 ) {
        const date = dayjs(start).subtract(i, "day");
        filledColumns.unshift(date); // 맨 앞에 추가 
    }

    // 2. 마지막 날 이후 공백 채우기
    const endDay = dayjs(end).get("day");
    for ( let i=0 ; i <= 6-endDay ; i++ ) {
        const date = dayjs(end).add(i, "day"); // i일 후 
        filledColumns.push(date);
    }

    return filledColumns;
}


export const getCalendarColumns = (now) => {
    const start = dayjs(now).startOf("month"); // 1일
    const end = dayjs(now).endOf("month"); // 마지막 날짜
    const endDate = dayjs(end).get("date"); // 길이

    const columns = [];
    for ( let i=0 ; i < endDate ; i++ ) {
        const date = dayjs(start).add(i, "day"); // i일 후를 배열에 추가
        columns.push(date);
    }

    const filledColumns = fillEmptyColumns(columns, start, end);
    return filledColumns;
}


export const getDayText = (day) => {
    const dayTexts = ["일", "월", "화", "수", "목", "금", "토"];
    return dayTexts[day];
  }

  
export const getDayColor = (day) => {
    if ( day === 0 ) {
        return '#e67639';
    } else if ( day === 6 ) {
        return '#5872d1';
    } else {
        return '#2b2b2b';
    }
}
