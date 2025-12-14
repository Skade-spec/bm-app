import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#FFF600] text-black pt-16 pb-6 mt-20 ">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Колонка 1: Логотип и Описание */}
            <div className="flex flex-col gap-4">
                <a href="/" className="hover:opacity-80 active:scale-95 transition-transform duration-200 w-fit">
                {/* Используем CustomImage вместо Image */}
                <Image
                    src="/logo.svg"
                    alt="Логотип"
                    width={80}
                    height={68}
                    className="select-none"
                />
                </a>
                <p className="text-sm max-w-xs">
                Лучшие возможности обучения, формирующие новые таланты и открывающие двери к успеху.
                </p>
            </div>

            {/* Колонка 2: Bolashak Mektebi Links */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg mb-2">Bolashak Mektebi</h4>
                <a href="/reviews" className="text-sm hover:underline active:scale-[0.98] transition-all duration-150 w-fit">
                Отзывы
                </a>
                <a href="/account" className="text-sm hover:underline active:scale-[0.98] transition-all duration-150 w-fit">
                Личный кабинет
                </a>
                <a href="/register" className="text-sm hover:underline active:scale-[0.98] transition-all duration-150 w-fit">
                Зарегистрироваться
                </a>
            </div>

            {/* Колонка 3: Следите за нами */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg mb-2">Следите за нами</h4>
                {['Instagram', 'Telegram', 'WhatsApp'].map(social => (
                <a key={social} href={`#${social.toLowerCase()}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline active:scale-[0.98] transition-all duration-150 w-fit">
                    {social}
                </a>
                ))}
            </div>

            {/* Колонка 4: Контакты */}
            <div className="flex flex-col gap-4">
                <h4 className="font-bold text-lg mb-2">Контакты</h4>
                <p className="text-sm">
                Абая 103, Алматы, Казахстан
                </p>
                <a href="tel:+77777777777" className="text-sm font-medium hover:underline active:scale-[0.98] transition-all duration-150 w-fit">
                8 777 777 77 77
                </a>
            </div>
            </div>

            {/* Разделитель и Копирайт */}
            <div className="mt-12 pt-6 border-t border-black/20 text-center text-sm px-6 sm:px-10">
            © 2025 Bolashak Mektebi. Все права защищены.
            </div>
        </footer>
    )
}