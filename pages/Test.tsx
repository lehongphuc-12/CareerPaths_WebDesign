
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Test: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/result');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Fixed: Use explicit Variants type to avoid string-to-literal errors for easing properties
  const stepVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center min-h-[600px]">
      {/* Progress */}
      <div className="w-full mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Trắc nghiệm Holland</span>
            <p className="text-lg font-bold">Bước {step}: {step === 1 ? 'Sở thích cá nhân' : step === 2 ? 'Kỹ năng & Thế mạnh' : step === 3 ? 'Tính cách' : 'Môi trường làm việc'}</p>
          </div>
          <span className="text-slate-500 font-bold">{Math.round((step/totalSteps) * 100)}% Hoàn thành</span>
        </div>
        <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary" 
            initial={{ width: 0 }}
            animate={{ width: `${(step/totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>

      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={stepVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full"
          >
            {step === 1 && (
              <div className="w-full space-y-12">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-black">Bạn thích làm việc với con người hay máy móc?</h1>
                  <p className="text-slate-500 text-lg">Lựa chọn phản ánh cách bạn tương tác với thế giới xung quanh.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { id: 'people', title: 'Con người', desc: 'Thích giao tiếp, giảng dạy, giúp đỡ, tư vấn hoặc lãnh đạo người khác.', img: 'https://picsum.photos/seed/people/600/400' },
                    { id: 'machine', title: 'Máy móc', desc: 'Thích kỹ thuật, vận hành, sửa chữa, thiết kế phần cứng hoặc lập trình hệ thống.', img: 'https://picsum.photos/seed/machine/600/400' }
                  ].map(option => (
                    <motion.div 
                      key={option.id}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group cursor-pointer p-6 bg-white dark:bg-slate-900 border-2 border-transparent hover:border-primary rounded-2xl shadow-sm hover:shadow-xl transition-all" 
                      onClick={handleNext}
                    >
                      <img src={option.img} className="w-full h-48 rounded-xl object-cover mb-6" alt={option.title} />
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-slate-500 text-sm">{option.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="w-full space-y-12">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-black">Bạn tự tin nhất với kỹ năng nào?</h1>
                  <p className="text-slate-500 text-lg">Chọn các kỹ năng bạn cảm thấy tự hào nhất.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Giao tiếp', icon: 'forum', color: 'text-primary', bg: 'bg-primary/10' },
                    { label: 'Giải quyết vấn đề', icon: 'lightbulb', color: 'text-purple-600', bg: 'bg-purple-100' },
                    { label: 'Tư duy logic', icon: 'analytics', color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Sáng tạo', icon: 'palette', color: 'text-pink-600', bg: 'bg-pink-100' },
                    { label: 'Làm việc nhóm', icon: 'groups', color: 'text-green-600', bg: 'bg-green-100' },
                    { label: 'Quản lý thời gian', icon: 'schedule', color: 'text-orange-600', bg: 'bg-orange-100' },
                    { label: 'Thích nghi', icon: 'sync', color: 'text-indigo-600', bg: 'bg-indigo-100' },
                    { label: 'Lãnh đạo', icon: 'military_tech', color: 'text-red-600', bg: 'bg-red-100' }
                  ].map((skill, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, borderColor: '#2b6cee' }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-transparent shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className={`size-12 rounded-xl ${skill.bg} ${skill.color} flex items-center justify-center mb-4`}>
                        <span className="material-symbols-outlined !text-3xl">{skill.icon}</span>
                      </div>
                      <p className="font-bold text-sm">{skill.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center gap-4 pt-8">
                  <button onClick={handleBack} className="h-12 px-8 rounded-xl font-bold border border-slate-200 hover:bg-slate-100 transition-colors">Quay lại</button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext} 
                    className="h-12 px-12 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/20"
                  >
                    Tiếp theo
                  </motion.button>
                </div>
              </div>
            )}

            {step > 2 && (
              <div className="w-full text-center py-20">
                <h2 className="text-3xl font-bold mb-4">Hoàn tất thu thập dữ liệu...</h2>
                <p className="mb-8 text-slate-500">Chúng tôi đang phân tích dựa trên câu trả lời của bạn.</p>
                <div className="flex justify-center gap-4">
                  <button onClick={handleBack} className="h-12 px-8 rounded-xl font-bold border border-slate-200">Quay lại</button>
                  <motion.button 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    onClick={handleNext} 
                    className="h-12 px-12 rounded-xl font-bold bg-primary text-white"
                  >
                    Xem Kết Quả
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-12 text-slate-400 text-xs text-center max-w-md">
        Lưu ý: Không có câu trả lời đúng hay sai. Hãy chọn phương án phản ánh đúng nhất tính cách của bạn.
      </p>
    </div>
  );
};

export default Test;
