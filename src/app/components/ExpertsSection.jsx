import React from 'react';
import { Instagram, User } from 'lucide-react'; 
const expertsData = [
    {
        name: "?????? ??????",
        title: "Эксперт ???",
        description: "?",
        hasSocial: false,
        isMale: true,
    },
    {
        name: "?????? ??????",
        title: "Эксперт ???",
        description: "?",
        hasSocial: true,
        isMale: true,
    },
    {
        name: "?????? ??????",
        title: "Эксперт ???",
        description: "?",
        hasSocial: true,
        isMale: false,
    },
    {
        name: "?????? ??????",
        title: "Эксперт ???",
        description: "?",
        hasSocial: true,
        isMale: false,
    },
];

const ExpertCard = ({ name, title, description, hasSocial, isMale }) => {
    return (
        <article className="bg-[#f8f8f8] dark:bg-[#1f1f1f] p-6 sm:p-8 rounded-lg w-full max-w-xs transition-shadow duration-300 hover:shadow-xl">
            <div className="flex justify-center mb-6">
                {isMale ? (
                    <User className="h-24 w-24 text-black dark:text-white" />
                ) : (
                    <svg className="h-24 w-24 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                        <path d="M12 11a5 5 0 0 0 5 5" /> 
                    </svg>
                )}
            </div>

            <div className="text-center">
                <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{name}</h3>
                <p className="text-[#FFC700] text-lg font-semibold mb-4">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                    {description}
                </p>
            </div>

            {hasSocial && (
                <div className="flex justify-center mt-6">
                    <button className="p-2 border border-gray-400 dark:border-gray-500 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200">
                        <Instagram className="h-5 w-5 text-black dark:text-white" />
                    </button>
                </div>
            )}
        </article>
    );
};

export default function ExpertsSection() {
    return (
        <section className="mt-20 py-10 bg-white dark:bg-[#111] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Эксперты</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-6">Наши эксперты</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                    Опытные наставники, которые помогут тебе подготовиться к экзаменам НИШ, БИЛ и РФМШ. 
                    Сотни учеников уже поступили с их помощью.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {expertsData.map((expert, index) => (
                        <ExpertCard key={index} {...expert} />
                    ))}
                </div>
            </div>
        </section>
    );
}