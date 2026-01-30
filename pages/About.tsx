
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Về CareerPath VN</span>
          <h1 className="text-5xl font-black leading-tight">Vì mỗi cá nhân là một <span className="text-primary">Bản sắc riêng biệt</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Chúng tôi tin rằng hướng nghiệp không chỉ là chọn một cái tên công việc, mà là tìm ra điểm giao thoa giữa đam mê, năng lực và nhu cầu của xã hội. CareerPath VN ra đời để biến hành trình đó trở nên dễ dàng và khoa học hơn bao giờ hết.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="text-3xl font-black text-primary">2021</p>
              <p className="text-sm text-slate-500">Năm thành lập</p>
            </div>
            <div>
              <p className="text-3xl font-black text-primary">150K+</p>
              <p className="text-sm text-slate-500">Người dùng tin tưởng</p>
            </div>
          </div>
        </motion.div>
        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900 rounded-[4rem] p-12 md:p-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Phương pháp luận Khoa học</h2>
          <p className="text-slate-500">Nền tảng của chúng tôi được xây dựng dựa trên những lý thuyết hướng nghiệp kinh điển được công nhận toàn cầu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Mã Holland", desc: "Phân loại 6 nhóm tính cách đặc trưng tương ứng với các môi trường làm việc lý tưởng.", icon: "category" },
            { title: "Trí tuệ nhân tạo", desc: "Sử dụng AI để phân tích dữ liệu thị trường và đưa ra gợi ý sát thực tế nhất.", icon: "auto_awesome" },
            { title: "Tư vấn Chuyên gia", desc: "Kết hợp giữa máy móc và sự thấu cảm của con người trong các buổi coach 1-1.", icon: "forum" }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
