"use client";

import { Mail, Phone, Instagram } from "lucide-react";

export default function ContactsPage() {
  // Данные контактов (заглушки)
  const contactData = {
    phone: "8 777 777 77 77",
    email: "testmail@gmail.com",
    instagram: "@school_plus",
  };

  return (
    <div className="font-sans min-h-screen p-6 md:p-10 bg-gray-50 dark:bg-[#111] text-black dark:text-white transition-colors duration-300 flex justify-center items-start pt-16">
      <div className="w-full max-w-4xl bg-white dark:bg-[#1f1f1f] rounded-xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        
        {/* Заголовок */}
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Связаться с нами
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Левая колонка: Форма обратной связи */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Оставьте нам сообщение
            </h2>
            
            <form className="space-y-5">
              {/* Поле Имя */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-yellow-400 focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Поле Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-yellow-400 focus:border-yellow-400 transition-colors"
                />
              </div>

              {/* Поле Сообщение */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Ваше сообщение
                </label>
                <textarea
                  id="message"
                  placeholder="Ваше сообщение"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-yellow-400 focus:border-yellow-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-2 bg-yellow-400 rounded-lg text-black dark:text-gray-900 font-bold hover:bg-yellow-500 active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                Отправить
              </button>
            </form>
          </div>

          {/* Правая колонка: Контакты и Карта/График */}
          <div className="w-full lg:w-80 space-y-8">
            {/* Контактная информация */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Телефон</p>
                  <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition-colors">
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href={`mailto:${contactData.email}`} className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition-colors">
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Instagram</p>
                  <a href="#" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition-colors">
                    {contactData.instagram}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner overflow-hidden flex items-center justify-center p-0">
                <iframe id="map_587300120" frameBorder="0" width="300px" height="160px" src="https://makemap.2gis.ru/widget?data=eJytj0FPgzAUx7_L8yiZpRQGJDuYJW4qh23R6DQ7kPWBTQolpRqR8N19A40348Gemvd__fX378FYiRblCk2FzipsIX3uwXUNQgpXmLtXi-BBY02D1o05xcrpU85u11snlx3LHnfl5WJBixLbo1WNU6amBRocjTaWrmeMx37BafJxXUt8h9Rn32fwoJwEuhE__b4xqnYjgSRVnbtRbh7NEsaE8EQw41wQ9UDPlSReyJPB-7v8zd0kv7_YvsnlOduvd6VbZSy7_71IwRlP2H8VieZTkyDh_KdJKIaDB1XebEyrJocedO4g_Vr2RRDEYRTGkQf6FE-4uQijgPFIBKRnTEWsmKBUxWj98IKon8ZpkesWh0-i9prJ" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}