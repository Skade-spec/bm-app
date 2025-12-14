import React from 'react';

export default function TestimonialSection() {
    return (
        <section className="mt-20 py-20 bg-[#F9F6ED] dark:bg-[#1f1f1f] transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Логотип */}
                <div className="mb-10">
                    {/* Я использую простой текст и стилизацию, так как у меня нет файла логотипа Bolashak Mektebi */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black leading-none text-black dark:text-white">BM</span>
                        <span className="text-sm font-semibold tracking-widest text-black dark:text-white mt-1">Bolashak Mektebi</span>
                    </div>
                </div>

                {/* Основной текст цитаты */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white leading-tight mb-16">
                    Идеально для тех, кто хочет учиться, развиваться 
                    <br />
                    и достигать новых высот.
                </h1>

                {/* Иконка пользователя */}
                <div className="flex justify-center mb-4">
                    {/* Используем иконку User для аватара */}
                    <svg className="h-16 w-16 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12 8.5 10.43 8.5 8.5 10.07 5 12 5zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                </div>

                {/* Имя и должность */}
                <p className="text-lg font-bold text-black dark:text-white mb-2">
                    ???? ??????
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Поступающий в НИШ (Nazarbayev Intellectual Schools)
                </p>

            </div>
        </section>
    );
}