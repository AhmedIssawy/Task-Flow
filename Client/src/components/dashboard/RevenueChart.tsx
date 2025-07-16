"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 800 },
  { month: "Apr", revenue: 1600 },
  { month: "May", revenue: 900 },
  { month: "Jun", revenue: 2500 },
];

function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="shadow-xl border-border/40">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4f46e5"
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default React.memo(RevenueChart);