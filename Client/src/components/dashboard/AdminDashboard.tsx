'use client';

import { useEffect, useState } from 'react';
import { fakeApi } from '@/lib/lib';
import { mockStats } from '@/app/mock/stats';
import StatCard from './StatCard';
import RevenueChart from './RevenueChart';
import EngagementHeatmap from './HeatmapGrid';
import { motion } from 'framer-motion';
import AISuggestionCenter from '@/components/dashboard/AISuggestionCenter';

export default function AdminDashboard() {
  const [stats, setStats] = useState<typeof mockStats | null>(null);

  useEffect(() => {
    fakeApi(mockStats).then(setStats);
  }, []);

  if (!stats) return <div className="p-6 text-sm">Loading stats...</div>;

  return (
    <motion.div
      className="p-6 space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard title="Active Users" value={stats.activeUsers} />
        <StatCard title="Courses Today" value={stats.coursesToday} />
        <StatCard title="Monthly Revenue" value={`$${stats.monthlyRevenue}`} />
      </div>

      {/* Charts and Visuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <EngagementHeatmap />
      </div>

      <AISuggestionCenter />
      {/* Later: User Table or Activity Feed */}
      {/* <UserTable /> or <RecentActivity /> */}
    </motion.div>
  );
}
