import React, { useEffect, useMemo, useState } from 'react'
import CustomCalendar from './calendar' // Importing CustomCalendar from calendar.js
import './styles.css'

export default function Calendar () {
  const months = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    []
  )
  const [year, setYear] = useState(new Date().getFullYear())
  const currentYear = 1970
  const [month, setMonth] = useState(months[0])
  const [calendar, setCalendar] = useState(
    new CustomCalendar(year, months.indexOf(month))
  )
  const [selectedDate, setSelectedDate] = useState(-1)

  useEffect(() => {
    setCalendar(new CustomCalendar(year, months.indexOf(month)))
  }, [year, months, month])

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value))
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value)
  }

  const handleDateSelect = (selectedDate) => {
    setSelectedDate(selectedDate)
  }

  const handleOkButtonClick = () => {
    if (selectedDate !== null) {
      const selectedMonth = months.indexOf(month) + 1 // Adding 1 to match the JavaScript Date.getMonth() format
      alert(`Selected Date: ${selectedMonth}/${selectedDate}/${year}`)
    } else {
      alert('Please select a date first.')
    }
  }

  const renderCalendar = () => {
    const calendarData = calendar.generateCalendar()
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="7">
              <select value={year} onChange={handleYearChange}>
                {Array.from({ length: 1000 }, (_, i) => (
                  <option key={i} value={currentYear + i}>
                    {currentYear + i}
                  </option>
                ))}
              </select>
              <select value={month} onChange={handleMonthChange}>
                {months.map((monthData) => {
                  return (
                    <option key={monthData} value={monthData}>
                      {monthData}
                    </option>
                  )
                })}
              </select>
            </th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((day, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleDateSelect(day)}
                  className={day === selectedDate ? 'selected' : ''}
                >
                  {day !== -1 ? day : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="calendar-container">
      {renderCalendar()}
      <button onClick={handleOkButtonClick}>Ok</button>
    </div>
  )
}
