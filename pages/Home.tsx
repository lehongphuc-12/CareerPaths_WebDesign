
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import Lottie from 'lottie-react';

const Home: React.FC = () => {
  // Use explicit Variants type to avoid inference issues with transition properties
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Fixed: Added Variants type to ensure 'easeOut' is treated as a literal Easing type
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider"
            >
              Khám phá bản thân ngay hôm nay
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              Khám phá tương lai từ <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">chính bạn</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-[500px] leading-relaxed">
              Tư vấn hướng nghiệp dựa trên tính cách và kỹ năng dành riêng cho giới trẻ Việt Nam với bộ công cụ chuẩn quốc tế.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/test" className="h-14 px-8 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all w-full sm:w-auto">
                Làm Trắc Nghiệm Ngay
              </Link>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 flex items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-800 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Xem ví dụ kết quả
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 size-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 size-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="aspect-square rounded-3xl overflow-hidden border border-white dark:border-slate-800 shadow-2xl relative z-10">
            <img 
              src="https://picsum.photos/seed/future-edu/800/800" 
              alt="Student exploring career"
              className="w-full h-full object-cover"
            />
            {/* Overlay Lottie (Simulation with an animated div if JSON is unavailable, 
                but here we use a placeholder animation from a CDN) */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Reveal */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 dark:bg-slate-900/50 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Học sinh đã giúp", value: "10,000+", note: "Đã tìm thấy đúng định hướng" },
            { label: "Đối tác giáo dục", value: "50+", note: "Các trường THPT & ĐH hàng đầu" },
            { label: "Tỷ lệ hài lòng", value: "98%", note: "Đánh giá 5 sao từ người dùng" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center"
            >
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-primary text-4xl font-black mb-2">{stat.value}</p>
              <p className="text-xs text-slate-400 italic">{stat.note}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Steps with Stagger */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4"
          >
            Hành trình của bạn
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black mb-4"
          >
            3 bước đơn giản để tìm hướng đi
          </motion.h1>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { step: "1. Làm Trắc Nghiệm", icon: "edit_note", text: "Hoàn thành bài kiểm tra tính cách và năng lực trong 15 phút với những câu hỏi thú vị." },
            { step: "2. Xem Kết Quả", icon: "insights", text: "Nhận báo cáo chi tiết về các nhóm ngành phù hợp nhất với bản sắc riêng của bạn." },
            { step: "3. Nhận Tư Vấn", icon: "psychology", text: "Kết nối với chuyên gia giáo dục để xây dựng lộ trình học tập và chọn trường đại học." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:border-primary/30 transition-all"
            >
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.step}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA with scale effect */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 py-24 flex justify-center"
      >
        <div className="w-full max-w-[1000px] bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden text-white shadow-2xl shadow-primary/40">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 size-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"
          ></motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Sẵn sàng thiết kế lộ trình sự nghiệp của riêng bạn?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/test" className="h-14 px-10 flex items-center justify-center rounded-xl bg-white text-primary font-bold text-lg shadow-xl">
                Làm Trắc Nghiệm Ngay
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
