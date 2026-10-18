import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronDown,
  Gift,
  Store,
  Compass,
  Trophy,
  Package,
  Sparkles,
  Users,
  Crown,
  Repeat,
  Headphones,
  Send,
  Search,
  MessageSquare,
  ShieldCheck,
  Zap,
  Smartphone,
  CheckCircle2,
  Lock,
  Flame,
  Award,
} from 'lucide-react'

const REF_URL = 'https://combonorth.space/aetf3u2q9u'

const sideNavItems = [
  { icon: Gift, label: 'Бонусы', highlight: false },
  { icon: Store, label: 'Магазин', highlight: false },
  { icon: Compass, label: 'Миссии', highlight: false },
  { icon: Trophy, label: 'Гонка рефералов', highlight: false },
  { icon: Package, label: 'Сундуки', highlight: false },
  { icon: Sparkles, label: 'Умножение баланса', highlight: false },
  { icon: Users, label: 'Реферальная прог...', highlight: false },
  { icon: Crown, label: 'VIP Клуб', highlight: false },
  { icon: Repeat, label: 'Перенос аккаунта', highlight: false },
  { icon: Headphones, label: 'Поддержка', highlight: false },
  { icon: Send, label: 'Ускорить Telegram', highlight: false },
]

const recentWins = [
  { game: 'Sugar Su...', user: 'Руслан26...', mult: 'x78', tag: 'sugar' },
  { game: 'Big Bass ...', user: 'User#918...', mult: 'x41', tag: 'bass' },
  { game: 'Bigger B...', user: 'User#91...', mult: 'x104', tag: 'bigger' },
  { game: 'Big Bass ...', user: 'User#91...', mult: 'x127', tag: 'bass2' },
  { game: 'Nine To F...', user: 'User#707...', mult: 'x46', tag: 'nine' },
  { game: 'Sugar Su...', user: 'Руслан26...', mult: 'x54', tag: 'sugar2' },
  { game: 'Gift of ...', user: 'User#92...', mult: 'x43', tag: 'midas' },
]

const popularGames = [
  { title: 'Gates of Olympus', provider: 'Pragmatic Play', badge: 'Новое', tag: 'ГОРЯЧЕЕ', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80' },
  { title: 'Sweet Bonanza 1000', provider: 'Pragmatic Play', badge: 'Drops & Wins', tag: 'ТОП', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80' },
  { title: 'The Dog House Megaways', provider: 'Pragmatic Play', badge: 'Новое', tag: 'ПОПУЛЯРНОЕ', img: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=400&q=80' },
  { title: 'Big Bamboo', provider: 'Push Gaming', badge: 'Эксклюзив', tag: 'ДЖЕКПОТ', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80' },
  { title: 'Rip City', provider: 'Hacksaw Gaming', badge: 'Super Scatter', tag: 'ГОРЯЧЕЕ', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80' },
  { title: 'Wanted Dead or a Wild', provider: 'Hacksaw Gaming', badge: 'Хит', tag: 'ТОП', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0e12] text-[#f3f4f6]">
      {/* ===================== ПЕРВЫЙ ЭКРАН (КАК НА СКРИНШОТЕ 2) ===================== */}
      <section className="relative w-full border-b border-[#22242c] bg-[#0c0d12]">
        <div className="flex w-full">
          {/* Левый сайдбар (как на референсе) - скрыт на моб, виден от lg */}
          <aside className="hidden lg:flex flex-col w-[230px] shrink-0 border-r border-[#1a1b24] bg-[#0f1016] min-h-[780px] p-3 justify-between">
            <div className="flex flex-col gap-3">
              {/* Логотип */}
              <div className="flex items-center justify-between px-2 py-1">
                <Link href={REF_URL} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f59e0b] via-[#fbbf24] to-[#fcd34d] flex items-center justify-center font-black text-black text-lg tracking-wider shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    M
                  </div>
                  <span className="font-extrabold tracking-widest text-lg bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 bg-clip-text text-transparent">
                    FARO
                  </span>
                </Link>
                <Link href={REF_URL} className="p-1.5 rounded-lg text-neutral-400 hover:text-amber-400 hover:bg-[#1a1c24] transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* Виджет: Рулетка удачи */}
              <Link
                href={REF_URL}
                className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-br from-[#2a2015] via-[#1a1512] to-[#12131a] p-2.5 flex items-center justify-between group hover:border-amber-400/60 transition-all shadow-inner"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-amber-200">Рулетка удачи</span>
                  <div className="flex items-center gap-1 text-[11px] text-amber-400/90 font-mono mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    01:09:59
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:rotate-45 transition-transform duration-500">
                  🎡
                </div>
              </Link>

              {/* Сайдбар навигация */}
              <nav className="flex flex-col gap-1 mt-1">
                {sideNavItems.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={idx}
                      href={REF_URL}
                      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-neutral-300 hover:text-amber-300 hover:bg-[#181922] transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-amber-400/80 group-hover:text-amber-300 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Нижний переключатель языка */}
            <div className="pt-2 border-t border-[#1a1b24]">
              <Link
                href={REF_URL}
                className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-[#15161f] hover:bg-[#1c1d28] text-xs font-medium text-neutral-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">🇷🇺</span>
                  <span>Русский</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </Link>
            </div>
          </aside>

          {/* Основная центральная область первого экрана */}
          <main className="flex-1 flex flex-col p-3 md:p-5 lg:p-6 min-w-0">
            {/* Верхний Header (десктоп + мобайл) */}
            <header className="flex items-center justify-between pb-4 gap-3">
              {/* Мобильное лого (если скрыт сайдбар) */}
              <div className="flex items-center gap-2 lg:hidden">
                <Link href={REF_URL} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f59e0b] via-[#fbbf24] to-[#fcd34d] flex items-center justify-center font-black text-black text-base shadow-md">
                    M
                  </div>
                  <span className="font-extrabold tracking-widest text-base bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    FARO
                  </span>
                </Link>
              </div>

              {/* Правая часть хедера: Вход / Регистрация */}
              <div className="flex items-center gap-2.5 ml-auto">
                <Link
                  href={REF_URL}
                  className="px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-neutral-200 bg-[#1e2029] hover:bg-[#282a36] border border-[#2e303d] transition-all"
                >
                  Вход
                </Link>
                <Link
                  href={REF_URL}
                  className="px-4 md:px-5 py-2 rounded-xl text-xs md:text-sm font-bold text-black bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] hover:brightness-110 shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
                >
                  Регистрация
                </Link>
              </div>
            </header>

            {/* Главный Баннер: Гонка Рефералов 3 000 000 ₽ */}
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-r from-[#17140f] via-[#15171d] to-[#0e1017] p-5 sm:p-7 md:p-9 shadow-2xl">
              {/* Декоративное сияние и задний фон */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(245,158,11,0.18),transparent_55%)] pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow">
                    <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                      Гонка Рефералов
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl font-black text-amber-400 mt-1">
                      3 000 000 руб.
                    </span>
                  </h1>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
                    Приглашайте друзей и выиграйте путевку на Мальдивы на двоих, крупные денежные призы и эксклюзивные бонусы в Faro Casino.
                  </p>

                  <div className="mt-5 sm:mt-6 flex items-center gap-3">
                    <Link
                      href={REF_URL}
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-gradient-to-r from-[#fcd34d] via-[#f59e0b] to-[#d97706] hover:brightness-110 shadow-lg shadow-amber-500/30 transform active:scale-95 transition-all"
                    >
                      Участвовать
                    </Link>
                    <div className="flex items-center gap-1.5 ml-2">
                      <span className="w-4 h-1.5 rounded-full bg-amber-400" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                </div>

                {/* Правая графика / коллаж в стиле скриншота */}
                <div className="relative shrink-0 flex items-center justify-center w-full md:w-auto mt-2 md:mt-0">
                  <div className="relative w-64 sm:w-72 md:w-80 h-40 sm:h-44 md:h-52 rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-tr from-black via-[#1a1712] to-[#252015] p-3 flex items-center justify-between shadow-xl">
                    <div className="flex flex-col justify-between h-full z-10">
                      <div className="text-[11px] font-mono text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 w-fit">
                        SUPER RACE 2026
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400">Главный приз:</div>
                        <div className="text-sm font-bold text-amber-300">Мальдивы + 1.5M руб.</div>
                      </div>
                      <Link
                        href={REF_URL}
                        className="text-[11px] font-semibold text-black bg-amber-400 hover:bg-amber-300 px-3 py-1 rounded-md w-fit transition-colors"
                      >
                        Подробнее
                      </Link>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-800 p-1 flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse">
                        <div className="w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center text-center">
                          <Crown className="w-6 h-6 text-amber-400 mb-0.5" />
                          <span className="text-[10px] font-black text-amber-300">№1 VIP</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-400 mt-2 font-mono">Faro Trophy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Информационных промо-блока под баннером (как на скрине 2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
              {/* Карточка 1: Депозитный стрик */}
              <div className="rounded-2xl border border-[#242733] bg-gradient-to-b from-[#14161f] to-[#0f1118] p-4 flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-sm font-bold text-white">Депозитный стрик</h3>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Чем длиннее серия депозитов, тем ценнее призы в казино Фаро
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <Link
                    href={REF_URL}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-[#f59e0b] hover:bg-[#fbbf24] transition-colors"
                  >
                    Начать стрик
                  </Link>
                  <span className="text-[11px] font-mono text-amber-400 font-semibold">+350% бонус</span>
                </div>

                {/* Иконки подарков в стрике */}
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#1e212d]">
                  {[1, 2, 3].map((n) => (
                    <Link
                      key={n}
                      href={REF_URL}
                      className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 hover:scale-105 transition-transform"
                    >
                      <Gift className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                  <div className="w-7 h-7 rounded-lg bg-[#1a1d28] border border-[#2b2f40] flex items-center justify-center text-neutral-400 text-xs font-bold">
                    4
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-[#1a1d28] border border-[#2b2f40] flex items-center justify-center text-neutral-400 text-xs font-bold">
                    5
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-[#1a1d28] border border-[#2b2f40] flex items-center justify-center text-neutral-400 text-xs font-bold">
                    6
                  </div>
                  <Link
                    href={REF_URL}
                    className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 hover:scale-105 transition-transform ml-auto"
                  >
                    <Crown className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Карточка 2: Faro Casino App */}
              <div className="rounded-2xl border border-[#242733] bg-gradient-to-b from-[#14161f] to-[#0f1118] p-4 flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-sm font-bold text-white">Faro Casino App</h3>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 mt-2">
                    <span>🤖</span>
                    <span>Доступно для Android & iOS</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={REF_URL}
                    className="px-4 py-1.5 rounded-lg text-xs font-bold text-black bg-[#f59e0b] hover:bg-[#fbbf24] transition-colors"
                  >
                    Скачать
                  </Link>
                  <span className="text-[10px] text-neutral-400">Версия v2.4 (APK)</span>
                </div>
              </div>

              {/* Карточка 3: Миссии */}
              <div className="rounded-2xl border border-[#242733] bg-gradient-to-b from-[#14161f] to-[#0f1118] p-4 flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-sm font-bold text-white">Миссии</h3>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-300 mt-2">
                    <span>Завершите 3 депозита</span>
                    <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      +12 Faro Coins
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={REF_URL}
                    className="w-full text-center py-1.5 rounded-lg text-xs font-semibold text-neutral-200 bg-[#1e2230] hover:bg-[#282d40] border border-[#2b3044] transition-colors"
                  >
                    Начать
                  </Link>
                </div>
              </div>
            </div>

            {/* Бегущая лента / Недавние выигрыши (как на скрине 2) */}
            <div className="mt-4 overflow-x-auto scrollbar-none py-1">
              <div className="flex items-center gap-2.5 min-w-max">
                {recentWins.map((win, idx) => (
                  <Link
                    key={idx}
                    href={REF_URL}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#13151e] border border-[#202330] hover:border-amber-500/40 text-xs transition-all group"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                      🎰
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-medium text-neutral-200 group-hover:text-amber-300">
                        {win.game}
                      </span>
                      <span className="text-[10px] text-neutral-500">{win.user}</span>
                    </div>
                    <span className="ml-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      {win.mult}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Строка поиска и фильтрации игр */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2.5">
              <div className="relative w-full sm:flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Поиск по играм и слотам Faro..."
                  readOnly
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#13151e] border border-[#222533] text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500/50 cursor-pointer"
                />
              </div>
              <Link
                href={REF_URL}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#13151e] border border-[#222533] text-xs font-medium text-neutral-300 flex items-center justify-between sm:justify-center gap-2 hover:bg-[#1a1c28] transition-colors"
              >
                <span>Провайдер</span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </Link>
            </div>

            {/* Категории слотов */}
            <div className="mt-3 flex items-center justify-between overflow-x-auto scrollbar-none gap-2 pb-1 text-xs font-medium text-neutral-400">
              <div className="flex items-center gap-2 min-w-max">
                <Link href={REF_URL} className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Популярные сейчас
                </Link>
                {['Топ', 'Belatra', 'Nolimit City', 'Новые игры', 'Слоты', 'Отыгрыш Бонусов', 'Бонусы', 'Лайв', 'Быстрые'].map(
                  (cat, i) => (
                    <Link
                      key={i}
                      href={REF_URL}
                      className="px-3 py-1.5 rounded-lg hover:text-neutral-200 hover:bg-[#151722] transition-colors"
                    >
                      {cat}
                    </Link>
                  )
                )}
              </div>
              <Link
                href={REF_URL}
                className="hidden md:inline-flex text-[11px] text-amber-400 hover:underline shrink-0 font-semibold"
              >
                Все (423)
              </Link>
            </div>

            {/* Сетка игр (превью популярных слотов Faro Casino) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 mt-3">
              {popularGames.map((game, idx) => (
                <Link
                  key={idx}
                  href={REF_URL}
                  className="group relative rounded-xl overflow-hidden border border-[#202330] bg-[#12141c] hover:border-amber-500/60 transition-all flex flex-col shadow-sm"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181a24]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute top-1.5 left-1.5 z-20">
                      <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500 text-black">
                        {game.badge}
                      </span>
                    </div>
                    <div className="absolute top-1.5 right-1.5 z-20">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/90 text-black">
                        {game.tag}
                      </span>
                    </div>
                    {/* Визуальный паттерн слота */}
                    <div className="w-full h-full bg-gradient-to-br from-[#1c2030] via-[#151722] to-[#251f15] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl">🎰</span>
                    </div>
                    {/* Кнопка играть при ховере */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-black shadow-lg">
                        ИГРАТЬ
                      </span>
                    </div>
                  </div>
                  <div className="p-2 flex flex-col">
                    <span className="text-xs font-semibold text-neutral-200 truncate group-hover:text-amber-300">
                      {game.title}
                    </span>
                    <span className="text-[10px] text-neutral-500 truncate">{game.provider}</span>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </section>

      {/* Быстрая плавающая кнопка онлайн чата (как на скрине 2 в правом нижнем углу) */}
      <Link
        href={REF_URL}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:scale-110 active:scale-95 transition-transform"
        aria-label="Онлайн поддержка Faro Casino"
      >
        <MessageSquare className="w-6 h-6 fill-black" />
      </Link>

      {/* ===================== ТЕКСТОВАЯ ПРОСТЫНЯ С КЛЮЧЕВЫМИ СЛОВАМИ (1500-2000 СЛОВ) ===================== */}
      <article className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-[#d1d5db] space-y-10 leading-relaxed font-sans">
        {/* Вводный SEO блок */}
        <div className="rounded-2xl border border-[#232736] bg-[#11131b] p-6 sm:p-8 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Лицензионный портал азартных игр 2026
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Faro Casino официальный сайт – вход и рабочее зеркало Фаро казино
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300">
            Добро пожаловать на информационный портал, где представлен полный обзор надежного игрового клуба <strong>faro casino</strong>. Если вы ищете безопасный способ <strong>faro casino играть</strong> на реальные деньги, получить щедрый стартовый пакет бонусов или найти актуальное <strong>фаро казино зеркало рабочее</strong> на сегодня, этот ресурс предоставит вам всю необходимую информацию. Игорный клуб <strong>фаро казино</strong> за короткое время стал лидером гемблинг-индустрии благодаря лицензионному софту от мировых провайдеров, моментальным выводам выигрышей и безупречной репутации.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={REF_URL}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
            >
              Перейти на официальный сайт Faro Casino
            </Link>
            <Link
              href={REF_URL}
              className="px-6 py-3 rounded-xl bg-[#1b1e2a] hover:bg-[#25293a] border border-[#2f3448] text-neutral-200 font-semibold text-sm transition-all"
            >
              Открыть рабочее зеркало Фаро
            </Link>
          </div>
        </div>

        {/* Сводная таблица параметров клуба */}
        <div className="overflow-hidden rounded-2xl border border-[#232736] bg-[#10121a]">
          <div className="p-4 sm:p-5 bg-[#151824] border-b border-[#232736]">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Характеристики и параметры Faro Casino (Фаро Казино)
            </h3>
          </div>
          <div className="divide-y divide-[#1e2230] text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Официальный сайт:</span>
              <span className="sm:col-span-2 text-white font-semibold">https://farocasino29.vercel.app / Faro Casino Official</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Ключевой бренд:</span>
              <span className="sm:col-span-2 text-white font-semibold">Faro casino / Фаро казино</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Альтернативный доступ:</span>
              <span className="sm:col-span-2 text-white font-semibold">Актуальное фаро казино зеркало, доступ 24/7 без блокировок</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Приветственный бонус:</span>
              <span className="sm:col-span-2 text-amber-300 font-bold">До 300 000 ₽ + 500 фриспинов на первые депозиты</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Каталог игр:</span>
              <span className="sm:col-span-2 text-white">Слоты, рулетка, блэкджек, баккара, live-дилеры, краш-игры, джекпоты</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Платежные методы:</span>
              <span className="sm:col-span-2 text-white">Банковские карты МИР, Visa, MasterCard, СБП, криптовалюты (USDT, BTC), Piastrix</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:px-5">
              <span className="text-neutral-400 font-medium">Скорость выплат:</span>
              <span className="sm:col-span-2 text-emerald-400 font-semibold">От 5 до 15 минут круглосуточно</span>
            </div>
          </div>
        </div>

        {/* Раздел 1: Что такое Faro Casino */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-2.5 h-6 rounded bg-amber-400" />
            Что представляет собой Faro Casino: надежность и статус
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Современный рынок онлайн-развлечений предъявляет строгие требования к надежности платформ, и <strong>faro casino официальный</strong> статус подтверждает соответствие высочайшим мировым стандартам. Заведение работает под управлением международной лицензии, что гарантирует абсолютную честность генератора случайных чисел (ГСЧ), своевременный расчет ставок и защиту персональных данных клиентов по протоколам SSL-шифрования.
          </p>
          <p className="text-sm sm:text-base text-neutral-300">
            Для пользователей, выбирающих <strong>фаро казино онлайн</strong>, создана ультрасовременная игровая среда с поддержкой мобильных устройств и десктопных компьютеров. Интерфейс выполнен в премиальном темном дизайне с золотыми акцентами, продуманной навигацией и быстрым доступом к любым категориям слотов. Если вы хотите насладиться любимыми слотами без технических задержек, достаточно выполнить вход на <strong>faro casino официальный сайт</strong> и активировать свой личный кабинет.
          </p>
        </section>

        {/* Раздел 2: Зеркало казино Фаро */}
        <section className="space-y-4 rounded-2xl border border-amber-500/20 bg-[#12141e] p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Lock className="w-6 h-6 text-amber-400" />
            Faro Casino зеркало: как обойти ограничения и играть без сбоев
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Периодически интернет-провайдеры могут ограничивать доступ к игровым сайтам из-за особенностей локального законодательства. Чтобы пользователи не теряли доступ к денежным средствам и активным бонусам, администрация запустила круглосуточную сеть дублирующих адресов — <strong>faro casino зеркало</strong>.
          </p>
          <p className="text-sm sm:text-base text-neutral-300">
            Рабочее <strong>фаро казино зеркало</strong> представляет собой точную копию основного ресурса, расположенную на другом доменном имени. База данных игроков, денежные балансы, прогресс программы лояльности и турнирная статистика синхронизируются в режиме реального времени. Это означает, что переходя через актуальное <strong>фаро казино зеркало рабочее</strong>, вам не нужно повторно проходить регистрацию — достаточно ввести свои привычные логин и пароль.
          </p>
          <div className="bg-[#181b26] p-4 rounded-xl border border-[#2b3042] text-xs sm:text-sm text-neutral-300">
            <div className="font-bold text-amber-300 mb-1">Где всегда найти свежее зеркало Фаро казино:</div>
            <ul className="list-disc list-inside space-y-1">
              <li>На текущей проверенной странице (кнопки ведут на действующий рабочий адрес);</li>
              <li>В официальном Telegram-канале Faro Casino;</li>
              <li>Через службу круглосуточной технической поддержки;</li>
              <li>В информационной email-рассылке для постоянных участников клуба.</li>
            </ul>
          </div>
          <div className="pt-2">
            <Link
              href={REF_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm transition-all"
            >
              Войти через рабочее зеркало Faro Casino
            </Link>
          </div>
        </section>

        {/* Раздел 3: Регистрация и вход */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-2.5 h-6 rounded bg-amber-400" />
            Регистрация и вход на официальный сайт Фаро Казино
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Создание профиля на портале <strong>фаро казино официальный сайт</strong> занимает буквально пару минут и доступно каждому совершеннолетнему пользователю. Доступны классический способ регистрации через электронную почту или номер мобильного телефона, а также мгновенная авторизация через социальные сети и мессенджеры.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="rounded-xl border border-[#222534] bg-[#12141c] p-4 flex flex-col gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h4 className="text-sm font-bold text-white">Переход на сайт</h4>
              <p className="text-xs text-neutral-400">
                Нажмите кнопку «Регистрация» на главной странице или воспользуйтесь рабочим зеркалом faro casino.
              </p>
            </div>
            <div className="rounded-xl border border-[#222534] bg-[#12141c] p-4 flex flex-col gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h4 className="text-sm font-bold text-white">Заполнение данных</h4>
              <p className="text-xs text-neutral-400">
                Укажите e-mail, придумайте надежный пароль и выберите валюту игрового счета (RUB, KZT, USDT и др.).
              </p>
            </div>
            <div className="rounded-xl border border-[#222534] bg-[#12141c] p-4 flex flex-col gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h4 className="text-sm font-bold text-white">Активация бонуса</h4>
              <p className="text-xs text-neutral-400">
                Подтвердите согласие с правилами, пополните счет и заберите щедрый бонус на первый депозит с фриспинами.
              </p>
            </div>
          </div>
        </section>

        {/* Раздел 4: Игровые автоматы и провайдеры */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Flame className="w-6 h-6 text-amber-400" />
            Игровой каталог: в какие слоты Faro Casino играть выгоднее всего
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Игротека <strong>faro casino играть</strong> предлагает более 6 000 сертифицированных тайтлов от ведущих разработчиков азартного программного обеспечения. В каталоге представлены культовые студии: Pragmatic Play, Nolimit City, Hacksaw Gaming, Push Gaming, Evolution, NetEnt, Play’n GO, Endorphina, Amusnet (EGT) и многие другие. Каждый автомат поставляется напрямую с серверов провайдера с фиксированным RTP от 96% до 98.5%.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#232738] bg-[#13151f] p-4">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Классические и видеослоты
              </h4>
              <p className="text-xs text-neutral-400 mt-2">
                Слоты с механикой Megaways, бонусными раундами Buy Bonus, прогрессивными множителями и каскадными барабанами. Популярные хиты: Gates of Olympus, Sweet Bonanza, The Dog House, Sugar Rush.
              </p>
            </div>
            <div className="rounded-xl border border-[#232738] bg-[#13151f] p-4">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Live Casino с живыми дилерами
              </h4>
              <p className="text-xs text-neutral-400 mt-2">
                Атмосфера настоящего наземного заведения прямо с вашего экрана: европейская и американская рулетка, блэкджек, баккара, а также захватывающие телешоу Crazy Time, Monopoly Live, Sweet Bonanza CandyLand.
              </p>
            </div>
            <div className="rounded-xl border border-[#232738] bg-[#13151f] p-4">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Краш-игры и Instant Games
              </h4>
              <p className="text-xs text-neutral-400 mt-2">
                Быстрые динамичные игры для тех, кто ценит мгновенный результат: Aviator, Spaceman, JetX, Plinko, Mines. Возможность самостоятельно контролировать момент вывода ставки.
              </p>
            </div>
            <div className="rounded-xl border border-[#232738] bg-[#13151f] p-4">
              <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Джекпоты и турниры
              </h4>
              <p className="text-xs text-neutral-400 mt-2">
                Регулярные розыгрыши многомиллионных призовых фондов. Например, знаменитая «Гонка Рефералов» с фондом 3 000 000 ₽ и путевкой на Мальдивы, а также ежедневные турниры Drops & Wins.
              </p>
            </div>
          </div>
        </section>

        {/* Раздел 5: Бонусы и акции */}
        <section className="space-y-4 rounded-2xl border border-[#222636] bg-[#10121a] p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Award className="w-6 h-6 text-amber-400" />
            Бонусная политика: подарки, кэшбэк и промокоды Фаро Казино
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Одной из главных причин, почему игроки выбирают <strong>фаро казино играть</strong> регулярно, является беспрецедентная программа лояльности. Каждый новичок получает доступ к пакету поощрений, который позволяет кратно увеличить банкролл с первого депозита:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300 list-disc list-inside">
            <li><strong>Приветственный бонус 150% + 200 FS:</strong> активируется при первом пополнении счета на сумму от 500 рублей;</li>
            <li><strong>Депозитный стрик:</strong> ступенчатая система наград за ежедневные пополнения, включающая сундуки с реальными деньгами и фриспинами;</li>
            <li><strong>Еженедельный кэшбэк до 20%:</strong> частичный возврат проигранных средств с минимальным вейджером x3;</li>
            <li><strong>Колесо Фортуны и Рулетка удачи:</strong> гарантированные вращения каждый день с возможностью сорвать ценные денежные призы;</li>
            <li><strong>VIP Клуб и персональный менеджер:</strong> ускоренные лимиты на снятие средств, индивидуальные подарки на день рождения и эксклюзивные промокоды.</li>
          </ul>
        </section>

        {/* Раздел 6: Мобильная версия и приложение */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <Smartphone className="w-6 h-6 text-amber-400" />
            Мобильная версия Faro Casino и приложение для Android/iOS
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Для тех, кто предпочитает играть со смартфона или планшета, разработчики создали адаптивную веб-версию и фирменное приложение. Мобильное <strong>faro казино</strong> автоматически подстраивается под экран любого размера, обеспечивая плавную анимацию вращения барабанов и мгновенную загрузку даже при невысокой скорости мобильного интернета.
          </p>
          <p className="text-sm sm:text-base text-neutral-300">
            Приложение для Android (APK) и iOS позволяет забыть о поиске зеркал: встроенный интеллектуальный прокси автоматически подключается к актуальному серверу в обход любых блокировок. Кроме того, за установку приложения пользователям начисляются дополнительные бездепозитные фриспины!
          </p>
        </section>

        {/* Раздел 7: Депозиты и вывод средств */}
        <section className="space-y-4 rounded-2xl border border-[#232736] bg-[#11131c] p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-2.5 h-6 rounded bg-amber-400" />
            Финансовые операции: ввод и вывод денег в Faro Casino
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Надежность любого игорного клуба проверяется скоростью и стабильностью выплат. В клубе <strong>фаро казино официальный</strong> процесс снятия средств максимально оптимизирован. Обработка заявок осуществляется финансовым отделом в автоматическом режиме 24 часа в сутки, 7 дней в неделю.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-[#171a25] p-4 rounded-xl border border-[#262b3b]">
              <div className="font-bold text-white mb-2">Пополнение игрового баланса</div>
              <p className="text-neutral-400 mb-2">
                Зачисление происходит моментально и без комиссий со стороны казино. Минимальная сумма депозита — от 300 ₽.
              </p>
              <div className="text-neutral-300 font-mono text-[11px]">
                МИР, СБП, Visa, MasterCard, USDT TRC20/ERC20, Bitcoin, Ethereum, Piastrix, ЮMoney.
              </div>
            </div>
            <div className="bg-[#171a25] p-4 rounded-xl border border-[#262b3b]">
              <div className="font-bold text-white mb-2">Вывод выигранных средств</div>
              <p className="text-neutral-400 mb-2">
                Среднее время выплаты составляет от 5 до 30 минут. Отсутствие скрытых комиссий при соблюдении базового оборота ставок.
              </p>
              <div className="text-neutral-300 font-mono text-[11px]">
                Выплаты на банковские карты, через Систему быстрых платежей (СБП) и на криптокошельки.
              </div>
            </div>
          </div>
        </section>

        {/* Раздел 8: FAQ Вопросы и ответы */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-2.5 h-6 rounded bg-amber-400" />
            Часто задаваемые вопросы о Faro Casino (FAQ)
          </h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-[#222534] bg-[#11131c] p-4 cursor-pointer">
              <summary className="font-semibold text-white text-sm flex items-center justify-between">
                <span>Как найти актуальное рабочее зеркало Фаро казино прямо сейчас?</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Все кнопки и ссылки перехода на этом сайте автоматически перенаправляют на самое свежее и безопасное <strong>фаро казино зеркало рабочее</strong>. Также адреса регулярно обновляются в официальном Telegram-боте Faro.
              </p>
            </details>

            <details className="group rounded-xl border border-[#222534] bg-[#11131c] p-4 cursor-pointer">
              <summary className="font-semibold text-white text-sm flex items-center justify-between">
                <span>Безопасно ли играть в Faro Casino на реальные деньги?</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Да, платформа обладает международной лицензией и использует сертифицированный софт с оригинальными алгоритмами выплат. Данные пользователей надежно защищены 256-битным протоколом шифрования.
              </p>
            </details>

            <details className="group rounded-xl border border-[#222534] bg-[#11131c] p-4 cursor-pointer">
              <summary className="font-semibold text-white text-sm flex items-center justify-between">
                <span>Какие бонусы доступны для новых игроков в Faro Casino?</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Новые клиенты получают приветственный пакет до 300 000 рублей и до 500 фриспинов на первые депозиты, а также право на участие в реферальных гонках, ежедневном стрике и миссиях с ценными призами.
              </p>
            </details>

            <details className="group rounded-xl border border-[#222534] bg-[#11131c] p-4 cursor-pointer">
              <summary className="font-semibold text-white text-sm flex items-center justify-between">
                <span>Сколько времени занимает вывод выигрыша?</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                В большинстве случаев денежные средства поступают на карты или криптовалютные кошельки в течение 10–15 минут после одобрения заявки.
              </p>
            </details>
          </div>
        </section>

        {/* Финальный Call-to-action блок */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/20 via-[#181a24] to-amber-500/10 border border-amber-500/30 p-6 sm:p-10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Готовы сорвать куш в Faro Casino?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Регистрируйтесь прямо сейчас, забирайте приветственный бонус на первый депозит и играйте в лучшие слоты на официальном сайте Faro Casino!
          </p>
          <div className="pt-2">
            <Link
              href={REF_URL}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-black text-sm text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-xl shadow-amber-500/30 transition-all active:scale-95"
            >
              ИГРАТЬ В FARO CASINO СЕЙЧАС
            </Link>
          </div>
        </div>

        {/* Футер с хэштегами и копирайтом (по SEO-требованиям из памяти) */}
        <footer className="pt-8 border-t border-[#1f2230] text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-neutral-500">
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#farocasino</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#farocasinoзеркало</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#farocasinoиграть</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#farocasinoофициальный</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#farocasinoофициальныйсайт</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#faroказино</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказино</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказинозеркало</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказинозеркалорабочее</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказиноиграть</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказиноонлайн</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказиноофициальный</Link>
            <Link href={REF_URL} className="hover:text-amber-400 transition-colors">#фароказиноофициальныйсайт</Link>
          </div>
          <p className="text-xs text-neutral-500">
            © 2026 Faro Casino. Официальный информационный портал и рабочее зеркало Фаро казино. Все права защищены. 18+ Играйте ответственно.
          </p>
        </footer>
      </article>
    </div>
  )
}
