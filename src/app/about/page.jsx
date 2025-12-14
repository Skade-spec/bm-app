"use client";
import Link from "next/link";
import Image from "next/image";
// AdvantagesSection оставлен, но не используется в текущем макете, чтобы показать только контент с изображения
import AdvantagesSection from "../components/AdvantagesSection"; 

// Замечание: Для работы с изображениями в Next.js (если они не из 'public'),
// их нужно будет импортировать или использовать внешние ссылки.
// Для простоты, я буду использовать прямые ссылки в 'src', предполагая,
// что они находятся в папке 'public' вашего проекта.

export default function AboutPage() {
  return (
    <div className="font-sans flex flex-col min-h-screen p-6 sm:p-10 bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300">
      <main className="container mx-auto">
        {/* --- Секция 1: О нас / Bolashak Mektebi --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-24 lg:mb-32">
          {/* Левая колонка (Текст) */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 max-w-lg lg:max-w-none">
            <h2 className="text-xl font-medium text-black/70 dark:text-white/70">
              О нас
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
              <span className="text-[#FBB000]">Bolashak Mektebi</span> —
              <br />
              Предоставляем лучшие
              <br />
              возможности подготовки к
              <br />
              тестам НИШ и БИЛ РФМШ
              <br />
              для учеников
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
              Мы стремимся, чтобы обучение было **эффективным, интересным** и давало реальные результаты.
              <br />
              Присоединяйся к нам и сделай **первый шаг** на пути к успеху на пути к НИШ и БИЛ РФМШ!
            </p>
            <Link href="/prepare" className="inline-flex w-fit items-center gap-2 px-8 py-3 bg-[#FBB000] text-black font-semibold rounded-lg hover:brightness-95 active:scale-[.98] transition-all duration-200 shadow-md">
              Начать подготовку
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Правая колонка (Изображения) */}
          <div className="order-1 lg:order-2 relative h-[450px] w-full max-w-md mx-auto lg:max-w-none">
            {/* Изображение 1 (Правое верхнее) */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/girl-on-laptop.png" 
                alt="Девочка на ноутбуке"
                fill
                style={{ objectFit: 'cover' }}
                className="select-none"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            {/* Изображение 2 (Центральное) */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[70%] rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#111] z-20">
              <Image
                src="/desk-study.png" 
                alt="Рабочий стол для учебы"
                fill
                style={{ objectFit: 'cover' }}
                className="select-none"
                sizes="(max-width: 1024px) 70vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* --- Секция 2: Особенности / Мы всегда стремимся --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Левая колонка (Изображение) */}
          <div className="relative h-[480px] w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#111] lg:mb-0 mb-8">
            <Image
              src="/two-students.jpg" // Использую .png, так как .jng не стандартно
              alt="Два студента занимаются"
              fill
              style={{ objectFit: 'cover' }}
              className="select-none"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>

          {/* Правая колонка (Текст) */}
          <div className="flex flex-col gap-6 max-w-lg lg:max-w-none">
            <h2 className="text-xl font-medium text-black/70 dark:text-white/70">
              Особенности
            </h2>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug">
              Мы всегда стремимся
              <br />
              предоставлять
              <br />
              лучшие возможности
              <br />
              для обучения и
              <br />
              подготовки.
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
              В Bolashak Mektebi наша главная цель — **помочь ученикам чётко понимать свои цели**, укрепить уверенность в своих способностях и поддерживать постоянное стремление к успеху на пути подготовки к тестам НИШ и БИЛ РФМШ.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Сегодня в интернете можно найти массу информации в один клик, но **без правильных знаний и практики** это не принесёт реальных результатов. Мы делаем акцент на **систематическом обучении и практике**, чтобы каждый ученик был готов к успешному будущему.
            </p>
            <Link href="/courses" className="inline-flex w-fit items-center gap-2 px-8 py-3 bg-[#FBB000] text-black font-semibold rounded-lg hover:brightness-95 active:scale-[.98] transition-all duration-200 shadow-md">
              Перейти к курсам
              <span className="text-xl">→</span>
            </Link>
          </div>
        </section>
        
        <AdvantagesSection />
      </main>
    </div>
  );
}