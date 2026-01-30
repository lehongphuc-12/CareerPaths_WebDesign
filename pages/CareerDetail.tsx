
import React from 'react';
import { useParams } from 'react-router-dom';

const CareerDetail: React.FC = () => {
  const { id } = useParams();
  
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 md:px-16 flex flex-col lg:flex-row gap-12">
      {/* Sidebar navigation */}
      <aside className="hidden lg:flex w-64 flex-col gap-8 sticky top-32 self-start">
        <div className="space-y-1">
          <h1 className="text-xl font-extrabold uppercase tracking-tight">UI/UX Designer</h1>
          <p className="text-slate-500 text-sm font-semibold">Thiết kế & Công nghệ</p>
        </div>
        <nav className="flex flex-col gap-2">
          <a href="#overview" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-bold">Tổng quan</span>
          </a>
          <a href="#daily" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors text-slate-600">
            <span className="material-symbols-outlined">schedule</span>
            <span className="text-sm font-bold">Một ngày làm việc</span>
          </a>
          <a href="#salary" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors text-slate-600">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-bold">Mức lương</span>
          </a>
          <a href="#roadmap" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors text-slate-600">
            <span className="material-symbols-outlined">tactic</span>
            <span className="text-sm font-bold">Lộ trình học tập</span>
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-16">
        <section id="overview" className="space-y-8">
          <div className="flex flex-wrap justify-between items-start gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-5xl font-black tracking-tight">UI/UX Designer</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Cầu nối quan trọng giữa mỹ thuật và công nghệ, chịu trách nhiệm tạo ra những trải nghiệm người dùng tối ưu và giao diện đẹp mắt.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="h-12 px-6 rounded-xl border border-slate-200 font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">bookmark</span> Lưu nghề
              </button>
              <button className="h-12 px-8 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Ứng tuyển ngay</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Nhu cầu thị trường</p>
              <p className="text-3xl font-black mb-2">Rất cao</p>
              <p className="text-sm text-success font-bold">+15% hàng năm</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mức độ áp lực</p>
              <p className="text-3xl font-black mb-2">Trung bình</p>
              <p className="text-sm text-orange-500 font-bold">Linh hoạt theo dự án</p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Yêu cầu sáng tạo</p>
              <p className="text-3xl font-black mb-2">8.5 / 10</p>
              <p className="text-sm text-primary font-bold">Kỹ năng quan trọng</p>
            </div>
          </div>
        </section>

        <section id="daily" className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-black mb-12 flex items-center gap-4">
            <span className="size-3 bg-primary rounded-full"></span> Một ngày làm việc điển hình
          </h3>
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100"></div>
            {[
              { time: "09:00 AM", title: "Họp Daily Standup", desc: "Cập nhật tiến độ dự án cùng team Developers và Product Managers.", icon: "groups", color: "bg-primary" },
              { time: "10:30 AM", title: "Nghiên cứu & Wireframe", desc: "Phân tích hành vi người dùng và phác thảo User Flow.", icon: "lightbulb", color: "bg-orange-500" },
              { time: "02:00 PM", title: "Thiết kế High-fidelity", desc: "Hoàn thiện giao diện chi tiết trên Figma.", icon: "draw", color: "bg-indigo-500" }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 relative z-10">
                <div className={`size-12 shrink-0 rounded-full ${item.color} flex items-center justify-center text-white ring-8 ring-white dark:ring-slate-900`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className={`text-xs font-black uppercase tracking-wider mb-1 ${item.color.replace('bg-', 'text-')}`}>{item.time}</p>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="space-y-8">
          <div className="flex justify-between items-end">
             <h3 className="text-2xl font-black">Mức lương dự kiến</h3>
             <span className="text-primary font-bold">Triệu VND / Tháng</span>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-12 border border-slate-200 shadow-sm">
             <div className="relative pt-10 pb-4">
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="absolute top-0 flex flex-col items-center" style={{ left: '0%' }}>
                  <span className="text-xs font-bold text-slate-400 mb-2">Intern</span>
                  <div className="size-5 bg-white border-[4px] border-primary rounded-full"></div>
                  <span className="mt-4 font-bold text-sm">5 - 8M</span>
                </div>
                <div className="absolute top-0 flex flex-col items-center" style={{ left: '60%' }}>
                  <span className="text-xs font-bold text-primary mb-2">Senior</span>
                  <div className="size-5 bg-primary rounded-full ring-8 ring-primary/20"></div>
                  <span className="mt-4 font-black text-primary">25 - 45M</span>
                </div>
             </div>
          </div>
        </section>

        <div className="bg-primary rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30">
          <div className="space-y-4">
            <h3 className="text-3xl font-black">Bạn thấy mình phù hợp?</h3>
            <p className="text-lg opacity-90">Bắt đầu hành trình chinh phục ngành UI/UX ngay hôm nay.</p>
          </div>
          <button className="h-16 px-12 rounded-2xl bg-white text-primary font-black text-lg hover:scale-105 transition-all shadow-xl">Bắt đầu ngay</button>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
