
import React from 'react';

const Auth: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center">
        <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
          <span className="material-symbols-outlined !text-3xl">cloud_done</span>
        </div>
        <h1 className="text-3xl font-black mb-3 text-center">Lưu lại hành trình</h1>
        <p className="text-slate-500 text-center mb-10 leading-relaxed">
          Đừng để kết quả của bạn bị mất. Đăng nhập để xem lại lộ trình nghề nghiệp bất cứ lúc nào.
        </p>
        
        <div className="w-full space-y-4 mb-10">
          <button className="w-full h-14 flex items-center justify-center gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
            <img src="https://www.google.com/favicon.ico" className="size-5" alt="Google" />
            Tiếp tục với Google
          </button>
          <button className="w-full h-14 flex items-center justify-center gap-4 bg-[#1877F2] text-white rounded-xl font-bold hover:opacity-90 transition-all">
            <span className="material-symbols-outlined !text-xl">facebook</span>
            Tiếp tục với Facebook
          </button>
        </div>

        <div className="w-full flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
          <span className="text-xs font-bold text-slate-400 uppercase">Hoặc email</span>
          <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold px-2">Email</label>
            <input 
              type="email" 
              placeholder="email@vi-du.com" 
              className="w-full h-14 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between px-2">
               <label className="text-sm font-bold">Mật khẩu</label>
               <a href="#" className="text-xs font-bold text-primary">Quên mật khẩu?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full h-14 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-6 focus:ring-primary focus:border-primary"
            />
          </div>
          <button className="w-full h-14 bg-primary text-white rounded-xl font-black text-lg shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all mt-4">
            Đăng nhập
          </button>
        </form>

        <p className="mt-10 text-sm text-slate-500">
          Bạn mới sử dụng CareerPath? <a href="#" className="text-primary font-bold">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
