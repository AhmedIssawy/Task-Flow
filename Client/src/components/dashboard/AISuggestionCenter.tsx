"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mail, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  {
    id: 1,
    icon: <AlertTriangle className="text-yellow-400 w-6 h-6" />,
    text: "6 teachers haven’t posted any content in the last 10 days.",
    detail:
      "Inactive instructors may indicate disengagement. You could follow up or review their responsibilities.",
    action: "Send Reminder",
  },
  {
    id: 2,
    icon: <Mail className="text-blue-400 w-6 h-6" />,
    text: "Course ‘AI for Beginners’ has a 78% dropout rate.",
    detail:
      "Consider reviewing the difficulty level or restructuring the course intro.",
    action: "Review Course",
  },
  {
    id: 3,
    icon: <Info className="text-rose-400 w-6 h-6" />,
    text: "Student logins dropped 24% this week compared to last.",
    detail:
      "Could be seasonal. If trend continues, review engagement metrics.",
    action: "Analyze Logins",
  },
];

export default function AISuggestionCenter() {
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative z-10 py-12 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white flex items-center gap-3 mb-10"
      >
        <Sparkles className="text-purple-400 animate-pulse" />
        AI Suggestions
      </motion.h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-[#1e1e20] to-[#111114] p-[1px] rounded-2xl animate-pulse"
            >
              <div className="bg-background/70 backdrop-blur-xl rounded-2xl p-6 h-40" />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {suggestions.map((s) => (
            <motion.div
              key={s.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="group relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-purple-600/20 to-indigo-700/20 shadow-[0_2px_40px_rgba(80,80,255,0.1)] hover:shadow-[0_4px_60px_rgba(120,120,255,0.2)] transition-all duration-500"
            >
              <div className="bg-background/90 backdrop-blur-xl rounded-[inherit] p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="bg-muted/20 rounded-full p-2">
                      {s.icon}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-sm text-white leading-relaxed">
                      {s.text}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-xs text-muted-foreground mt-2 hover:underline w-fit px-0"
                      onClick={() =>
                        setExpandedId((id) => (id === s.id ? null : s.id))
                      }
                    >
                      {expandedId === s.id ? "Hide reason" : "Why this suggestion?"}
                    </Button>
                    <AnimatePresence>
                      {expandedId === s.id && (
                        <motion.p
                          className="text-xs text-muted-foreground mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {s.detail}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 text-xs"
                      onClick={() => alert(`${s.action} sent!`)}
                    >
                      {s.action}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
