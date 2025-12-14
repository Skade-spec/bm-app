import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-center items-center w-full mb-10 gap-4 mt-10">
            <a
                href="/"
                className="mr-10 hover:opacity-80 active:scale-95 transition-transform duration-200"
            >
            <Image
                src="/logo.svg"
                alt="Логотип"
                width={104}
                height={88}
                className="dark:invert select-none"
                />
            </a>
    
            <nav className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center gap-2 border px-3 py-2 rounded-md hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200">
                <img src="/zoom.svg" alt="иконка" className="w-4 h-4" />
                <input
                    type="text"
                    placeholder="Хотите узнать?"
                    className="bg-transparent border-none focus:border-none focus:ring-0 focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white w-32 sm:w-48 transition duration-200"
                />
                <div className="relative ml-20">
                    <select className="appearance-none pr-8 pl-3 py-1 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-1 transition duration-200">
                    <option>Исследовать</option>
                    </select>
                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs">
                    ▼
                    </span>
                </div>
                </div>
    
                {[
                { href: "/", label: "Главная" },
                { href: "/about", label: "О нас" },
                { href: "/courses", label: "Курсы" },
                { href: "/contacts", label: "Контакты" },
                ].map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="font-semibold hover:text-[#FFF600] active:scale-95 transition-all duration-200"
                >
                    {label}
                </Link>
                ))}
    
                <div className="flex gap-4 items-center">
                    <Link
                        href="/login"
                        className="hover:text-[#FFF600] active:scale-95 transition-all duration-200"
                    >
                        Войти
                    </Link>

                    <Link
                        href="/register"
                        className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-95 transition-all duration-200"
                    >
                        Создать аккаунт
                    </Link>
                </div>
            </nav>
        </header>
    )
}