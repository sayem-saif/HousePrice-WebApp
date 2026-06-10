import { motion } from "framer-motion";

export default function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="glass-panel rounded-lg p-5"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-600/10 text-teal-700 dark:text-teal-300">
        <Icon size={22} />
      </div>
      <p className="text-2xl font-extrabold text-slate-950 dark:text-white">{value}</p>
      <p className="mt-1 text-sm font-bold text-slate-700 dark:text-slate-200">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{detail}</p>
    </motion.div>
  );
}
