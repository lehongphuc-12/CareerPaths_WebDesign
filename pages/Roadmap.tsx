
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const steps = [
    { grade: "Lớp 9", title: "Khám phá tiềm năng", desc: "Làm quen với các nhóm tính cách Holland và nhận diện sở thích cá nhân cơ bản.", status: "completed" },
    { grade: "Lớp 10", title: "Thu hẹp lựa chọn", desc: "Xác định các khối thi và tham gia các hoạt động ngoại khóa để thử nghiệm kỹ năng.", status: "current" },
    { grade: "Lớp 11", title: "Xây dựng lộ trình", desc: "Tập trung vào học thuật và tìm kiếm các thông tin về trường đại học mục tiêu.", status: "upcoming" },
    { grade: "Lớp 12", title: "Chinh phục mục tiêu", desc: "Hoàn thiện hồ sơ, ôn luyện thi đại học và ra quyết định chọn ngành nghề cuối cùng.", status: "upcoming" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-black">Lộ trình <span className="text-primary">4 năm THPT</span></h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Chúng tôi đồng hành cùng bạn từ những bước chân đầu tiên tại trường cấp 3 cho đến khi bước chân vào cánh cửa đại học.</p>
      </div>

      <div className="relative space-y-12">
        {/* Connection Line */}
        <div className="absolute left-10 top-8 bottom-8 w-1 bg-slate-100 hidden md:block"></div>

        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row gap-8 relative items-start"
          >
            <div className={`size-20 shrink-0 rounded-[1.5rem] flex items-center justify-center font-black text-2xl z-10 shadow-lg ${
              step.status === 'completed' ? 'bg-success text-white' : 
              step.status === 'current' ? 'bg-primary text-white ring-8 ring-primary/20' : 
              'bg-white text-slate-400 border border-slate-200'
            }`}>
              {step.grade.split(' ')[1]}
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm flex-1 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                {step.status === 'current' && <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase rounded">Giai đoạn này</span>}
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl text-center">
                  <span className="material-symbols-outlined !text-xl text-slate-400 mb-1">checklist</span>
                  <p className="text-[10px] font-bold text-slate-500">Mục tiêu</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl text-center">
                  <span className="material-symbols-outlined !text-xl text-slate-400 mb-1">lightbulb</span>
                  <p className="text-[10px] font-bold text-slate-500">Gợi ý</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex flex-col md:flex-row items-center gap-8">
        <div className="size-20 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined !text-4xl">calendar_month</span>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-2">Bạn đang ở giai đoạn nào?</h4>
          <p className="text-slate-600">Đăng nhập để cá nhân hóa lộ trình của riêng bạn và nhận thông báo nhắc nhở các cột mốc quan trọng.</p>
        </div>
        <button className="h-14 px-10 bg-primary text-white rounded-xl font-bold whitespace-nowrap hover:scale-105 transition-all">Bắt đầu ngay</button>
      </div>
    </div>
  );
};

export default Roadmap;
