// Mornings between nights: the player spends the week's money. Each purchase sets a save flag the story reads later.
// avail(n, f, save): n = the night about to start (1-based: 2 = morning before night two), f = saved flags.
// once: false means it can be bought every morning (Sal's share). price may be a function of the save. Prices come out of the week's total.
const MORNING_ITEMS = [
  {
    // Trouble carries over the whole week; Sal "forgets" all of it for his share.
    // $100, then $150, $200… — Sal gets greedier every time you buy his memory.
    id: 'sal_share', price: (sv) => 100 + 50 * ((sv.times && sv.times.sal_share) || 0), once: false, flag: 'sal_paid',
    avail: (n, f, sv) => (sv.trouble || 0) > 0,
    apply: (sv) => { sv.trouble = 0; },
    title: { en: "Give Sal his share", ru: 'Отдать Сэлу его долю', uk: 'Віддати Селу його частку', es: 'Darle a Sal su parte' },
    desc: { en: "He forgets the whole week. Your trouble goes back to zero.", ru: 'Он забывает всю неделю. Проблемы обнуляются.', uk: 'Він забуває весь тиждень. Проблеми обнуляються.', es: 'Olvida toda la semana. Sus problemas vuelven a cero.' },
  },
  {
    id: 'marv_rent', price: 30, flag: 'paid_marv',
    avail: (n, f) => n <= 5,
    title: { en: "Pay Marv's rent for the week", ru: 'Заплатить за Марва аренду за неделю', uk: 'Заплатити за Марва оренду за тиждень', es: 'Pagar el alquiler de Marv de esta semana' },
    desc: { en: "He won't ask who. He'll know.", ru: 'Он не спросит кто. Он будет знать.', uk: 'Він не спитає хто. Він знатиме.', es: 'No preguntará quién. Lo sabrá.' },
  },
  {
    id: 'leo_money', price: 50, flag: 'leo_money',
    // only once the player knows Leo's name and the shelter (he mentions it from night two on): not after turning him away
    avail: (n, f) => n >= 3 && (f.kid_couch || (f.kid_room && f.lied_kid) || f.leo_friend || f.leo_watch || f.leo_followed) && !f.leo_safe,
    title: { en: "Leave money for Leo at the shelter", ru: 'Оставить Лео денег в приюте', uk: 'Залишити Лео грошей у притулку', es: 'Dejarle dinero a Leo en el albergue' },
    desc: { en: "Fifty dollars in an envelope with his name on it. The irony is not lost on you.", ru: 'Пятьдесят долларов в конверте с его именем. Ирония от вас не ускользает.', uk: 'П’ятдесят доларів у конверті з його ім’ям. Іронію ви помічаєте.', es: 'Cincuenta dólares en un sobre con su nombre. La ironía no se le escapa.' },
  },
  {
    id: 'dana_money', price: 80, flag: 'dana_money',
    avail: (n, f) => f.dana_stays && n <= 5,
    title: { en: "Slip Dana money for a few more nights", ru: 'Подсунуть Дане денег ещё на пару ночей', uk: 'Підсунути Дані грошей ще на кілька ночей', es: 'Pasarle a Dana dinero para unas noches más' },
    desc: { en: "Under the door of room 4, no note.", ru: 'Под дверь четвёртого номера, без записки.', uk: 'Під двері четвертого номера, без записки.', es: 'Por debajo de la puerta de la habitación 4, sin nota.' },
  },
  {
    id: 'bus_ticket', price: 120, flag: 'bus_ticket',
    avail: (n, f) => n >= 4,
    title: { en: "Buy a bus ticket out of town", ru: 'Купить билет на автобус из города', uk: 'Купити квиток на автобус із міста', es: 'Comprar un billete de autobús para salir de la ciudad' },
    desc: { en: "Open date. It goes in the inside pocket, next to nothing else.", ru: 'С открытой датой. Ложится во внутренний карман, где больше ничего нет.', uk: 'З відкритою датою. Лягає у внутрішню кишеню, де більше нічого немає.', es: 'Con fecha abierta. Va al bolsillo interior, donde no hay nada más.' },
  },
];
