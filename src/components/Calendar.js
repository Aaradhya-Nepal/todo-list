import React, { useEffect, useState } from "react";
import "../styles/calendar.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import calendarBuilder, {
  getNextMonth,
  getPreviousMonth,
} from "../helpers/calendar";
import { BsCalendarEvent } from "react-icons/bs";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const YEARS = [];
const currentYear = new Date().getFullYear();
for (let year = 1900; year <= currentYear; year++) {
  YEARS.push(year);
}

const getMonthName = (monthId) => {
  return MONTHS[monthId - 1];
};

const Calendar = () => {
  const [showCalendar, setShowCalender] = useState(false);
  const [today, setToday] = useState({});
  const [activeView, setActiveView] = useState({});
  const [calendarDates, setCalendarDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState({});

  const getToday = () => {
    const d = new Date();
    return {
      day: d.getDate(),
      month: d.getMonth() + 1,
      year: d.getFullYear(),
    };
  };

  const getCalendarDates = (month, year) => {
    const dates = calendarBuilder(month, year);
    const mainArray = [];
    let start = 0;
    for (let i = 0; i < 6; i++) {
      let subArray = [];
      for (let j = start; j < start + 7; j++) {
        subArray.push(dates[j]);
      }
      start = start + 7;
      mainArray.push(subArray);
    }
    return mainArray;
  };

  useEffect(() => {
    const td = getToday();
    setToday(td);
    setActiveView({
      month: td.month,
      year: td.year,
    });
    setCalendarDates(getCalendarDates(td.month, td.year));
    setSelectedDate(td);
  }, []);

  const handleDatepickerClick = () => {
    setShowCalender(!showCalendar);
  };

  const handlePreviousMonth = () => {
    const { month, year } = getPreviousMonth(activeView.month, activeView.year);
    setActiveView({
      month,
      year,
    });
    setCalendarDates(getCalendarDates(month, year));
  };

  const handleNextMonth = () => {
    const { month, year } = getNextMonth(activeView.month, activeView.year);
    setActiveView({
      month,
      year,
    });
    setCalendarDates(getCalendarDates(month, year));
  };

  const selectDate = (date) => {
    setSelectedDate({
      year: date[0],
      month: date[1],
      day: date[2],
    });
    setShowCalender(false);
  };

  const handleSelectedMonth = () => {};

  return (
    <>
      <div className={"datepicker-container"}>
        <div className={"datepicker-field"} onClick={handleDatepickerClick}>
          {getMonthName(selectedDate.month)} {selectedDate.day},{" "}
          {selectedDate.year}
          <div className="datepicker-icon">
            <BsCalendarEvent />
          </div>
        </div>
        {showCalendar && (
          <div className={"main-wrapper"}>
            <div className="calendar-container">
              <div className="calendar-header">
                <span onClick={handlePreviousMonth}>
                  <MdKeyboardArrowLeft />
                </span>
                <span className="calendar-month">
                  <select
                    name="month"
                    defaultValue={getMonthName(activeView.month)}
                    onChange={handleSelectedMonth}
                  >
                    {MONTHS.map((index, month) => (
                      <option key={index}>{getMonthName(month + 1)}</option>
                    ))}
                  </select>
                  <select name="year" defaultValue={new Date().getFullYear()}>  
                    {YEARS.map((year) => (
                      <option
                        key={year}
                        defaultValue={new Date().getFullYear()}
                      >
                        {year}
                      </option>
                    ))}
                  </select>
                  {getMonthName(activeView.month)} {activeView.year}
                </span>
                <span onClick={handleNextMonth}>
                  <MdKeyboardArrowRight />
                </span>
              </div>
              <div className="calendar-body">
                <div className="calendar-row">
                  <div className="calendar-day-name">Sun</div>
                  <div className="calendar-day-name">Mon</div>
                  <div className="calendar-day-name">Tue</div>
                  <div className="calendar-day-name">Wed</div>
                  <div className="calendar-day-name">Thu</div>
                  <div className="calendar-day-name">Fri</div>
                  <div className="calendar-day-name">Sat</div>
                </div>
                {calendarDates &&
                  calendarDates.map((row) => (
                    <div className="calendar-row">
                      {row &&
                        row.map((d) => {
                          let className = "calendar-date";
                          if (+d[1] !== activeView.month) {
                            className += " other-month";
                          }

                          if (
                            +d[1] === today.month &&
                            +d[2] === today.day &&
                            +d[0] === today.year
                          ) {
                            className += " today";
                          }

                          return (
                            <div
                              className={className}
                              onClick={(e) => {
                                selectDate(d);
                              }}
                            >
                              {d[2]}
                            </div>
                          );
                        })}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
