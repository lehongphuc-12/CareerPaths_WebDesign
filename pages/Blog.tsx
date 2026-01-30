
import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const posts = [
    { title: "Gen Z nên chọn ngành gì năm 2025?", date: "15 Th05, 2024", author: "Dr. Minh Anh", category: "Xu hướng", img: "https://picsum.photos/seed/genz/600/400" },
    { title: "Mô hình Holland là gì và tại sao nó hiệu quả?", date: "12 Th05, 2024", author: "Career Team", category: "Khoa học", img: "https://picsum.photos/seed/science/600/400" },
    { title: "5 kỹ năng mềm cần thiết cho kỷ nguyên AI", date: "10 Th05, 2024", author: "Coach Tuấn Lê", category: "Kỹ năng", img: "https://picsum.photos/seed/skills/600/400" },
    { title: "Làm sao để thuyết phục cha mẹ về ngành học mình thích?", date: "08 Th05, 2024", author: "Minh Trang", category: "Tư vấn", img: "https://picsum.photos/seed/family/600/400" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">Cẩm nang <span className="text-primary">Hướng nghiệp</span></h1>
        <p className="text-slate-500 text-lg">Cập nhật những thông tin mới nhất về thị trường lao động và những bài viết chuyên sâu từ đội ngũ cố vấn.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white text-primary text-xs font-bold rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="px-2 space-y-3">
              <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="size-1 bg-slate-200 rounded-full"></span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 line-clamp-2">
                Tìm hiểu những thách thức và cơ hội mới cho giới trẻ trong bối cảnh nền kinh tế số đang thay đổi từng ngày...
              </p>
              <div className="pt-2">
                <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Đọc thêm <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 size-64 bg-primary/20 rounded-full blur-3xl -mt-20 -mr-20"></div>
        <h2 className="text-3xl font-black mb-6 relative z-10">Đừng bỏ lỡ những lời khuyên bổ ích</h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto relative z-10">Đăng ký nhận bản tin hàng tuần về xu hướng nghề nghiệp và cơ hội thực tập mới nhất.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
          <input 
            type="email" 
            placeholder="Email của bạn"
            className="flex-1 h-14 rounded-xl bg-white/10 border-white/20 px-6 focus:ring-primary focus:border-primary text-white"
          />
          <button className="h-14 px-8 bg-primary rounded-xl font-bold hover:bg-primary/90 transition-all">Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
