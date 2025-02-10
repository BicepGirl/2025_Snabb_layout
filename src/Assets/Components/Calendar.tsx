import React, { useState } from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);
// Sample Events Data
const events = [
  { id: 1, title: "Music Festival", date: dayjs("2025-02-12") },
  { id: 2, title: "Tech Conference", date: dayjs("2025-02-14") },
  { id: 3, title: "Art Exhibition", date: dayjs("2025-02-18") },
  { id: 4, title: "Sports Event", date: dayjs("2025-02-20") },
];

export default function Calendar() {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, "day"));

  // Filter events occurring within selected date range
  const filteredEvents = events.filter((event) =>
    event.date.isBetween(startDate, endDate, "day", "[]")
  );

  return (
    <Container>
      <Typography
        variant="h6"
        gutterBottom
        paddingTop={2}
        sx={{ textAlign: "center" }}
      >
        Select Date Range
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newDate) => setStartDate(newDate ?? dayjs())}
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newDate) => setEndDate(newDate ?? dayjs().add(7, "day"))}
          />
        </Box>
      </LocalizationProvider>

      {/* Display selected date range */}
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>
        Selected: {startDate?.format("YYYY-MM-DD")} →{" "}
        {endDate?.format("YYYY-MM-DD")}
      </Typography>

      {/* Events List */}
      <Box sx={{ mt: 4 }}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card key={event.id} sx={{ mb: 2, p: 2 }}>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2">
                  Date: {event.date.format("YYYY-MM-DD")}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            No events in this time range.
          </Typography>
        )}
      </Box>
    </Container>
  );
}
