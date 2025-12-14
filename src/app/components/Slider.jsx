"use client"

import React, { useState } from 'react';

// Компонент для отдельной карточки слайдера
const SliderCard = ({ iconSrc, title, description, isPrimary, linkText, linkHref = '#', isCentered = false, progress = 0 }) => {
    // Вспомогательный компонент для иконки, если это SVG-путь
    const SvgIcon = ({ d, className }) => (
        <svg className={className} viewBox="0 0 24 24">
            <path d={d} />
        </svg>
    );

    // Стиль кнопки-ссылки
    const LinkButton = ({ text, href, isPrimaryStyle }) => (
        <a 
            href={href} 
            className={`font-semibold flex items-center gap-2 w-fit transition-all duration-200 ${
                isPrimaryStyle 
                    ? 'text-black hover:opacity-80'
                    : 'text-black dark:text-white hover:text-[#FFF600]'
            }`}
        >
            {text}
            {/* Иконка стрелки вправо */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
    );

    const baseClasses = "flex flex-col p-6 sm:p-10 rounded-2xl shadow-xl transition-colors duration-500 ease-in-out h-full min-h-[350px] transform origin-center";
    
    // Начальные и конечные значения для интерполяции
    const INITIAL_SCALE = 0.9;
    const FINAL_SCALE = 1.05;
    const INITIAL_OPACITY = 0.5;
    const FINAL_OPACITY = 1.0;

    let cardClasses = "";
    let opacityStyle = {};
    let scaleStyle = {};

    // Определяем, какая карточка рендерится: Текущая (progress=0), Предыдущая (progress=1), или Следующая (progress=-1)
    if (isCentered) {
        // --- Активный (Центральный) элемент ---
        const currentScale = FINAL_SCALE - Math.abs(progress) * (FINAL_SCALE - INITIAL_SCALE);
        const currentOpacity = FINAL_OPACITY - Math.abs(progress) * (FINAL_OPACITY - INITIAL_OPACITY);
        scaleStyle = { transform: `scale(${currentScale})` };
        opacityStyle = { opacity: currentOpacity };

        // Если primary (желтая) - всегда text-black
        cardClasses = `${baseClasses} ${isPrimary ? 'bg-[#FFF600] text-black' : 'bg-white dark:bg-[#1f1f1f] text-black dark:text-white border border-gray-100 dark:border-gray-800'} shadow-2xl`;
    } else {
        // --- Соседние элементы (Предыдущий/Следующий) ---
        let progressFromCenter = 0;
        
        if (progress > 0) {
            // Движение вправо (Левый сосед -> Центр)
            progressFromCenter = progress; 
        } else if (progress < 0) {
            // Движение влево (Правый сосед -> Центр)
            progressFromCenter = Math.abs(progress);
        }

        const currentScale = INITIAL_SCALE + progressFromCenter * (FINAL_SCALE - INITIAL_SCALE);
        const currentOpacity = INITIAL_OPACITY + progressFromCenter * (FINAL_OPACITY - INITIAL_OPACITY);
        
        scaleStyle = { transform: `scale(${currentScale})` };
        opacityStyle = { opacity: currentOpacity };

        const nonPrimaryColor = "bg-white dark:bg-[#1f1f1f] text-black dark:text-white border border-gray-100 dark:border-gray-800";
        cardClasses = `${baseClasses} ${nonPrimaryColor} shadow-xl`;
    }
    
    // Объединяем стили
    const combinedStyle = { ...opacityStyle, ...scaleStyle };

    // Логика цвета текста описания:
    // 1. Если карточка желтая (isPrimary), текст всегда должен быть темным (text-gray-900).
    // 2. Иначе, используем стандартную логику: темный в светлом режиме, светлый в темном режиме для активной карточки.
    const descriptionTextColor = 
        isPrimary 
            ? 'text-gray-900' 
            : (isCentered ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-500');

    return (
        <div 
            className={cardClasses}
            style={combinedStyle} // Применяем динамические стили
        >
            <div className="flex items-center gap-4 mb-4">
                {isPrimary ? (
                    <img src={iconSrc} alt="Иконка" className="w-10 h-10" />
                ) : (
                    <SvgIcon d={iconSrc} className="w-10 h-10 text-[#FFF600] fill-current" />
                )}
                <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
            </div>
            {/* ИСПРАВЛЕНИЕ: Применяем динамический цвет текста для описания */}
            <p className={`text-base sm:text-lg mb-8 flex-grow ${descriptionTextColor}`}>
                {description}
            </p>
            <LinkButton text={linkText} href={linkHref} isPrimaryStyle={isPrimary && isCentered} />
        </div>
    );
};

// Главный компонент Слайдера
export default function Slider() {
    const slides = [
        {
            title: "Подготовка к экзаменам",
            description: "Реальные тесты, таймер, статистика ошибок. Учись в удобном формате и следи за своим прогрессом.",
            isPrimary: true,
            iconSrc: "/computer.svg",
            linkText: "Попробовать бесплатно",
            id: 0
        },
        {
            title: "Индивидуальные тест-планы",
            description: "Персональные подборки вопросов по твоим слабым темам. Мы анализируем ваши результаты и создаем уникальные планы обучения.",
            isPrimary: false,
            // Путь для иконки компьютера/монитора
            iconSrc: "M10 17H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v3",
            linkText: "Подробнее",
            id: 1
        },
        {
            title: "Аналитика и рекомендации",
            description: "Система подскажет, где ты теряешь баллы и как улучшить результат. Получай мгновенные и точные рекомендации.",
            isPrimary: false,
            // Путь для иконки графика/аналитики
            iconSrc: "M3 3v18h18M18 17l-3.5-3.5M11.5 8l3-3M18 6.5l-3.5 3.5M6 13.5l4.5 4.5",
            linkText: "Узнать больше",
            id: 2
        },
        {
            title: "Поддержка 24/7",
            description: "Наши наставники всегда на связи, чтобы ответить на любые ваши вопросы и оказать помощь в обучении.",
            isPrimary: false,
            // Путь для иконки поддержки
            iconSrc: "M15 11.025v2.85l-1.575-1.55-2.85 2.85L12 18.025l-2.85-2.85L6.6 15.65 8.175 17.2l-3.15 3.15h14.7l-3.15-3.15 1.575-1.55zM12 21.025v-10",
            linkText: "Связаться",
            id: 3
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [dragStart, setDragStart] = useState(null);
    const [dragOffset, setDragOffset] = useState(0); // Смещение в реальном времени во время свайпа
    const [isDragging, setIsDragging] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true); // Для управления CSS-переходом
    const totalSlides = slides.length;
    const swipeThreshold = 50; // Минимальное расстояние свайпа (в пикселях)
    const transitionDuration = 500; 

    // Максимальное расстояние перетаскивания (для расчета progress, примерно половина ширины слайда)
    const MAX_DRAG_DISTANCE = 200; 

    // Коэффициент прогресса перетаскивания (от -1.0 до 1.0)
    // -1.0 = Полностью сдвинуто к следующему
    // 0.0 = В центре
    // 1.0 = Полностью сдвинуто к предыдущему
    const dragProgress = Math.min(1, Math.max(-1, dragOffset / MAX_DRAG_DISTANCE));

    // Вспомогательная функция для получения циклического индекса
    const getSlideIndex = (offset) => {
        let index = activeIndex + offset;
        if (index < 0) {
            return totalSlides - 1; // Зацикливание назад
        }
        if (index >= totalSlides) {
            return 0; // Зацикливание вперед
        }
        return index;
    };

    // Общий обработчик начала свайпа/перетаскивания
    const handleStart = (e) => {
        // Игнорируем начало перетаскивания, если элемент интерактивный (ссылка, кнопка)
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

        setIsDragging(true);
        setIsTransitioning(false); // Отключаем CSS-переход для мгновенного следования
        
        // Используем clientX для мыши или touches[0].clientX для сенсора
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setDragStart(clientX);
        
        // Устанавливаем курсор
        if (e.currentTarget) {
            e.currentTarget.style.cursor = 'grabbing';
        }
    };

    // Общий обработчик движения
    const handleMove = (e) => {
        if (!isDragging || dragStart === null) return;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const currentDragOffset = clientX - dragStart; // Текущее смещение

        // Ограничиваем свайп, чтобы он не уходил слишком далеко от центра (визуально)
        const maxDrag = MAX_DRAG_DISTANCE;
        const limitedOffset = Math.max(-maxDrag, Math.min(maxDrag, currentDragOffset));
        
        setDragOffset(limitedOffset);
        
        // Предотвращаем прокрутку страницы во время свайпа на мобильных
        if (e.touches) {
            e.preventDefault();
        }
    };

    // Общий обработчик окончания свайпа/перетаскивания
    const handleEnd = (e) => {
        if (!isDragging || dragStart === null) {
            // Если перетаскивание неактивно или dragStart не установлен, просто сбрасываем стили курсора
            if (e.currentTarget) e.currentTarget.style.cursor = 'grab';
            return;
        }
        
        const deltaX = dragOffset; 
        
        // 1. Включаем CSS-переход обратно для плавного возвращения
        setIsTransitioning(true);
        
        // 2. Обработка свайпа (переход к следующему/предыдущему)
        if (Math.abs(deltaX) > swipeThreshold) {
            if (deltaX < 0) { // Свайп влево (отрицательный deltaX): переход к следующему
                setActiveIndex(getSlideIndex(1));
            } else { // Свайп вправо (положительный deltaX): переход к предыдущему
                setActiveIndex(getSlideIndex(-1));
            }
        }
        
        // 3. Сброс состояния
        setDragStart(null);
        setIsDragging(false);
        setDragOffset(0); // Плавно вернется в 0 благодаря isTransitioning(true)
        
        if (e.currentTarget) e.currentTarget.style.cursor = 'grab';
    };

    // Установка класса перехода на контейнере
    const transitionClass = isTransitioning 
        ? `transition-transform duration-${transitionDuration} ease-out` 
        : 'transition-none';

    // Стили для контейнера, который содержит 3 слайда. Он сдвигается на dragOffset
    const containerClasses = `flex justify-center items-center cursor-grab active:cursor-grabbing ${transitionClass}`;
    
    // Определяем прогресс для каждого из трех отображаемых слайдов
    const prevSlideProgress = dragProgress > 0 ? dragProgress : 0; // Активен только при сдвиге вправо (progress > 0)
    const currentSlideProgress = Math.abs(dragProgress); // Активен всегда, уменьшается при сдвиге
    const nextSlideProgress = dragProgress < 0 ? Math.abs(dragProgress) : 0; // Активен только при сдвиге влево (progress < 0)

    // Присвоение прогресса:
    // prevSlide (слева): progress > 0 (движется в центр)
    // currentSlide (центр): Math.abs(progress) (движется из центра)
    // nextSlide (справа): progress < 0 (движется в центр)

    return (
        <div className="w-full relative max-w-7xl mx-auto py-8 overflow-hidden select-none">
            
            {/* 1. Контейнер слайдов с визуализацией предыдущего/текущего/следующего */}
            <div 
                className={containerClasses}
                // Применяем transform для сдвига контейнера во время перетаскивания
                style={{ transform: `translateX(${dragOffset}px)` }}
                // Добавляем обработчики свайпов и перетаскивания
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd} // Обработка отпускания кнопки мыши вне элемента
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
            >
                {/* Слайд 1: Предыдущий (показан слева). progress передаем положительный, т.е. 
                   только когда dragProgress > 0 (двигаемся вправо) */}
                <div className="w-1/3 p-2 md:p-4 opacity-50 hidden sm:block">
                    <SliderCard {...slides[getSlideIndex(-1)]} isCentered={false} progress={prevSlideProgress} />
                </div>

                {/* Слайд 2: Активный/Центральный (увеличен) */}
                <div className="w-full sm:w-1/3 p-2 md:p-4 z-10">
                    <SliderCard {...slides[activeIndex]} isCentered={true} progress={currentSlideProgress} />
                </div>

                {/* Слайд 3: Следующий (показан справа). progress передаем положительный, т.е.
                    только когда dragProgress < 0 (двигаемся влево) */}
                <div className="w-1/3 p-2 md:p-4 opacity-50 hidden sm:block">
                    <SliderCard {...slides[getSlideIndex(1)]} isCentered={false} progress={nextSlideProgress} />
                </div>
            </div>

            {/* 2. Кнопки навигации (Prev/Next) */}
            <div className="block">
                {/* Кнопка "Назад" */}
                <button
                    onClick={() => setActiveIndex(getSlideIndex(-1))}
                    className="absolute top-1/2 left-0 sm:left-4 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-20"
                    aria-label="Предыдущий слайд"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                {/* Кнопка "Вперед" */}
                <button
                    onClick={() => setActiveIndex(getSlideIndex(1))}
                    className="absolute top-1/2 right-0 sm:right-4 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-20"
                    aria-label="Следующий слайд"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </div>


            {/* 3. Навигационные точки (dots) с эффектом палки '-' */}
            <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'w-8 bg-black dark:bg-white' // Активная "палка"
                                : 'w-3 bg-gray-300 dark:bg-gray-600' // Неактивная "точка"
                        }`}
                        aria-label={`Перейти к слайду ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}