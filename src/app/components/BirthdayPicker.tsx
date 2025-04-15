"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

export type CalendarProps = {
    className?: string;
    selected?: Date;
    onSelect?: (date: Date | undefined) => void;
};

function Calendar({ className, selected, onSelect }: CalendarProps) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedDay, setSelectedDay] = React.useState<number>(
        selected ? selected.getDate() : currentDate.getDate()
    );
    const [selectedMonth, setSelectedMonth] = React.useState<number>(
        selected ? selected.getMonth() : currentDate.getMonth()
    );
    const [selectedYear, setSelectedYear] = React.useState<number>(
        selected ? selected.getFullYear() : currentYear
    );

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

    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const yearRange = Array.from({ length: 151 }, (_, i) => currentYear - i);

    React.useEffect(() => {
        if (selected) {
            setSelectedDay(selected.getDate());
            setSelectedMonth(selected.getMonth());
            setSelectedYear(selected.getFullYear());
        }
    }, [selected]);

    return (
        <div className={cn("p-3", className)}>
            <div className="flex items-center justify-between space-x-2">
                <select
                    value={selectedDay}
                    onChange={(e) => {
                        const newDay = Number(e.target.value);
                        setSelectedDay(newDay);
                        onSelect?.(
                            new Date(selectedYear, selectedMonth, newDay)
                        );
                    }}
                    className="border-none bg-transparent text-center"
                    aria-label="Select Day"
                >
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                        (day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        )
                    )}
                </select>

                <select
                    value={selectedMonth}
                    onChange={(e) => {
                        const newMonth = Number(e.target.value);
                        setSelectedMonth(newMonth);
                        onSelect?.(
                            new Date(selectedYear, newMonth, selectedDay)
                        );
                    }}
                    className="border-none bg-transparent text-center"
                    aria-label="Select Month"
                >
                    {monthNames.map((month, index) => (
                        <option key={month} value={index}>
                            {month}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedYear}
                    onChange={(e) => {
                        const newYear = Number(e.target.value);
                        setSelectedYear(newYear);
                        onSelect?.(
                            new Date(newYear, selectedMonth, selectedDay)
                        );
                    }}
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
    );
}

export default function BirthdayPicker({
    date,
    setDate,
}: {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}) {
    const [savedBirthday, setSavedBirthday] = React.useState<Date | undefined>(
        date
    );

    React.useEffect(() => {
        setSavedBirthday(date);
    }, [date]);

    const handleDateSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
    };

    return (
        <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="birthday" className="text-right">
                Birthday
            </Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full col-span-3 justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        {/* <span className="flex justify-center w-full bg-green-300"> */}
                        {/* <span className="w-auto bg-green-300 grid col-span-3 rounded-md border bg-background p-2 text-foreground focus:ring-0"> */}
                        <span className="w-full  flex flex-row justify-center items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {savedBirthday ? (
                                format(savedBirthday, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        className="hover-card"
                        selected={date}
                        onSelect={handleDateSelect}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
