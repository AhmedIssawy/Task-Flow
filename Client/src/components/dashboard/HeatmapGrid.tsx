"use client";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { addDays, subDays, format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const endDate = new Date();
const startDate = subDays(endDate, 120);

// Fake engagement data
const values = Array.from({ length: 100 }, (_, i) => {
  const date = subDays(endDate, i);
  return {
    date: format(date, "yyyy-MM-dd"),
    count: Math.floor(Math.random() * 5),
  };
});

export default function EngagementHeatmap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <Card className="shadow-xl border-1 border-muted/30 max-w-[600px] mx-auto">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Student Engagement</h2>
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={values}
            showWeekdayLabels
            classForValue={(value) => {
              if (!value || value.count === 0) return "color-empty";
              return `color-github-${value.count} color-filled`;
            }}
            tooltipDataAttrs={(value) => ({
              "data-tooltip-id": "engagement-tooltip",
              "data-tooltip-content": `${value.date}: ${value.count ?? 0} logins`,
              "width": "8px",
              "height": "8px",
            })}
          />
          <Tooltip id="engagement-tooltip" className="z-[9999]" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
