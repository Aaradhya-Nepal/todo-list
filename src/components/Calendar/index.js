import React, { Component, Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../Calendar/styles";
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from "../../helpers/calendar";

export default function Calendar({ date, onDateChanged }) {
  const [dateState, setDateState] = useState({ current: 0, month: 0, year: 0 });
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    addDateToState(date);
  }, []);
  const addDateToState = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
  };
  const getCalendarDates = () => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();
    return calendar(calendarMonth, calendarYear);
  };
  return (
    <>
      <div className="styled-calendar-container">{renderMonthAndYear()}</div>
      <div className="styled-calendar-grid">
        <Fragment>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</Fragment>
        <Fragment>{getCalendarDates().map(renderCalendarDate)}</Fragment>
      </div>
    </>
  );
}

let pressureTimer, pressureTimeout;

const renderMonthAndYear = () => {
  const { month, year } = dateState;
  // Resolve the month name from the CALENDAR_MONTHS object map
  const monthname =
    Object.keys(CALENDAR_MONTHS)[Math.max(0, Math.min(month - 1, 11))];
  return (
    <>
      <div className="calendar-header">
        <div
          className="arrow-left"
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
          title="Previous Month"
        ></div>

        <div className="calendar-month">
          {monthname} {year}
        </div>

        <div
          className="arrow-right"
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
          title="Next Month"
        ></div>
      </div>
    </>
  );
};
// Render the label for day of the week
// This method is used as a map callback as seen in render()
const renderDayLabel = (day, index) => {
  // Resolve the day of the week label from the WEEK_DAYS object map
  const daylabel = WEEK_DAYS[day].toUpperCase();
  return (
    <>
      <div className="calendar-day" key={daylabel} index={index}>
        {daylabel}
      </div>
    </>
  );
};
// Render a calendar date as returned from the calendar builder function
// This method is used as a map callback as seen in render()
const renderCalendarDate = (date, index) => {
  const { current, month, year } = dateState;
  const _date = new Date(date.join("-"));
  // Check if calendar date is same day as today
  const isToday = isSameDay(_date, today);
  // Check if calendar date is same day as currently selected date
  const isCurrent = current && isSameDay(_date, current);
  // Check if calendar date is in the same month as the state month and year
  const inMonth =
    month && year && isSameMonth(_date, new Date([year, month, 1].join("-")));
  // The click handler
  const onClick = this.gotoDate(_date);
  const props = { index, inMonth, onClick, title: _date.toDateString() };

  return (
    <div className="CalendarHeader">
      <button className="ArrowLeft" title="Previous Month"></button>
      <div className="CalendarMonth">February 2023</div>
      <button className="ArrowRight" title="Next Month"></button>
    </div>
  );
};

// css for the calender head
/*
$primary-color: #0074d9;
$secondary-color: #e6e6e6;

.CalendarHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $secondary-color;
  padding: 1rem;
}

.CalendarMonth {
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
}

.CalendarDay {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: $primary-color;
  padding: 1rem;
}

.CalendarDate {
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
}

.HighlightedCalendarDate {
  @extend .CalendarDate;
  background-color: $primary-color;
  color: #fff;
}

.TodayCalendarDate {
  @extend .CalendarDate;
  background-color: $secondary-color;
  color: $primary-color;
}
*/

import DatePicker from "react datepicker";
import Button from "react datepicker/components/button";
export function Example() {
  return <DatePicker range eachDaysInRange render={<Button />} />;
}
function Button({ openCalendar, value }) {
  let from = value[0] || "";
  let to = value[1] || "";

  value = from && to ? "from " + from + ", to " + to : from;
  return <input onFocus={openCalendar} value={value} readOnly />;
}

const gotoDate = (date) => (evt) => {
  evt && evt.preventDefault();
  const { current } = dateState;
  !(current && isSameDay(date, current)) && addDateToState(date);
  onDateChanged(date);
};
const gotoPreviousMonth = () => {
  const { month, year } = dateState;
  const previousMonth = getPreviousMonth(month, year);
  setDateState({
    month: previousMonth.month,
    year: previousMonth.year,
    current: dateState.current,
  });
};
const gotoNextMonth = () => {
  const { month, year } = dateState;
  const nextMonth = getNextMonth(month, year);
  setDateState({
    month: nextMonth.month,
    year: nextMonth.year,
    current: dateState.current,
  });
};
const gotoPreviousYear = () => {
  const { year } = dateState;
  setDateState({
    month: dateState.month,
    year: year - 1,
    current: dateState.current,
  });
};
const gotoNextYear = () => {
  const { year } = dateState;
  setDateState({
    month: dateState.month,
    year: year + 1,
    current: dateState.current,
  });
};
const handlePressure = (fn) => {
  if (typeof fn === "function") {
    fn();
    pressureTimeout = setTimeout(() => {
      pressureTimer = setInterval(fn, 100);
    }, 500);
  }
};
const clearPressureTimer = () => {
  pressureTimer && clearInterval(pressureTimer);
  pressureTimeout && clearTimeout(pressureTimeout);
};
const handlePrevious = (evt) => {
  evt && evt.preventDefault();
  const fn = evt.shiftKey ? gotoPreviousYear : gotoPreviousMonth;
  handlePressure(fn);
};
const handleNext = (evt) => {
  evt && evt.preventDefault();
  const fn = evt.shiftKey ? gotoNextYear : gotoNextMonth;
  handlePressure(fn);
};

useEffect(() => {
  const now = new Date();
  const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
  const ms = tomorrow - now;
  dayTimeout = setTimeout(() => {
    setToday(new Date());
    clearDayTimeout();
  }, ms);
  return () => {
    clearPressureTimer();
    clearDayTimeout();
  };
}, []);

const clearDayTimeout = () => {
  dayTimeout && clearTimeout(dayTimeout);
};
