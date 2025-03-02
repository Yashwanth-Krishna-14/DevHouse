"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ExpertAvailability() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Sample availability data
  const availableDates = [
    { day: "Mon", date: 18, available: true },
    { day: "Tue", date: 19, available: true },
    { day: "Wed", date: 20, available: true },
    { day: "Thu", date: 21, available: false },
    { day: "Fri", date: 22, available: true },
    { day: "Sat", date: 23, available: true },
    { day: "Sun", date: 24, available: false },
  ]

  const availableTimes = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
    { time: "5:00 PM", available: true },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-7 gap-1">
        {availableDates.map((date) => (
          <Button
            key={date.date}
            variant="outline"
            size="sm"
            className={cn(
              "h-14 flex flex-col p-1",
              !date.available && "opacity-50 cursor-not-allowed",
              selectedDate === date.date && "border-primary",
            )}
            disabled={!date.available}
            onClick={() => setSelectedDate(date.date)}
          >
            <span className="text-xs text-muted-foreground">{date.day}</span>
            <span className="text-sm font-medium">{date.date}</span>
          </Button>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Available Times (March {selectedDate})</h4>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {availableTimes.map((slot) => (
              <Button
                key={slot.time}
                variant="outline"
                size="sm"
                className={cn(
                  !slot.available && "opacity-50 cursor-not-allowed",
                  selectedTime === slot.time && "border-primary bg-primary/10",
                )}
                disabled={!slot.available}
                onClick={() => setSelectedTime(slot.time)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <Button className="w-full mt-4">
          Book for March {selectedDate} at {selectedTime}
        </Button>
      )}
    </div>
  )
}

