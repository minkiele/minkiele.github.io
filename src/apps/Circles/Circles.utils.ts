import { CSSProperties } from "react";

export interface ClockRelativeSize {
    day: number;
    date: number;
    month: number;
    hour: number;
    minute: number;
    second: number;
}

export interface ClockData extends ClockRelativeSize {
    dayOfYear: number;
    fullHour: number;
}

const isLeapYear = (year: number): boolean => year % 4 === 0 && (year % 100 !== 0 || year % 4000 === 0);

const getDaysInMonth = (month: number, year: number): number => {
    switch(month) {
        case 1: return isLeapYear(year) ? 29 : 28;
        case 3:
        case 5:
        case 8:
        case 10: return 30;
        default: return 31;
    }
};
const getDaySize = (day: number): number => (((day + 6) % 7) + 1) / 7;
const getDateSize = (day: number, month: number, year: number): number => day / getDaysInMonth(month, year);
const getMonthSize = (month: number): number => (month + 1) / 12;
const getHourSize = (hour: number): number => hour / 24;
const getMinuteSize = (minute: number): number => minute / 60;

export const getDayOfYear = (date: number, month: number, year: number): number => {
    let output = date;
    for(let m = 0; m < month; m += 1) {
        output += getDaysInMonth(m, year);
    }
    return output;
};

export const getClockSizes = (date: Date): ClockData => ({
    day: getDaySize(date.getDay()),
    date: getDateSize(date.getDate(), date.getMonth(), date.getFullYear()),
    month: getMonthSize(date.getMonth()),
    hour: getHourSize(date.getHours()),
    minute: getMinuteSize(date.getMinutes()),
    second: getMinuteSize(date.getSeconds()),
    dayOfYear: getDayOfYear(date.getDate(), date.getMonth(), date.getFullYear()),
    fullHour: date.getHours(),
});

export const getGetCircleSize = (size: number): CSSProperties => {
    // Diameter is proportional to the occupied area, not to the radius
    // We don't need PI, after normalization it's just the diameter square root
    const diameter = 100 * (size ** 0.5);

    return {
        width: `${diameter}%`,
        height: `${diameter}%`,
    };
};

export const CIRCLES: Array<keyof ClockRelativeSize> = [
    "day",
    "date",
    "month",
    "hour",
    "minute",
    "second",
  ];
