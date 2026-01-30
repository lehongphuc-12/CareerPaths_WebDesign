
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const Result: React.FC = () => {
  // Fixed: Added Variants type to ensure correct inference of transition properties
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Fixed: Explicit Variants type resolves error where "spring" was treated as a generic string
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:px-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
      >
        <div className="max-w-2xl">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center px-3 py-1 bg-success/10 text-success text-sm font-bold rounded-full mb-4"
          >
            Hoàn thành xuất sắc!
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Kết quả đánh giá nghề nghiệp</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Chúc mừng! Dựa trên phân tích chuyên sâu, chúng tôi đã tìm thấy những nhóm ngành phù hợp nhất với bản sắc riêng của bạn.
          </p>
        </div>
      </motion.div>

      {/* Top Careers */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold">Top 3 Nghề Nghiệp Phù Hợp</h2>
        </div>
        <motion.div 
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { name: "UI/UX Designer", match: "95%", icon: "palette", desc: "Sự kết hợp giữa nghệ thuật và kỹ thuật logic.", tags: ["Sáng tạo", "Công nghệ"], id: "uiux" },
            { name: "Digital Marketer", match: "88%", icon: "trending_up", desc: "Phù hợp với giao tiếp nhạy bén và đam mê dữ liệu.", tags: ["Giao tiếp", "Chiến lược"], id: "marketing" },
            { name: "Data Analyst", match: "82%", icon: "analytics", desc: "Dành cho những người yêu thích sự chính xác và con số.", tags: ["Logic", "Phân tích"], id: "data" }
          ].map((job, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
            >
               <div className="absolute top-4 right-4 bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg">{job.match}</div>
               <div className="size-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-6">
                 <span className="material-symbols-outlined !text-4xl">{job.icon}</span>
               </div>
               <h3 className="text-xl font-bold mb-2">{job.name}</h3>
               <p className="text-sm text-slate-500 mb-6">{job.desc}</p>
               <div className="flex gap-2 mb-8">
                 {job.tags.map(t => <span key={t} className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{t}</span>)}
               </div>
               <Link to={`/career/${job.id}`} className="w-full py-3 bg-slate-50 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                 Chi tiết nghề nghiệp <span className="material-symbols-outlined !text-sm">arrow_forward</span>
               </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Analysis with Radial Effect */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold">Tại sao các nghề nghiệp này phù hợp?</h2>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-8">
            <motion.div whileHover={{ x: 10 }} className="flex gap-4 cursor-default">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Mã Holland của bạn: ASI</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bạn là người có sự cân bằng giữa trí tưởng tượng (Artistic), thấu cảm xã hội (Social) và tư duy logic (Investigative).
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center"
        >
          <h3 className="font-bold mb-8">Biểu đồ mã Holland</h3>
          <div className="relative size-48">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-primary/10 rounded-full"
            ></motion.div>
            <div className="absolute inset-10 bg-primary flex items-center justify-center rounded-full text-white font-black text-2xl shadow-xl shadow-primary/30 z-10">ASI</div>
            
            {/* Markers */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">REALISTIC</div>
            <div className="absolute top-1/4 -right-12 text-[10px] font-bold text-primary">INVESTIGATIVE</div>
            <div className="absolute bottom-1/4 -right-12 text-[10px] font-bold text-primary">ARTISTIC</div>
          </div>
          <p className="text-xs text-slate-400 italic mt-12 text-center">Tương thích cao nhất ở các nhóm Sáng tạo & Xã hội.</p>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu hành trình?</h2>
          <p className="opacity-90 max-w-md">Kết nối với chuyên gia hướng nghiệp để xây dựng lộ trình học tập chi tiết nhất.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#2b6cee" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-primary rounded-xl font-bold shadow-xl transition-all"
        >
          Đặt lịch tư vấn
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Result;
