"use client";

import { Star, Clock, FileText } from "lucide-react"; // Не забудьте установить lucide-react

// Вспомогательный компонент для отображения уровня сложности
const DifficultyTag = ({ level }) => {
  let colorClass = "";
  let ringClass = "";

  switch (level.toLowerCase()) {
    case "легкий":
      colorClass = "text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900";
      ringClass = "ring-green-300 dark:ring-green-700";
      break;
    case "средний":
      colorClass = "text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900";
      ringClass = "ring-yellow-300 dark:ring-yellow-700";
      break;
    case "сложный":
      colorClass = "text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900";
      ringClass = "ring-red-300 dark:ring-red-700";
      break;
    default:
      colorClass = "text-gray-700 dark:text-gray-400 bg-gray-100 dark:bg-gray-800";
      ringClass = "ring-gray-300 dark:ring-gray-700";
      break;
  }
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ring-1 ${ringClass} ${colorClass} transition-colors duration-300`}
    >
      {level}
    </span>
  );
};

// Компонент карточки теста
const TestCard = ({
  title,
  description,
  questions,
  duration,
  rating,
  difficulty,
  price,
  tag,
  grade,
  isFirst = false,
}) => {
  return (
    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-lg p-5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800">
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
            {tag}
          </span>
          <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2 py-0.5 rounded-md">
            {grade}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>**{questions}** вопросов</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>**{duration}** минут</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />
            <span>**{rating}**</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <DifficultyTag level={difficulty} />
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {price !== null ? `₸${price.toLocaleString("ru-RU")}` : "Бесплатно"}
          </span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
              Подробнее
            </button>
            {isFirst ? (
              <button className="px-4 py-2 text-sm font-bold rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:scale-95 transition-all duration-200">
                Пройти тест
              </button>
            ) : (
              <button className="px-4 py-2 text-sm font-bold rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 active:scale-95 transition-all duration-200">
                Купить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CoursesPage() {
  // Обратите внимание: фон компонента (div) должен быть прозрачным или соответствовать фону родителя (Home)
  // В данном случае, основной фон задан в Home, поэтому здесь мы используем bg-transparent
  return (
    <div className="min-h-screen bg-transparent p-6 md:p-10 max-w-7xl mx-auto">
      {/* Заголовок и Описание */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Каталог тестов
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Найдите подходящий тест для подготовки к экзаменам
        </p>
      </header>

      {/* Фильтры и Сортировка */}
      <div className="bg-white dark:bg-[#1f1f1f] p-6 rounded-xl shadow-md mb-10 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
          Фильтры и сортировка
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {/* Выбор типа теста */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1">Тип теста</label>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300">
              <option>НИШ</option>
            </select>
          </div>

          {/* Выбор предмета */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1">Предмет</label>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300">
              <option>Математика</option>
            </select>
          </div>

          {/* Выбор класса */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1">Класс</label>
            <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300">
              <option>6</option>
            </select>
          </div>

          {/* Кнопки действий */}
          <div className="flex items-end space-x-3 mt-auto pt-2">
            <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              Применить
            </button>
            <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              Сбросить
            </button>
          </div>
        </div>
      </div>

      {/* Каталог тестов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Карточки теста */}
        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Математика - Базовый уровень"
          description="Полный тест по математике для подготовке к НИШ"
          questions={40}
          duration={60}
          rating={4.3}
          difficulty="Легкий"
          price={null}
          isFirst={true}
        />

        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Количественные характеристики - Базовый уровень"
          description="Полный тест по количественным характеристикам для подготовке к НИШ"
          questions={180}
          duration={240}
          rating={4.3}
          difficulty="Средний"
          price={2000}
        />

        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Естествознание - Базовый уровень"
          description="Полный тест по естествознанию для подготовке к НИШ"
          questions={180}
          duration={240}
          rating={4.3}
          difficulty="Легкий"
          price={3000}
        />

        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Казахский язык - Базовый уровень"
          description="Полный тест по математике для подготовке к НИШ"
          questions={180}
          duration={240}
          rating={4.3}
          difficulty="Легкий"
          price={1500}
        />

        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Английский язык - Базовый уровень"
          description="Полный тест по математике для подготовке к НИШ"
          questions={180}
          duration={240}
          rating={4.3}
          difficulty="Легкий"
          price={1000}
        />

        <TestCard
          tag="НИШ"
          grade="6 класс"
          title="Русский язык - Базовый уровень"
          description="Полный тест по математике для подготовке к НИШ"
          questions={180}
          duration={240}
          rating={4.3}
          difficulty="Легкий"
          price={1000}
        />
      </div>
    </div>
  );
}