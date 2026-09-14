import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "site-language";

const translations = {
  "Home": "خانه",
  "About Me": "درباره من",
  "Contact": "تماس با من",
  "Projects": "پروژه‌ها",
  "Download CV": "دانلود رزومه",
  "Light Mode": "حالت روشن",
  "Dark Mode": "حالت تاریک",
  "Front-End Developer building modern, responsive and user-friendly web experiences with React.": "توسعه‌دهنده فرانت‌اند؛ ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند با React.",
  "Navigation": "دسترسی سریع",
  "Connect": "ارتباط با من",
  "About": "درباره من",
  "All rights reserved.": "تمامی حقوق محفوظ است.",
  "Hi, I'm Elias 👋": "سلام، من الیاس هستم 👋",
  "Front-End Developer": "توسعه‌دهنده فرانت‌اند",
  "I build modern, responsive and user-friendly web experiences with React and modern front-end technologies.": "من تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند را با React و تکنولوژی‌های روز فرانت‌اند می‌سازم.",
  "View My Projects": "مشاهده پروژه‌ها",
  "Contact Me": "تماس با من",
  "Elias - Front-End Developer": "الیاس - توسعه‌دهنده فرانت‌اند",
  "Technologies I Work With": "تکنولوژی‌هایی که با آن‌ها کار می‌کنم",
  "A little bit about me and what I do.": "کمی درباره من و کاری که انجام می‌دهم.",
  "Elias": "الیاس",
  "Main Focus": "تمرکز اصلی",
  "Currently focused on": "در حال حاضر تمرکز روی",
  "I'm a Front-End Developer": "من یک توسعه‌دهنده فرانت‌اند هستم",
  "I'm focused on building modern, responsive and user-friendly web experiences. I enjoy turning ideas into clean and functional interfaces.": "تمرکز من روی ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند است. من از تبدیل ایده‌ها به رابط‌های کاربری تمیز و کاربردی لذت می‌برم.",
  "I'm continuously improving my skills through hands-on projects and learning modern front-end technologies.": "من به‌طور مداوم مهارت‌هایم را از طریق پروژه‌های عملی و یادگیری تکنولوژی‌های روز فرانت‌اند بهبود می‌دهم.",
  "More About Me": "بیشتر درباره من",
  "Featured Projects": "پروژه‌های منتخب",
  "Some of the projects I've built while learning and improving my front-end development skills.": "چند نمونه از پروژه‌هایی که در مسیر یادگیری و بهبود مهارت‌های فرانت‌اند خود ساخته‌ام.",
  "Project One": "پروژه یک",
  "A modern and responsive web application built with modern front-end technologies.": "یک اپلیکیشن وب مدرن و ریسپانسیو که با تکنولوژی‌های روز فرانت‌اند ساخته شده است.",
  "Project Two": "پروژه دو",
  "A clean and responsive website focused on usability, performance and modern UI.": "یک وب‌سایت تمیز و ریسپانسیو با تمرکز بر کاربردپذیری، عملکرد و رابط کاربری مدرن.",
  "Project Three": "پروژه سه",
  "A practical web project built to improve my front-end development skills.": "یک پروژه وب عملی که برای تقویت مهارت‌های توسعه فرانت‌اند من ساخته شده است.",
  "GitHub": "گیت‌هاب",
  "Demo":'اجرا',
  "View All Projects": "مشاهده همه پروژه‌ها",
  "Let's build something amazing together": "بیایید با هم چیزی فوق‌العاده بسازیم",
  "I'm open to new projects, collaborations and opportunities. Feel free to reach out and let's create something great.": "من برای پروژه‌های جدید، همکاری‌ها و فرصت‌ها آماده‌ام. خوشحال می‌شوم باهام در ارتباط باشید تا با هم چیز خوبی بسازیم.",
  "Get to know me, my skills, and my journey as a Front-End Developer.": "با من، مهارت‌هایم و مسیرم به‌عنوان یک توسعه‌دهنده فرانت‌اند آشنا شوید.",
  "Who I Am": "من کی هستم",
  "Hi, I'm Elias, a Front-End Developer focused on building modern, responsive and user-friendly web experiences.": "سلام، من الیاس هستم؛ یک توسعه‌دهنده فرانت‌اند که روی ساخت تجربه‌های وب مدرن، ریسپانسیو و کاربرپسند تمرکز دارم.",
  "I enjoy turning ideas into clean and functional interfaces. I'm continuously improving my skills through hands-on projects and learning modern front-end technologies.": "من از تبدیل ایده‌ها به رابط‌های کاربری تمیز و کاربردی لذت می‌برم و به‌طور مداوم مهارت‌هایم را از طریق پروژه‌های عملی و یادگیری تکنولوژی‌های روز بهبود می‌دهم.",
  "Responsive Design": "طراحی ریسپانسیو",
  "Skills & Tools": "مهارت‌ها و ابزارها",
  "Technologies and tools I use to build modern and responsive web experiences.": "تکنولوژی‌ها و ابزارهایی که برای ساخت تجربه‌های وب مدرن و ریسپانسیو استفاده می‌کنم.",
  "Front-End": "فرانت‌اند",
  "Tools & Workflow": "ابزارها و روند کاری",
  "Learning Journey": "مسیر یادگیری",
  "A continuous journey of learning, building projects, and improving my front-end development skills.": "مسیری پیوسته از یادگیری، ساخت پروژه و بهبود مهارت‌های توسعه فرانت‌اند.",
  "Front-End Foundations": "پایه‌های فرانت‌اند",
  "Started building a strong foundation in HTML and CSS and learned how to create structured and responsive web pages.": "شروع به ساخت پایه‌ای قوی در HTML و CSS کردم و یاد گرفتم چطور صفحات وب ساختاریافته و ریسپانسیو بسازم.",
  "JavaScript": "جاوااسکریپت",
  "Continued learning JavaScript and focused on creating interactive and functional web experiences.": "به یادگیری جاوااسکریپت ادامه دادم و روی ساخت تجربه‌های وب تعاملی و کاربردی تمرکز کردم.",
  "Modern UI Development": "توسعه رابط کاربری مدرن",
  "Started working with Bootstrap, React and MUI to build modern, reusable and responsive user interfaces.": "با Bootstrap، React و MUI شروع به کار کردم تا رابط‌های کاربری مدرن، قابل استفاده مجدد و ریسپانسیو بسازم.",
  "Development Workflow": "روند توسعه",
  "Learning Git and GitHub while building hands-on projects and continuously improving my development workflow.": "در حین ساخت پروژه‌های عملی، Git و GitHub را یاد گرفتم و به‌طور مداوم روند توسعه خود را بهبود دادم.",
  "Interested in working together?": "علاقه‌مند به همکاری هستید؟",
  "I'm always interested in learning, building new projects, and exploring opportunities to create great web experiences.": "من همیشه به یادگیری، ساخت پروژه‌های جدید و بررسی فرصت‌ها برای خلق تجربه‌های وب عالی علاقه‌مندم.",
  "Have a project in mind or just want to say hello? Feel free to get in touch.": "پروژه‌ای در ذهن دارید یا فقط می‌خواهید سلام کنید؟ خوشحال می‌شوم باهام در ارتباط باشید.",
  "Let's Talk": "بیایید صحبت کنیم",
  "Have a question, a project idea, or an opportunity? I'd be happy to hear from you.": "سوالی دارید، ایده‌ای برای یک پروژه یا یک فرصت همکاری؟ خوشحال می‌شوم نظرتان را بشنوم.",
  "Email": "ایمیل",
  "LinkedIn": "لینکدین",
  "Send Me a Message": "برای من پیام بفرستید",
  "Name": "نام",
  "Subject": "موضوع",
  "Message": "پیام",
  "Send Message": "ارسال پیام",
  "A collection of projects I've built while learning and improving my skills.": "مجموعه‌ای از پروژه‌هایی که در مسیر یادگیری و بهبود مهارت‌هایم ساخته‌ام.",
  "All": "همه",
  "Project Four": "پروژه چهار",
  "Project Preview": "پیش‌نمایش پروژه",
  "Page Not Found": "صفحه پیدا نشد",
  "Sorry, the page you're looking for doesn't exist or may have been moved.": "متاسفیم، صفحه‌ای که دنبالش می‌گردید وجود ندارد یا ممکن است جابه‌جا شده باشد.",
  "Back to Home": "بازگشت به خانه",
};

const LanguageContext = createContext({
  language: "fa",
  toggleLanguage: () => {},
  t: (text) => text,
});

export function UseLanguage() {
  return useContext(LanguageContext);
}

function getInitialLanguage() {
  if (typeof window === "undefined") return "fa";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fa" ? stored : "fa";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const t = (text) =>
    language === "fa" ? translations[text] || text : text;

  const value = useMemo(
    () => ({ language, toggleLanguage, t }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
