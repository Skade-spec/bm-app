import React from 'react';

// Данные для карточек преимуществ
const advantagesData = [
    {
        id: 1,
        title: "Стандартизированная подготовка",
        description: "Все материалы соответствуют официальным требованиям тестов и помогают ученикам системно готовиться.",
    },
    {
        id: 2,
        title: "Снижение затрат",
        description: "Вся подготовка проходит онлайн — не нужно тратить деньги на дополнительные курсы или репетиторов.",
    },
    {
        id: 3,
        title: "Индивидуальный подход",
        description: "Каждый ученик получает персонализированные задания и рекомендации по развитию слабых сторон.",
    },
    {
        id: 4,
        title: "Доступная стоимость",
        description: "Наши курсы и материалы доступны каждому ученику без лишних финансовых барьеров.",
    },
    {
        id: 5,
        title: "Удовлетворённость учеников",
        description: "Мы следим, чтобы обучение было понятным, интересным и результативным, повышая уверенность учеников.",
    },
    {
        id: 6,
        title: "Интерактивное обучение",
        description: "Наши курсы сочетают теорию и практику через увлекательные задания, симуляции и живые примеры, чтобы знания закреплялись на практике.",
    },
];

const AdvantageCard = ({ id, title, description }) => {
    return (
        <article className="bg-[#f8f8f8] dark:bg-gray-800 p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg h-full">
            <div className="text-3xl font-extrabold text-[#FFC700] mb-4">{id}</div>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
            </p>
        </article>
    );
};

export default function AdvantagesSection() {
    return (
        <section className="mt-20 py-10 sm:py-20 bg-white dark:bg-[#111] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Заголовок */}
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Наши преимущества</p>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white mb-12 max-w-4xl mx-auto leading-snug">
                    С Bolashak Mektebi вы получаете все
                    <br />
                    возможности для эффективной подготовки к
                    <br />
                    тестам НИШ и БИЛ РФМШ.
                </h1>

                {/* Сетка преимуществ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {advantagesData.map((advantage) => (
                        <AdvantageCard key={advantage.id} {...advantage} />
                    ))}
                </div>
                
            </div>
        </section>
    );
}