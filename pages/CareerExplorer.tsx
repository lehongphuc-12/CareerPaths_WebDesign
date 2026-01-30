
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'tech', name: 'Công nghệ & Kỹ thuật', icon: 'terminal', count: 45, color: 'bg-blue-500' },
  { id: 'business', name: 'Kinh doanh & Quản lý', icon: 'trending_up', count: 32, color: 'bg-green-500' },
  { id: 'art', name: 'Nghệ thuật & Sáng tạo', icon: 'palette', count: 28, color: 'bg-pink-500' },
  { id: 'health', name: 'Y tế & Chăm sóc', icon: 'health_and_safety', count: 18, color: 'bg-red-500' },
  { id: 'social', name: 'Khoa học xã hội', icon: 'groups', count: 22, color: 'bg-purple-500' },
  { id: 'nature', name: 'Môi trường & Nông nghiệp', icon: 'eco', count: 15, color: 'bg-teal-500' },
];

const CareerExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl space-y-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black tracking-tight"
          >
            Thư viện <span className="text-primary">Nghề nghiệp</span>
          </motion.h1>
          <p className="text-slate-500 text-lg">
            Khám phá hơn 200+ ngành nghề đang được quan tâm nhất tại thị trường Việt Nam hiện nay.
          </p>
        </div>
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Tìm kiếm nghề nghiệp..."
            className="w-full h-14 pl-12 pr-6 rounded-2xl border-slate-200 focus:ring-primary focus:border-primary shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">search</span>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div 
            key={cat.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className={`size-14 rounded-2xl ${cat.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-${cat.color.split('-')[1]}-500/20`}>
              <span className="material-symbols-outlined !text-3xl">{cat.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{cat.count} nghề nghiệp đang chờ bạn khám phá</p>
            <div className="flex items-center text-primary font-bold text-sm gap-2">
              Xem chi tiết <span className="material-symbols-outlined !text-sm">arrow_forward</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Jobs Section */}
      <section className="mt-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold">Nghề nghiệp "Hot" tuần này</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "AI Prompt Engineer", desc: "Ngành nghề mới bùng nổ trong kỷ nguyên trí tuệ nhân tạo.", tags: ["Tech", "Mới"], id: "ai-prompt" },
            { title: "Chuyên gia tâm lý học", desc: "Nhu cầu chăm sóc sức khỏe tinh thần ngày càng tăng cao.", tags: ["Xã hội", "Ổn định"], id: "psychology" }
          ].map((job, idx) => (
            <div key={idx} className="flex gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-slate-200 transition-all">
              <div className="size-20 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/${job.id}/200/200`} alt={job.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex gap-2 mb-1">
                  {job.tags.map(t => <span key={t} className="text-[10px] font-bold px-2 py-0.5 bg-white rounded-full border border-slate-100">{t}</span>)}
                </div>
                <h4 className="font-bold text-lg">{job.title}</h4>
                <p className="text-slate-500 text-sm">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerExplorer;
