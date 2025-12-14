export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#111] text-black dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Создать аккаунт</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Имя пользователя"
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#FFF600] outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#FFF600] outline-none"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border border-gray-300 dark:border-gray-700 rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#FFF600] outline-none"
        />
        <button
          type="submit"
          className="bg-[#FFF600] text-black font-semibold py-2 rounded-md hover:brightness-95 active:scale-95 transition-all duration-200"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Уже есть аккаунт?{" "}
        <a href="/login" className="text-[#FFF600] hover:underline">
          Войти
        </a>
      </p>
    </div>
  );
}
