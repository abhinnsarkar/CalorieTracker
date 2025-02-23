"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = {
    className?: string;
    classNames?: Record<string, string>;
};

function Calendar({ className }: CalendarProps) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedDay, setSelectedDay] = React.useState<number>(
        currentDate.getDate()
    );
    const [selectedMonth, setSelectedMonth] = React.useState<number>(
        currentDate.getMonth()
    );
    const [selectedYear, setSelectedYear] = React.useState<number>(currentYear);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate(); // Get number of days in selected month

    // List of years starting from current year and going back 150 years
    const yearRange = Array.from({ length: 151 }, (_, i) => currentYear - i);

    return (
        <div className={cn("p-3", className)}>
            {/* Day, Month, Year Selectors */}
            <div className="flex items-center justify-between space-x-2">
                {/* Day Picker */}
                <div>
                    <label htmlFor="day-picker" className="sr-only">
                        Select Day
                    </label>
                    <select
                        id="day-picker"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(Number(e.target.value))}
                        className="border-none bg-transparent text-center"
                        aria-label="Select Day"
                    >
                        {Array.from(
                            { length: daysInMonth },
                            (_, i) => i + 1
                        ).map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Month Picker */}
                <div>
                    <label htmlFor="month-picker" className="sr-only">
                        Select Month
                    </label>
                    <select
                        id="month-picker"
                        value={selectedMonth}
                        onChange={(e) =>
                            setSelectedMonth(Number(e.target.value))
                        }
                        className="border-none bg-transparent text-center"
                        aria-label="Select Month"
                    >
                        {monthNames.map((month, index) => (
                            <option key={month} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Year Picker */}
                <div>
                    <label htmlFor="year-picker" className="sr-only">
                        Select Year
                    </label>
                    <select
                        id="year-picker"
                        value={selectedYear}
                        onChange={(e) =>
                            setSelectedYear(Number(e.target.value))
                        }
                        className="border-none bg-transparent text-center"
                        aria-label="Select Year"
                    >
                        {yearRange.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

Calendar.displayName = "Calendar";

export { Calendar };
