import React from "react";
import "../styles/calendar.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Calendar = () => {
  return (
    <>
      <div className="calendar-container">
        <div className="calendar-header">
          <BiLeftArrow />
          <span className="calendar-month">February 2023</span>
          <BiRightArrow />
        </div>
        <div className="calendar-body">
          <div className="calendar-row">
            <div class="calendar-day-name">Sun</div>
            <div class="calendar-day-name">Mon</div>
            <div class="calendar-day-name">Tue</div>
            <div class="calendar-day-name">Wed</div>
            <div class="calendar-day-name">Thu</div>
            <div class="calendar-day-name">Fri</div>
            <div class="calendar-day-name">Sat</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date other-month">29</div>
            <div class="calendar-date other-month">30</div>
            <div class="calendar-date other-month">31</div>
            <div class="calendar-date">1</div>
            <div class="calendar-date">2</div>
            <div class="calendar-date">3</div>
            <div class="calendar-date">4</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date">5</div>
            <div class="calendar-date">6</div>
            <div class="calendar-date">7</div>
            <div class="calendar-date">8</div>
            <div class="calendar-date">9</div>
            <div class="calendar-date">10</div>
            <div class="calendar-date">11</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date">12</div>
            <div class="calendar-date">13</div>
            <div class="calendar-date">14</div>
            <div class="calendar-date">15</div>
            <div class="calendar-date">16</div>
            <div class="calendar-date">17</div>
            <div class="calendar-date">18</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date">19</div>
            <div class="calendar-date">20</div>
            <div class="calendar-date">21</div>
            <div class="calendar-date">22</div>
            <div class="calendar-date">23</div>
            <div class="calendar-date">24</div>
            <div class="calendar-date">25</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date">26</div>
            <div class="calendar-date">27</div>
            <div class="calendar-date">28</div>
            <div class="calendar-date other-month">1</div>
            <div class="calendar-date other-month">2</div>
            <div class="calendar-date other-month">3</div>
            <div class="calendar-date other-month">4</div>
          </div>
          <div className="calendar-row">
            <div class="calendar-date other-month">5</div>
            <div class="calendar-date other-month">6</div>
            <div class="calendar-date other-month">7</div>
            <div class="calendar-date other-month">8</div>
            <div class="calendar-date other-month">9</div>
            <div class="calendar-date other-month">10</div>
            <div class="calendar-date other-month">11</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
