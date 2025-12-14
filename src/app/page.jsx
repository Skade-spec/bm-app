import Slider from "./components/Slider.jsx"
import ExpertsSection from "./components/ExpertsSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen p-6 sm:p-10 bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300">
      <main className="flex flex-row gap-12 justify-center items-center sm:items-start">
        <section className="text-center sm:text-left max-w-xl flex flex-col gap-8 pt-20">
          <h1 className="text-6xl sm:text-6xl font-extrabold leading-tight mb-4 whitespace-pre-line w-150">
            Начни готовиться{"\n"}к поступлению{"\n"}сегодня!
          </h1>
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Онлайн-платформа с тестами, уроками и аналитикой для успешной сдачи
              экзаменов.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Учись в удобном формате и следи за своим прогрессом.
            </p>
          </div>
          <button className="w-1/3 px-6 py-3 bg-[#FFF600] rounded-md dark:text-gray-900 hover:brightness-95 active:scale-95 transition-all duration-200">
            Начать обучение
          </button>
        </section>

        <section className="flex flex-wrap justify-center sm:justify-start gap-8 text-center">
          <article className="w-128 h-128 rounded-full mx-auto mb-2 bg-[#FFF600] overflow-hidden hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md hover:shadow-lg">
            <img
              src="/student.png"
              alt="фото студента"
              className="h-full object-cover select-none"
            />
          </article>
        </section>
      </main>

      <main className="flex flex-col items-center text-center mt-20">
        <h3 className="text-gray-500 uppercase tracking-widest mb-2">Наши сервисы</h3>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          Подготовься к экзамену и уверенно пройди тест!
        </h1>
        <div className="w-auto max-w-fit">
          <Slider />
        </div>
      </main>

      <section className="flex flex-col items-center text-center mt-20">
        <h2 className="text-xl font-semibold text-left w-full max-w-[1200px] px-6 sm:px-0">Популярные тесты</h2>
        <h1 className="text-4xl sm:text-4xl font-bold text-left w-full max-w-[1200px] mb-8 px-6 sm:px-0">
          Выбери направление и начни готовиться уже сегодня:
        </h1>
        
        <div className="w-full max-w-[1200px]"> 
          <div className="flex justify-center gap-6 overflow-hidden">
            <article className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-[350px] shadow-lg flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="h-20 w-20 mb-4 flex items-center justify-center">
                <div className="text-7xl">🌳</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Подготовительный тест НИШ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Подготовься и поступи уверенно.
              </p>
              <div className="flex items-center text-sm mb-6">
                <span className="text-yellow-500">4.3 ⭐⭐⭐⭐</span>
                <span className="text-gray-400 ml-2">(???)</span>
              </div>
              <div className="text-2xl font-bold text-black dark:text-white">
                ₸ 5000
              </div>
            </article>

            <article className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-[350px] shadow-lg flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="h-20 w-20 mb-4 flex items-center justify-center">
                <div className="text-7xl">📚</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Подготовительный тест БИЛ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Реальные тесты — реальные результаты.
              </p>
              <div className="flex items-center text-sm mb-6">
                <span className="text-yellow-500">4.3 ⭐⭐⭐⭐</span>
                <span className="text-gray-400 ml-2">(???)</span>
              </div>
              <div className="text-2xl font-bold text-black dark:text-white">
                ₸ 4500
              </div>
            </article>
            
            <article className="bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-[350px] shadow-lg flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-xl">
              <div className="h-20 w-20 mb-4 flex items-center justify-center">
                <div className="text-7xl">🎓</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Подготовительный тест РФМШ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Тренируйся и побеждай на экзамене.
              </p>
              <div className="flex items-center text-sm mb-6">
                <span className="text-yellow-500">4.3 ⭐⭐⭐⭐</span>
                <span className="text-gray-400 ml-2">(???)</span>
              </div>
              <div className="text-2xl font-bold text-black dark:text-white">
                ₸ 5500
              </div>
            </article>
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <div className="flex space-x-2 mb-8">
              <span className="block h-2 w-6 bg-black dark:bg-white rounded-full"></span>
              <span className="block h-2 w-2 bg-gray-400 dark:bg-gray-700 rounded-full"></span>
              <span className="block h-2 w-2 bg-gray-400 dark:bg-gray-700 rounded-full"></span>
            </div>
            <button className="px-8 py-3 bg-[#FFF600] rounded-md text-black dark:text-gray-900 font-medium hover:brightness-95 active:scale-95 transition-all duration-200">
              Начать подготовку
            </button>
          </div>
        </div>
      </section>

      <ExpertsSection />

      <TestimonialSection />

    </div>
  );
}
