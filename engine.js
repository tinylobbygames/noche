// Night Desk — engine. Story files push nights into NIGHTS; this file runs them.

// ---------- localisation ----------
// Russian strings stay in the story files but are not offered in the game (owner's decision 2026-09-27).
const LANGS = ['en', 'uk', 'es'];
// 09.10.2026: first visit follows the browser language (Spanish viewers came from Spanish Shorts and saw English); a choice in settings still wins
const browserLang = (typeof navigator !== 'undefined' && (navigator.languages || [navigator.language]).map((l) => String(l || '').slice(0, 2).toLowerCase()).find((l) => ['en', 'uk', 'es'].includes(l))) || 'en';
// 22.10: links from Spanish Shorts carry ?lang=es (the direct GitHub Pages address); a saved choice in settings still wins
const urlLang = (typeof location !== 'undefined' && new URLSearchParams(location.search).get('lang')) || '';
let LANG = localStorage.getItem('lc_lang') || urlLang || browserLang;
if (!LANGS.includes(LANG)) LANG = 'en';
// Player gender (chosen on the title screen). Story strings may contain {masculine|feminine} forms; G() resolves them.
let GENDER = localStorage.getItem('lc_gender') || 'f';
if (GENDER !== 'm' && GENDER !== 'f') GENDER = 'f';
const G = (str) => str.replace(/\{([^{}|]*)\|([^{}|]*)\}/g, (_, m, f) => (GENDER === 'm' ? m : f));
// Missing translations fall back to English; the simulator hooks window.__missing to list them.
const T = (o) => G(typeof o === 'string' ? o : (o[LANG] ?? ((typeof window !== 'undefined' && window.__missing && window.__missing(o)), o.en)));
// Night n (1–6) falls on these days (owner's decision 2026-09-27: the week starts on Monday).
// Night 4 says "tomorrow is Friday"; Denis's deadline is Friday = night 5; Sal says "it's Saturday" the morning after.
const WEEKDAYS = [
  { en: 'Monday', ru: 'понедельник', uk: 'понеділок', es: 'lunes' },
  { en: 'Tuesday', ru: 'вторник', uk: 'вівторок', es: 'martes' },
  { en: 'Wednesday', ru: 'среда', uk: 'середа', es: 'miércoles' },
  { en: 'Thursday', ru: 'четверг', uk: 'четвер', es: 'jueves' },
  { en: 'Friday', ru: 'пятница', uk: 'п’ятниця', es: 'viernes' },
  { en: 'Saturday', ru: 'суббота', uk: 'субота', es: 'sábado' },
  { en: 'Sunday', ru: 'воскресенье', uk: 'неділя', es: 'domingo' }, // night seven
];
function weekday() { return NIGHT ? T(WEEKDAYS[(NIGHT.id - 1) % WEEKDAYS.length]) : ''; }
const UI = {
  trouble: { en: 'Trouble', ru: 'Проблемы', uk: 'Проблеми', es: 'Problemas' },
  tonight: { en: 'tonight', ru: 'за ночь', uk: 'за ніч', es: 'esta noche' },
  credits: { en: 'Credits', ru: 'Титры', uk: 'Титри', es: 'Créditos' },
  ifdbAsk: { en: 'Liked the story? A rating on IFDB helps other readers find it.', ru: 'Понравилась история? Оценка на IFDB помогает другим читателям её найти.', uk: 'Сподобалася історія? Оцінка на IFDB допомагає іншим читачам її знайти.', es: '¿Te gustó la historia? Una valoración en IFDB ayuda a otros lectores a encontrarla.' },
  thanks: { en: 'Thank you for working the night desk.', ru: 'Спасибо, что отработали ночную смену.', uk: 'Дякуємо, що відпрацювали нічну зміну.', es: 'Gracias por cubrir el turno de noche.' },
  endingsSeen: { en: 'Endings found', ru: 'Найдено концовок', uk: 'Знайдено кінцівок', es: 'Finales encontrados' },
  keys: { en: '1–3 choose · Enter continue · N notebook', ru: '1–3 выбор · Enter дальше · N блокнот', uk: '1–3 вибір · Enter далі · N блокнот', es: '1–3 elegir · Enter continuar · N libreta' },
  morning: { en: 'Morning', ru: 'Утро', uk: 'Ранок', es: 'Mañana' },
  salForgets: { en: "Sal folds the bills into his shirt pocket. 'Trouble? What trouble. I don't remember any trouble.'", ru: 'Сэл складывает купюры в нагрудный карман. «Проблемы? Какие проблемы. Не помню никаких проблем».', uk: 'Сел складає купюри в нагрудну кишеню. «Проблеми? Які проблеми. Не пам’ятаю жодних проблем».', es: 'Sal dobla los billetes y los mete en el bolsillo de la camisa. «¿Problemas? ¿Qué problemas? No recuerdo ningún problema».' },
  fired: { en: 'FIRED', ru: 'УВОЛЕН{|А}', uk: 'ЗВІЛЬНЕН{ИЙ|А}', es: '{DESPEDIDO|DESPEDIDA}' },
  firedWhy: { en: 'What it added up to', ru: 'Из чего сложилось', uk: 'З чого склалося', es: 'Lo que se fue sumando' },
  nightN: { en: 'Night', ru: 'Ночь', uk: 'Ніч', es: 'Noche' },
  lastStraw: { en: 'One more trouble and Sal comes for his money.', ru: 'Ещё одна проблема — и Сэл придёт за деньгами.', uk: 'Ще одна проблема — і Сел прийде по гроші.', es: 'Un problema más y Sal vendrá por su dinero.' },
  salFine: { en: "Sal comes out of the back office. He doesn't ask what happened; he has the list. '$${n}. For fixing it. Trouble goes away when the money does.' He takes it out of the register, and the trouble with it.", ru: 'Сэл выходит из подсобки. Он не спрашивает, что случилось; у него есть список. «$${n}. На устранение. Проблемы уходят вместе с деньгами». Он забирает их из кассы, а вместе с ними и проблемы.', uk: 'Сел виходить із підсобки. Він не питає, що сталося; у нього є список. «$${n}. На усунення. Проблеми йдуть разом із грошима». Він забирає їх із каси, а разом із ними й проблеми.', es: 'Sal sale de la trastienda. No pregunta qué ha pasado; tiene la lista. «$${n}. Para arreglarlo. Los problemas se van cuando se va el dinero». Los saca de la caja, y los problemas con ellos.' },
  salFineBroke: { en: "…and there isn't $${n} anywhere in this week of yours.", ru: '…а $${n} за всю вашу неделю не набирается.', uk: '…а $${n} за весь ваш тиждень не набирається.', es: '…y en toda su semana no hay $${n}.' },
  troubleWeek: { en: 'Trouble this week', ru: 'Проблемы за неделю', uk: 'Проблеми за тиждень', es: 'Problemas esta semana' },
  pocket: { en: 'In your pocket', ru: 'В кармане', uk: 'У кишені', es: 'En el bolsillo' },
  morningIntro: { en: 'You walk home in the grey light. The money is real; so is everything else.', ru: 'Вы идёте домой в сером свете. Деньги настоящие; всё остальное тоже.', uk: 'Ви йдете додому в сірому світлі. Гроші справжні; усе інше теж.', es: 'Vuelve a casa con la luz gris. El dinero es real; todo lo demás, también.' },
  // 21.10: the goal in one sentence, asked for on intfiction ("is the aim to end up with the most cash?")
  morningGoal: { en: 'Money is not the score. It buys you room: rent for a tenant, silence from Sal, a ticket for someone. Trouble is the score; at four, Sal lets you go.', ru: 'Деньги не очки. Они покупают запас: аренду жильцу, молчание Сэла, билет кому-то. Очки — проблемы; на четырёх Сэл вас увольняет.', uk: 'Гроші не очки. Вони купують запас: оренду мешканцю, мовчання Села, квиток комусь. Очки — проблеми; на чотирьох Сел вас звільняє.', es: 'El dinero no es la puntuación. Compra margen: el alquiler de un inquilino, el silencio de Sal, un billete para alguien. La puntuación son los problemas; con cuatro, Sal le despide.' },
  buy: { en: 'Buy', ru: 'Купить', uk: 'Купити', es: 'Comprar' },
  bought: { en: 'done', ru: 'сделано', uk: 'зроблено', es: 'hecho' },
  cantAfford: { en: 'not enough', ru: 'не хватает', uk: 'не вистачає', es: 'no alcanza' },
  salLooksAway: { en: 'Sal looks the other way', ru: 'Сэл отвернулся', uk: 'Сел відвернувся', es: 'Sal mira hacia otro lado' },
  register: { en: 'Register', ru: 'Касса', uk: 'Каса', es: 'Caja' },
  registerHint: { en: 'Money taken tonight · total for the week so far', ru: 'Выручка за эту ночь · всего за неделю', uk: 'Виторг за цю ніч · усього за тиждень', es: 'Lo cobrado esta noche · total de la semana' },
  week: { en: 'week', ru: 'за неделю', uk: 'за тиждень', es: 'semana' },
  // 19.10: a player on intfiction finished a night and could not tell whether he had done well.
  // These three lines say, in plain words, what the numbers above mean.
  standMargin: { en: '${n} more problems and Sal lets you go.', ru: 'Ещё ${n} проблемы, и Сэл вас уволит.', uk: 'Ще ${n} проблеми, і Сел вас звільнить.', es: '${n} problemas más y Sal le despide.' },
  standLast: { en: 'One more problem and Sal lets you go.', ru: 'Ещё одна проблема, и Сэл вас уволит.', uk: 'Ще одна проблема, і Сел вас звільнить.', es: 'Un problema más y Sal le despide.' },
  standClean: { en: 'Nothing Sal can pin on you yet.', ru: 'Пока Сэлу не за что зацепиться.', uk: 'Поки Селу немає за що зачепитися.', es: 'De momento Sal no tiene nada contra usted.' },
  standSpend: { en: 'What you kept, you spend in the morning.', ru: 'Что осталось, потратите утром.', uk: 'Що лишилося, витратите вранці.', es: 'Lo que ha guardado, lo gasta por la mañana.' },
  // 20.10: plain-words verdict, so the player knows whether the night went well and what exactly went wrong (first player review)
  verdictLight: { en: 'Tonight went your way.', ru: 'Эта ночь прошла в вашу пользу.', uk: 'Ця ніч минула на вашу користь.', es: 'Esta noche salió a su favor.' },
  verdictDark: { en: 'Tonight will come back to you.', ru: 'Эта ночь ещё аукнется.', uk: 'Ця ніч ще відгукнеться.', es: 'Esta noche le pasará factura.' },
  wrongTonight: { en: 'What went wrong tonight: ${l}.', ru: 'Что пошло не так этой ночью: ${l}.', uk: 'Що пішло не так цієї ночі: ${l}.', es: 'Lo que salió mal esta noche: ${l}.' },
  wrongNone: { en: 'Nothing tonight that Sal can count against you.', ru: 'Этой ночью ничего, что Сэл мог бы вам зачесть.', uk: 'Цієї ночі нічого, що Сел міг би вам зарахувати.', es: 'Esta noche, nada que Sal pueda contarle en contra.' },
  you: { en: 'YOU', ru: 'ВЫ', uk: 'ВИ', es: 'USTED' },
  next: { en: '▸ Continue', ru: '▸ Дальше', uk: '▸ Далі', es: '▸ Continuar' },
  nextNight: { en: '▸ Next night', ru: '▸ Следующая ночь', uk: '▸ Наступна ніч', es: '▸ Siguiente noche' },
  toTitle: { en: 'Back to title', ru: 'На главный экран', uk: 'На головний екран', es: 'Volver al inicio' },
  start: { en: 'Start shift', ru: 'Начать смену', uk: 'Почати зміну', es: 'Empezar turno' },
  cont: { en: 'Continue', ru: 'Продолжить', uk: 'Продовжити', es: 'Continuar' },
  newWeek: { en: 'A new week', ru: 'Новая неделя', uk: 'Новий тиждень', es: 'Una semana nueva' },
  restart: { en: 'Start over', ru: 'Начать сначала', uk: 'Почати спочатку', es: 'Empezar de nuevo' },
  settings: { en: 'Settings', ru: 'Настройки', uk: 'Налаштування', es: 'Ajustes' },
  language: { en: 'Language', ru: 'Язык', uk: 'Мова', es: 'Idioma' },
  sound: { en: 'Sound', ru: 'Звук', uk: 'Звук', es: 'Sonido' },
  voices: { en: 'Voices', ru: 'Голоса', uk: 'Голоси', es: 'Voces' },
  ambience: { en: 'Rain & lamp', ru: 'Дождь и лампа', uk: 'Дощ і лампа', es: 'Lluvia y lámpara' },
  musicLbl: { en: 'Music', ru: 'Музыка', uk: 'Музика', es: 'Música' },
  genderAsk: { en: 'Who is behind the desk?', ru: 'Кто за стойкой?', uk: 'Хто за стійкою?', es: '¿Quién está detrás del mostrador?' },
  genderHint: { en: 'The story will speak to you as her or as him. You can change it any time in ⚙.', ru: 'История будет обращаться к вам как к ней или к нему. Поменять можно в любой момент в ⚙.', uk: 'Історія звертатиметься до вас як до неї або до нього. Змінити можна будь-коли в ⚙.', es: 'La historia se dirigirá a usted como ella o como él. Puede cambiarlo cuando quiera en ⚙.' },
  debtCarry: { en: 'You start the shift ${n} in debt from the week.', ru: 'Вы начинаете смену с долгом ${n} за неделю.', uk: 'Ви починаєте зміну з боргом ${n} за тиждень.', es: 'Empieza el turno con una deuda de ${n} de la semana.' },
  notebook: { en: 'Notebook', ru: 'Блокнот', uk: 'Блокнот', es: 'Libreta' },
  notebookTitle: { en: 'The clerk’s notebook', ru: 'Блокнот портье', uk: 'Блокнот портьє', es: 'La libreta del recepcionista' },
  notebookEmpty: { en: 'Nothing written yet. Every answer you give at the desk goes here.', ru: 'Пока пусто. Сюда записывается каждый ваш ответ за стойкой.', uk: 'Поки порожньо. Сюди записується кожна ваша відповідь за стійкою.', es: 'Todavía no hay nada. Aquí queda cada respuesta que da en el mostrador.' },
  remembered: { en: 'This will be remembered.', ru: 'Это запомнят.', uk: 'Це запам’ятають.', es: 'Esto se recordará.' },
  rateAsk: { en: '★ Liked the night? Rate it on itch', ru: '★ Понравилась ночь? Оцените на itch', uk: '★ Сподобалася ніч? Оцініть на itch', es: '★ ¿Le gustó la noche? Valórela en itch' },
  support: { en: '♥ Support Night Desk', ru: '♥ Поддержать Night Desk', uk: '♥ Підтримати Night Desk', es: '♥ Apoyar Night Desk' },
  playAs: { en: 'Play as', ru: 'Играть за', uk: 'Грати за', es: 'Jugar como' },
  female: { en: 'her', ru: 'неё', uk: 'неї', es: 'ella' },
  male: { en: 'him', ru: 'него', uk: 'нього', es: 'él' },
  restartConfirm: { en: 'Erase progress and start from night one?', ru: 'Стереть прогресс и начать с первой ночи?', uk: 'Стерти прогрес і почати з першої ночі?', es: '¿Borrar el progreso y empezar desde la primera noche?' },
  intro: { en: 'You are the new night clerk. Say little. Remember everything.', ru: 'Вы новый ночной портье. Говорите мало. Запоминайте всё.', uk: 'Ви новий нічний портьє. Говоріть мало. Запам’ятовуйте все.', es: 'Usted es {el nuevo recepcionista|la nueva recepcionista} de noche. Hable poco. Recuérdelo todo.' },
  gallery: { en: 'Endings', ru: 'Концовки', uk: 'Кінцівки', es: 'Finales' },
  locked: { en: '· · ·', ru: '· · ·', uk: '· · ·', es: '· · ·' },
  advisoryTitle: { en: 'Before your shift', ru: 'Перед сменой', uk: 'Перед зміною', es: 'Antes del turno' },
  advisory: { en: 'Night Desk is a story for adults. It deals with coercion, a runaway teenager, a controlling partner and people who disappear. Nothing is shown; much is implied. Six nights, about twenty minutes each. Your choices are remembered.', ru: 'Night Desk — история для взрослых. В ней есть принуждение, сбежавший подросток, властный партнёр и люди, которые исчезают. Ничего не показано; многое подразумевается. Шесть ночей, примерно по двадцать минут. Ваши решения запоминаются.', uk: 'Night Desk — історія для дорослих. У ній є примус, підліток-утікач, партнер, що контролює, і люди, які зникають. Нічого не показано; багато що мається на увазі. Шість ночей, приблизно по двадцять хвилин. Ваші рішення запам’ятовуються.', es: 'Night Desk es una historia para adultos. Trata de coacción, un adolescente fugado, una pareja controladora y personas que desaparecen. No se muestra nada; se sugiere mucho. Seis noches, unos veinte minutos cada una. Sus decisiones se recuerdan.' },
  advisoryOk: { en: 'Begin', ru: 'Начать', uk: 'Почати', es: 'Empezar' },
  stats: { en: 'Your week', ru: 'Ваша неделя', uk: 'Ваш тиждень', es: 'Su semana' },
  statWeeks: { en: 'Weeks started', ru: 'Недель начато', uk: 'Тижнів розпочато', es: 'Semanas empezadas' },
  statNights: { en: 'Nights worked', ru: 'Ночей отработано', uk: 'Ночей відпрацьовано', es: 'Noches trabajadas' },
  statMoney: { en: 'Money through your hands', ru: 'Денег прошло через руки', uk: 'Грошей пройшло через руки', es: 'Dinero que pasó por sus manos' },
  statFines: { en: 'Sal came for money', ru: 'Сэл приходил за деньгами', uk: 'Сел приходив по гроші', es: 'Sal vino por dinero' },
  statFired: { en: 'Fired', ru: 'Уволен{|а}', uk: 'Звільнен{ий|а}', es: '{Despedido|Despedida}' },
  archive: { en: 'Archive', ru: 'Архив', uk: 'Архів', es: 'Archivo' },
  archiveLocked: { en: 'opens at', ru: 'откроется на', uk: 'відкриється на', es: 'se abre al' },
  archiveNew: { en: 'New in the archive', ru: 'Новое в архиве', uk: 'Нове в архіві', es: 'Nuevo en el archivo' },
  secretNight: { en: 'Something is waiting upstairs', ru: 'Наверху кое-что ждёт', uk: 'Нагорі дещо чекає', es: 'Algo espera arriba' },
  size: { en: 'Size', ru: 'Размер', uk: 'Розмір', es: 'Tamaño' },
  resumeAt: { en: 'Continue', ru: 'Продолжить', uk: 'Продовжити', es: 'Continuar' },
  speed: { en: 'Text', ru: 'Текст', uk: 'Текст', es: 'Texto' },
  speedSlow: { en: 'slow', ru: 'медленно', uk: 'повільно', es: 'lento' },
  speedNormal: { en: 'normal', ru: 'обычно', uk: 'звичайно', es: 'normal' },
  speedInstant: { en: 'instant', ru: 'сразу', uk: 'одразу', es: 'al instante' },
  tagline: { en: 'A small hotel. A night shift. People who should not be there.', ru: 'Маленький отель. Ночная смена. Люди, которых там быть не должно.', uk: 'Маленький готель. Нічна зміна. Люди, яких там бути не повинно.', es: 'Un hotel pequeño. Un turno de noche. Gente que no debería estar allí.' },
  end: { en: 'THE END, FOR NOW', ru: 'ПОКА ЭТО ВСЁ', uk: 'ПОКИ ЩО ВСЕ', es: 'FIN, POR AHORA' },
  endText: { en: 'More nights are being written. Your choices are saved.', ru: 'Следующие ночи пишутся. Ваши решения сохранены.', uk: 'Наступні ночі пишуться. Ваші рішення збережено.', es: 'Se están escribiendo más noches. Sus decisiones están guardadas.' },
  back: { en: 'Back', ru: 'Назад', uk: 'Назад', es: 'Volver' },
  foot: { en: 'a Tiny Lobby game · music: MiniMax-Music3 · your choices carry over between nights', ru: 'игра Tiny Lobby · музыка: MiniMax-Music3 · решения переносятся между ночами', uk: 'гра Tiny Lobby · музика: MiniMax-Music3 · рішення переносяться між ночами', es: 'un juego de Tiny Lobby · música: MiniMax-Music3 · sus decisiones pasan de una noche a otra' },
};

// ---------- portraits (procedural SVG, lit by the desk lamp from the left) ----------
// Signature kept for story files: portrait(coatColor, hat, glasses). Variation is derived from the colour,
// so the same character always gets the same face, hair and build.
function portrait(color, hat, glasses) {
  const h = [...color].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const r = (n) => (h >> (n * 3)) % 4;                 // 0..3 picks per feature
  const skin = ['#d9a877', '#c58f62', '#e8c19a', '#a8714d'][r(0)];
  const hairC = ['#2b1b12', '#0f0d0d', '#5a3a22', '#7d7d7d'][r(1)];
  const faceW = [30, 33, 36, 32][r(2)];
  const shoulders = [48, 55, 60, 52][r(3)];
  const hairStyle = r(4);
  const jaw = r(5);
  const id = 'g' + (h % 100000);
  const hair = [
    `<path d="M${75 - faceW - 3} 62 Q${75 - faceW} 18 75 20 Q${75 + faceW} 18 ${75 + faceW + 3} 62 Q${75 + faceW - 8} 42 75 40 Q${75 - faceW + 8} 42 ${75 - faceW - 3} 62Z" fill="${hairC}"/>`,
    `<path d="M${75 - faceW - 4} 70 Q${75 - faceW - 6} 14 75 16 Q${75 + faceW + 6} 14 ${75 + faceW + 4} 70 L${75 + faceW - 2} 50 Q75 30 ${75 - faceW + 2} 50Z" fill="${hairC}"/>`,
    `<path d="M${75 - faceW} 50 Q75 10 ${75 + faceW} 50 Q75 36 ${75 - faceW} 50Z" fill="${hairC}"/>`,
    `<path d="M${75 - faceW - 2} 58 Q${75 - faceW + 4} 22 80 22 Q${75 + faceW + 2} 26 ${75 + faceW + 2} 58 Q${75 + faceW - 6} 38 70 40 Q${75 - faceW + 6} 44 ${75 - faceW - 2} 58Z" fill="${hairC}"/>`,
  ][hairStyle];
  const face = jaw === 1
    ? `<path d="M${75 - faceW} 62 Q${75 - faceW} 28 75 28 Q${75 + faceW} 28 ${75 + faceW} 62 Q${75 + faceW} 96 75 100 Q${75 - faceW} 96 ${75 - faceW} 62Z" fill="${skin}"/>`
    : `<ellipse cx="75" cy="63" rx="${faceW}" ry="36" fill="${skin}"/>`;
  return `<svg viewBox="0 0 150 170">
    <defs>
      <linearGradient id="${id}c" x1="0" x2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></linearGradient>
      <linearGradient id="${id}f" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient>
    </defs>
    <ellipse cx="75" cy="168" rx="58" ry="6" fill="#000" opacity=".45"/>
    <path d="M${75 - shoulders} 170 Q${75 - shoulders} 104 75 98 Q${75 + shoulders} 104 ${75 + shoulders} 170Z" fill="url(#${id}c)"/>
    <path d="M62 100 L75 122 L88 100 L82 98 L75 108 L68 98Z" fill="#000" opacity=".35"/>
    <rect x="68" y="92" width="14" height="12" fill="${skin}"/>
    ${face}
    <path d="M${75 - faceW} 62 Q${75 - faceW} 28 75 28 Q${75 + faceW} 28 ${75 + faceW} 62 Q${75 + faceW} 96 75 100 Q${75 - faceW} 96 ${75 - faceW} 62Z" fill="url(#${id}f)"/>
    ${hair}
    ${hat ? `<ellipse cx="75" cy="44" rx="${faceW + 20}" ry="7" fill="#141414"/><path d="M${75 - faceW + 2} 44 L${75 - faceW + 6} 14 Q75 8 ${75 + faceW - 6} 14 L${75 + faceW - 2} 44Z" fill="#1c1c1c"/><path d="M${75 - faceW + 4} 30 Q75 26 ${75 + faceW - 4} 30 L${75 + faceW - 3} 34 Q75 30 ${75 - faceW + 3} 34Z" fill="#000" opacity=".5"/>` : ''}
    ${glasses ? `<circle cx="63" cy="66" r="9" fill="#000" fill-opacity=".15" stroke="#111" stroke-width="2"/><circle cx="87" cy="66" r="9" fill="#000" fill-opacity=".15" stroke="#111" stroke-width="2"/><line x1="72" y1="66" x2="78" y2="66" stroke="#111" stroke-width="2"/>` : ''}
    <ellipse cx="64" cy="66" rx="2.6" ry="3" fill="#1a1a1a"/><ellipse cx="86" cy="66" rx="2.6" ry="3" fill="#1a1a1a"/>
    <path d="M58 58 Q64 55 70 58" stroke="${hairC}" stroke-width="2" fill="none"/><path d="M80 58 Q86 55 92 58" stroke="${hairC}" stroke-width="2" fill="none"/>
    <path d="M74 66 Q71 76 76 78" stroke="#000" stroke-opacity=".25" stroke-width="1.5" fill="none"/>
    <path d="M${68 + r(6)} 85 Q75 ${84 + r(7) - 1} ${82 - r(6)} 85" stroke="#000" stroke-opacity=".55" stroke-width="2" fill="none"/>
    <ellipse cx="64" cy="70" rx="4" ry="1.5" fill="#000" opacity=".12"/><ellipse cx="86" cy="70" rx="4" ry="1.5" fill="#000" opacity=".12"/>
    <!--hair:${hairC}:${faceW}-->
  </svg>`;
}
// An object rather than a person (the drawer, the phone).
function objectPortrait(color, label) {
  return `<svg viewBox="0 0 150 170">
    <ellipse cx="75" cy="168" rx="55" ry="6" fill="#000" opacity=".4"/>
    <rect x="30" y="90" width="90" height="70" rx="6" fill="${color}"/>
    <rect x="40" y="100" width="70" height="8" rx="3" fill="#000" opacity=".35"/>
    <text x="75" y="145" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="16" fill="#f2b34c" opacity=".8">${label}</text>
  </svg>`;
}

// ---------- nights & save ----------
const NIGHTS = [];
// Trouble carries over the whole week (owner's decision 2026-09-27: keep it hard); paying Sal his share in the morning wipes it.
// At TROUBLE_MAX, Sal comes for money 'to fix the trouble' (owner's idea): fines grow; you are fired only if you can't pay.
const SAL_FINES = [150, 250, 400, 600];
const TROUBLE_MAX = (typeof process !== 'undefined' && process.env && +process.env.TROUBLE_MAX) || 4;
const SAVE_KEY = 'nd_save';
// ---------- anonymous play counter (owner's decision 2026-10-07) ----------
// Counts which screens are reached (title, night N start / end, credits) so we can see where players stop.
// GoatCounter: no cookies, no personal data, the IP is only hashed for a day. Empty URL = counter off.
// Respects Do Not Track; never runs from a local file or localhost. The path carries the language: /en/night1/start.
const ANALYTICS_URL = 'https://nightdesk.goatcounter.com/count';   // GoatCounter site 'nightdesk', created 07.10.2026 (docs/ANALYTICS.md)
function track(path) {
  try {
    if (!ANALYTICS_URL || typeof navigator === 'undefined' || typeof location === 'undefined' || typeof Image !== 'function') return;
    if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;
    if (location.protocol === 'file:' || /^(localhost|127\.)/.test(location.hostname)) return;
    const p = '/' + LANG + path;
    const ref = (document.referrer || '').split('?')[0];   // the page that embeds the game: itch, Game Jolt, Facebook
    new Image().src = ANALYTICS_URL + '?p=' + encodeURIComponent(p) + '&t=' + encodeURIComponent('Night Desk ' + p) + (ref ? '&r=' + encodeURIComponent(ref) : '') + '&rnd=' + Date.now();
  } catch {}
}
// Lifetime statistics, kept apart from the save so "start over" doesn't erase them.
function statsGet() { try { return JSON.parse(localStorage.getItem('nd_stats')) || {}; } catch { return {}; } }
function statsAdd(k, v = 1) { const st = statsGet(); st[k] = (st[k] || 0) + v; try { localStorage.setItem('nd_stats', JSON.stringify(st)); } catch {} }
function loadSave() { try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || null; } catch { return null; } }
function writeSave(s) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }
function clearSave() { localStorage.removeItem(SAVE_KEY); }
// A fresh week: nothing carries over except the last finished week, which night seven replays.
function freshWeek() {
  const last = (loadSave() || {}).lastWeekFlags;
  clearSave();
  if (last) writeSave({ night: 0, flags: {}, lastWeekFlags: last });
}

// ---------- state ----------
const state = { cash: 0, trouble: 0, flags: {}, idx: 0, hour: 23, night: 0 };
let NIGHT = null;

// ---------- DOM ----------
const $ = (id) => document.getElementById(id);
const guestEl = $('guest'), choicesEl = $('choices');
let speakerEl = $('speaker'), lineEl = $('line'); // rebuilt after each ending, see rebind()

function resolve(v, s) { return typeof v === 'function' ? v(s) : v; }

// Pop-up notes: top of the screen, above everything, side by side if several come at once.
function toast(msg, bad) {
  let row = document.getElementById('toasts');
  if (!row) { row = document.createElement('div'); row.id = 'toasts'; document.body.appendChild(row); }
  const t = document.createElement('div');
  t.className = 'toast' + (bad ? ' bad' : ''); t.textContent = msg;
  row.appendChild(t); setTimeout(() => t.remove(), 1900);
}

let rememberedIn = null;
function applyEffect(eff) {
  eff = resolve(eff, state) || {};
  if (eff.cash) { pulseClass($('s-cash'), eff.cash > 0 ? 'flash' : 'flash-bad', 900); state.cash += eff.cash; toast((eff.cash > 0 ? '+' : '') + '$' + eff.cash, eff.cash < 0); }
  if (eff.trouble) {
    state.trouble += eff.trouble; toast('+' + eff.trouble + ' ' + T(UI.trouble), true); pulseClass($('scene'), 'hit', 700); pulseClass($('s-trouble'), 'flash', 900);
    state.troubleLog = state.troubleLog || [];
    for (let k = 0; k < eff.trouble; k++) state.troubleLog.push({ night: state.night, name: current.scene ? (current.scene.label || current.scene.name) : null });
    if (state.trouble === TROUBLE_MAX - 1 && ANIMATE) setTimeout(() => toast(T(UI.lastStraw), true), 900);
  }
  if (eff.flags) {
    if ((eff.flags.opened && !state.flags.opened) || (eff.flags.has_key && !state.flags.has_key)) playCue('sting_envelope');
    // a quiet sign that this answer carries over (once per scene, only when something new is noted)
    const sc = current.scene, isNew = Object.keys(eff.flags).some((k) => eff.flags[k] && !state.flags[k]);
    if (isNew && sc && rememberedIn !== sc) { rememberedIn = sc; if (ANIMATE) setTimeout(() => toast(T(UI.remembered)), 300); }
    Object.assign(state.flags, eff.flags);
  }
  renderStats();
}

function renderStats() {
  $('s-cash').querySelector('[data-t]').textContent = T(UI.register);
  $('s-cash').querySelector('b').textContent = (state.cash < 0 ? '−$' : '$') + Math.abs(state.cash);
  $('s-cash').title = T(UI.registerHint);
  $('s-total').innerHTML = state.night > 0 ? `· ${T(UI.week)} ${fmtMoney((loadSave()?.totalCash || 0) + state.cash)}` : '';
  $('s-trouble').querySelector('b').textContent = state.trouble;
  const tm = document.getElementById('s-trouble-max'); if (tm) tm.textContent = TROUBLE_MAX;
  $('s-trouble').classList.toggle('danger', state.trouble >= TROUBLE_MAX - 1 && state.trouble < TROUBLE_MAX);
  $('s-trouble').querySelector('[data-t]').textContent = T(UI.trouble);
  $('clock').textContent = state.clock || '23:00';
  $('night-tag').textContent = NIGHT ? T(NIGHT.title) + ' · ' + weekday() : '';
  document.querySelectorAll('#lang button').forEach((b) => b.classList.toggle('active', b.dataset.lang === LANG));
  const nb = $('notebook-btn'); if (nb && ANIMATE) {   // page only; the simulator has no real elements
    nb.title = T(UI.notebook); nb.setAttribute('aria-label', T(UI.notebook)); nb.hidden = !notebookNotes().length && !NIGHT; if (!$('notebook').hidden) renderNotebook(); }
  $('foot').innerHTML = T(UI.foot) + '<span class="keys-hint"> · ' + T(UI.keys) + '</span>';
}

// ---------- voice (browser TTS, placeholder until real voice acting) ----------
const VOICE_LANG = { en: 'en-US', ru: 'ru-RU', uk: 'uk-UA', es: 'es-ES' };
const VOICE_PREF = {
  en: { m: ['Google US English', 'Daniel', 'Fred', 'Eddy', 'Reed', 'Alex'], f: ['Samantha', 'Karen', 'Kathy', 'Flo', 'Moira'] },
  ru: { m: ['Yuri', 'Google русский', 'Milena'], f: ['Milena', 'Google русский'] },
  uk: { m: ['Lesya'], f: ['Lesya'] },
  es: { m: ['Jorge', 'Juan', 'Eddy', 'Reed', 'Rocko', 'Google español'], f: ['Mónica', 'Paulina', 'Flo', 'Sandy', 'Shelley', 'Google español'] },
};
const NARRATOR = { gender: 'm', pitch: 0.75, rate: 0.92 };
// 🔊 = recorded voice lines (audio/vo, story/vo_manifest.js). Browser TTS is off unless lc_tts=1 (the owner rejected its sound).
let VOICE_ON = localStorage.getItem('lc_voice') !== '0';
const TTS_ON = localStorage.getItem('lc_tts') === '1';
// Languages whose recorded lines ship. Ukrainian takes are generated but not shipped until the owner approves them.
const VO_SHIP = ['en', 'es'];
const SUPPORT_URL = 'https://tinylobby.itch.io/night-desk/donate';   // itch "Support This Game" page
const RATE_URL = 'https://tinylobby.itch.io/night-desk/rate?source=game';   // itch rating dialog
const IFDB_URL = 'https://ifdb.org/viewgame?id=nt594rdr9szdukef';   // IF Database page (readers come from there)
function supportButton() {
  // platform builds (platform/*/boot.js set ND_PLATFORM) may not link out to other stores, so no donate link there
  if (typeof window !== 'undefined' && window.ND_PLATFORM) return document.createTextNode('');
  const a = document.createElement('a'); a.className = 'support-link'; a.href = SUPPORT_URL; a.target = '_blank'; a.rel = 'noopener';
  a.textContent = T(UI.support); return a;
}
// itch ratings: same rule as the support link, the platform builds don't link out
function rateButton() {
  if (typeof window !== 'undefined' && window.ND_PLATFORM) return document.createTextNode('');
  const a = document.createElement('a'); a.className = 'support-link rate-link'; a.href = RATE_URL; a.target = '_blank'; a.rel = 'noopener';
  a.textContent = T(UI.rateAsk); return a;
}
function voHash(t) { let h = 5381; for (const ch of t) h = (Math.imul(h, 33) ^ ch.codePointAt(0)) >>> 0; return h.toString(16).padStart(8, '0'); }
let voAudio = null, voTimer = null, voToken = 0;
const voPacks = {};   // one <audio> per packed night file, reused so it loads once
function stopVoice() { voToken++; clearInterval(voTimer); if (voAudio) voAudio.pause(); voAudio = null; }
function playVoiceLine(text) {
  stopVoice();
  if (!VOICE_ON || !HAS_AUDIO || !unlocked || !VO_SHIP.includes(LANG) || typeof VO_FILES === 'undefined') return false;
  const h = voHash(text);
  // shipped build: lines are packed per night (story/vo_sprites.js); source folder: one file per line
  const packed = typeof VO_SPRITES !== 'undefined' ? (VO_SPRITES[LANG] || {})[h] : undefined;
  if (typeof VO_SPRITES !== 'undefined' ? !packed : !(VO_FILES[LANG] && VO_FILES[LANG][h])) return false;
  let a, stopAt = Infinity;
  if (packed) {
    const [file, start, dur] = packed, src = `audio/vo_pack/${LANG}/${file}.mp3`;
    a = voPacks[src] || (voPacks[src] = new Audio(src));
    a.currentTime = Math.max(0, start - 0.08); stopAt = start + dur + 0.15;   // the silence between lines absorbs decoder offsets
  } else a = new Audio(`audio/vo/${LANG}/${h}.mp3`);
  a.volume = 1; voAudio = a; const token = voToken;
  if (bed) fadeTo(bed, DUCK_VOL, 300);
  if (cueAudio) fadeTo(cueAudio, 0.25, 300);
  const done = () => {
    if (token !== voToken) return;   // a newer line took over
    clearInterval(voTimer); a.pause();
    if (cueAudio) fadeTo(cueAudio, CUE_VOL, 800);
    voAudio = null;
    if (cueQueue.length && !cuesPlaying) return setTimeout(() => playCue(cueQueue.shift()), 250);
    if (!cuesPlaying && bed) fadeTo(bed, BED_VOL, 1800);
  };
  a.onended = done; a.onerror = done; a.play().catch(done);
  if (packed) voTimer = setInterval(() => { if (a.currentTime >= stopAt) done(); }, 30);
  return true;
}
function pickVoice(lang, gender) {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  const tag = VOICE_LANG[lang];
  for (const name of VOICE_PREF[lang][gender]) {
    const v = voices.find((x) => x.name.startsWith(name) && x.lang.replace('_', '-').startsWith(lang));
    if (v) return v;
  }
  return voices.find((v) => v.lang.replace('_', '-') === tag) || voices.find((v) => v.lang.startsWith(lang)) || null;
}
function speak(text, who, profile) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  if (!TTS_ON || !VOICE_ON || !text) return;
  const p = who === 'guest' && profile ? profile : NARRATOR;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = VOICE_LANG[LANG];
  const v = pickVoice(LANG, p.gender); if (v) u.voice = v;
  const mismatch = v && p.gender === 'm' && VOICE_PREF[LANG].m[0] === VOICE_PREF[LANG].f[0];
  u.pitch = mismatch ? Math.max(0.1, p.pitch - 0.25) : p.pitch;
  u.rate = p.rate;
  speechSynthesis.speak(u);
}
function renderVoice() { $('voice').classList.toggle('on', VOICE_ON); $('audio').classList.toggle('on', AUDIO_ON); }
$('voice').onclick = () => {
  VOICE_ON = !VOICE_ON; localStorage.setItem('lc_voice', VOICE_ON ? '1' : '0'); renderVoice();
  if (!VOICE_ON) stopVoice();
  if (VOICE_ON && current.scene) speak(lineEl.textContent, current.scene.nodes[current.node].who, current.scene.voice);
  else if (window.speechSynthesis) speechSynthesis.cancel();
};

// ---------- ambience (procedural: rain, lamp hum, phone ring; no audio files) ----------
let AUDIO_ON = localStorage.getItem('lc_audio') !== '0';
let actx = null, rainGain = null, humGain = null, padGain = null;
function audioInit() {
  if (actx || !window.AudioContext) return;
  actx = new AudioContext();
  // rain: filtered noise, silent until rainBurst() lets it in for a few seconds
  const len = actx.sampleRate * 4, buf = actx.createBuffer(1, len, actx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  const src = actx.createBufferSource(); src.buffer = buf; src.loop = true;
  const bp = actx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2200; bp.Q.value = 0.5;
  const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5000;
  rainGain = actx.createGain(); rainGain.gain.value = 0;
  src.connect(bp).connect(lp).connect(rainGain).connect(actx.destination); src.start();
  // lamp hum: two detuned low oscillators
  humGain = actx.createGain(); humGain.gain.value = 0;
  [50, 100.7].forEach((f, i) => { const o = actx.createOscillator(); o.type = i ? 'triangle' : 'sine'; o.frequency.value = f; const g = actx.createGain(); g.gain.value = i ? 0.35 : 1; o.connect(g).connect(humGain); o.start(); });
  humGain.connect(actx.destination);
  // pad: a low minor drone (A1 + E2 + C3), each voice slowly wobbling, almost below hearing
  padGain = actx.createGain(); padGain.gain.value = 0;
  [55, 82.4, 130.8].forEach((f, i) => {
    const o = actx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
    const lfo = actx.createOscillator(); lfo.frequency.value = 0.05 + i * 0.03; const lg = actx.createGain(); lg.gain.value = 0.6;
    lfo.connect(lg).connect(o.frequency); lfo.start();
    const g = actx.createGain(); g.gain.value = [1, 0.5, 0.3][i]; o.connect(g).connect(padGain); o.start();
  });
  const padLp = actx.createBiquadFilter(); padLp.type = 'lowpass'; padLp.frequency.value = 400;
  padGain.connect(padLp).connect(actx.destination);
  audioApply();
}
function audioApply() {
  if (!actx) return;
  const t = actx.currentTime;
  if (!AUDIO_ON) { rainGain.gain.cancelScheduledValues(t); rainGain.gain.linearRampToValueAtTime(0, t + 1.5); }
  humGain.gain.cancelScheduledValues(t); humGain.gain.linearRampToValueAtTime(AUDIO_ON ? 0.012 : 0, t + 1.5);
  if (padGain) { padGain.gain.cancelScheduledValues(t); padGain.gain.linearRampToValueAtTime(AUDIO_ON && !MUSIC_ON ? 0.035 : 0, t + 4); }
  $('audio').classList.toggle('on', AUDIO_ON);
}
function ring() { // old desk phone: two short bursts of a 20 Hz-modulated bell tone
  if (!actx || !AUDIO_ON) return;
  const t0 = actx.currentTime;
  [0, 1.6].forEach((off) => {
    const o = actx.createOscillator(); o.type = 'square'; o.frequency.value = 480;
    const m = actx.createOscillator(); m.frequency.value = 20; const mg = actx.createGain(); mg.gain.value = 300;
    m.connect(mg).connect(o.frequency);
    const g = actx.createGain(); g.gain.setValueAtTime(0, t0 + off); g.gain.linearRampToValueAtTime(0.05, t0 + off + 0.05); g.gain.setValueAtTime(0.05, t0 + off + 0.9); g.gain.linearRampToValueAtTime(0, t0 + off + 1.0);
    const lp = actx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
    o.connect(lp).connect(g).connect(actx.destination); o.start(t0 + off); m.start(t0 + off); o.stop(t0 + off + 1.05); m.stop(t0 + off + 1.05);
  });
}
function doorBell() { // small counter bell when a guest walks in
  if (!actx || !AUDIO_ON) return;
  const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
  o.frequency.value = 1760; g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.0005, t + 1.2);
  o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 1.2);
}
$('audio').onclick = () => { AUDIO_ON = !AUDIO_ON; localStorage.setItem('lc_audio', AUDIO_ON ? '1' : '0'); audioInit(); audioApply(); };
document.addEventListener('pointerdown', () => { audioInit(); if (actx && actx.state === 'suspended') actx.resume(); }, { once: false });


// ---------- music (MiniMax-Music3 cues in audio/game/, prompts in docs/MUSIC_PROMPTS.md) ----------
// Beds loop under the dialogue; cues (motifs, stings) play once and duck the bed while they last.
let MUSIC_ON = localStorage.getItem('lc_music') !== '0';
const MUSIC_DIR = 'audio/game/';
const BED_VOL = 0.6, DUCK_VOL = 0.18, CUE_VOL = 0.85;
const HAS_AUDIO = typeof Audio !== 'undefined';
let bed = null, bedName = null, wantBed = null, unlocked = false, cuesPlaying = 0;
const NIGHT_BEDS = ['night1_rain_desk', 'night2_good_coat', 'night3_the_key', 'night4_top_floor', 'night5_the_offer', 'night6_checkout'];
const MOTIFS = {
  'the-woman-in-grey': 'motif_woman_in_grey', 'the-man-in-the-good-coat': 'motif_good_coat', 'officer-reyes': 'motif_reyes',
  'denis': 'motif_denis', 'dana': 'motif_dana_leo', 'dana-rick': 'motif_dana_leo', 'leo': 'motif_dana_leo',
  'kid-in-a-hoodie': 'motif_dana_leo', 'marv-room-7': 'motif_marv', 'the-desk-phone': 'sting_phone_0300',
};
// endings that land softly get the light coda; everything else the dark one
const LIGHT_ENDINGS = new Set(['saint', 'rich', 'normal', 'clean', 'quiet', 'no_key', 'ally', 'her_side', 'downstairs',
  'no_number', 'evidence', 'witness', 'sentence', 'alone', 'number', 'fire']);
let motifsThisNight = new Set();

function fadeTo(a, vol, ms = 1200, done) {
  if (!a) return;
  const from = a.volume, t0 = performance.now();
  clearInterval(a._fade);
  a._fade = setInterval(() => {
    const k = Math.min(1, (performance.now() - t0) / ms);
    a.volume = Math.max(0, Math.min(1, from + (vol - from) * k));
    if (k >= 1) { clearInterval(a._fade); if (done) done(); }
  }, 40);
}
function playBed(name) {
  wantBed = name;
  if (!HAS_AUDIO || !unlocked || !MUSIC_ON) return;
  if (bedName === name && bed) return;
  const old = bed;
  if (old) fadeTo(old, 0, 1500, () => old.pause());
  bed = new Audio(MUSIC_DIR + name + '.mp3'); bedName = name;
  bed.loop = true; bed.volume = 0;
  bed.play().then(() => fadeTo(bed, cuesPlaying ? DUCK_VOL : BED_VOL, 2000)).catch(() => {});
}
// Cues queue up so a motif never lands on top of the night card or another motif.
const cueQueue = [];
let cueAudio = null; // the cue currently sounding, so a voice line can duck it
function playCue(name) {
  if (!HAS_AUDIO || !unlocked || !MUSIC_ON) return;
  // A character motif only makes sense while that character is on screen: if anything is already
  // playing (a cue or a voice line) it is dropped, not queued. Stings wait their turn.
  if (cuesPlaying || voAudio) { if (!name.startsWith('motif') && cueQueue.length < 2) cueQueue.push(name); return; }
  const a = new Audio(MUSIC_DIR + name + '.mp3'); a.volume = voAudio ? 0.25 : CUE_VOL; cueAudio = a;
  cuesPlaying++; if (bed) fadeTo(bed, DUCK_VOL, 400);
  let done = false;
  const release = () => {
    if (done) return; done = true; if (cueAudio === a) cueAudio = null;
    cuesPlaying = Math.max(0, cuesPlaying - 1);
    if (cueQueue.length) return setTimeout(() => playCue(cueQueue.shift()), 250);
    if (bed) fadeTo(bed, BED_VOL, 2500);
  };
  a.onended = release; a.onerror = release;
  a.play().catch(release);
}
function stopMusic() { cueQueue.length = 0; if (bed) { const b = bed; fadeTo(b, 0, 800, () => b.pause()); } bed = null; bedName = null; }
function renderMusic() { const m = document.getElementById('music'); if (m) m.classList.toggle('on', MUSIC_ON); }
if (document.getElementById('music')) document.getElementById('music').onclick = () => {
  MUSIC_ON = !MUSIC_ON; localStorage.setItem('lc_music', MUSIC_ON ? '1' : '0'); renderMusic();
  if (MUSIC_ON) { unlocked = true; playBed(wantBed); } else stopMusic();
  if (typeof audioApply === 'function') audioApply();
};
// browsers only allow sound after a user gesture
['pointerdown', 'keydown'].forEach((ev) => document.addEventListener(ev, () => { if (!unlocked) { unlocked = true; playBed(wantBed); } }));

// ---------- text ----------
const SIZES = { s: '17px', m: '19px', l: '22px' };
let SIZE = localStorage.getItem('lc_size') || 'm';
function applySize() { if (typeof document !== 'undefined' && document.documentElement && document.documentElement.style) document.documentElement.style.setProperty('--fs', SIZES[SIZE] || SIZES.m); }
applySize();
let SPEED = localStorage.getItem('lc_speed') || 'normal'; // slow | normal | instant
const SPEED_MS = { slow: 28, normal: 14, instant: 0 };
let typing = null;
function typeText(text) {
  if (typing) clearInterval(typing);
  lineEl.textContent = ''; lineEl.dataset.full = text; let i = 0;
  if (!SPEED_MS[SPEED]) { lineEl.textContent = text; return; }
  typing = setInterval(() => { lineEl.textContent += text[i++]; if (i >= text.length) clearInterval(typing); }, SPEED_MS[SPEED]);
  lineEl.onclick = () => { clearInterval(typing); lineEl.textContent = text; };
}

// ---------- scenes ----------
let current = { scene: null, node: null };

function femaleHair(svg) { // long hair over the shoulders, colour taken from the marker portrait() leaves
  if (/<!--hair:#7d7d7d:/.test(svg)) svg = svg.split('#7d7d7d').join('#3a2418'); // no grey hair on the women, for now
  return svg.replace(/<!--hair:(#[0-9a-f]+):(\d+)-->/i, (_, c, w) => { w = +w;
    return `<path d="M${75 - w - 4} 60 Q${75 - w - 14} 100 ${75 - w - 6} 128 L${75 - w + 6} 124 Q${75 - w - 2} 92 ${75 - w + 2} 62Z" fill="${c}"/>
            <path d="M${75 + w + 4} 60 Q${75 + w + 14} 100 ${75 + w + 6} 128 L${75 + w - 6} 124 Q${75 + w + 2} 92 ${75 + w - 2} 62Z" fill="${c}"/>`; });
}
// Generated art lives in art/<slug>.png (see docs/ART_PROMPTS.md); the SVG portrait is the fallback when the file is missing.
// sc.name picks the portrait (art/<slug>.jpg) and the trouble log; sc.label, if set, is what the player sees instead
// (e.g. night 1 shows "A couple": the player has not learned Dana's name yet).
function artSlug(sc) { return sc.name.en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
function showScene(sc) {
  const svg = sc.voice && sc.voice.gender === 'f' ? femaleHair(sc.portrait) : sc.portrait;
  const img = `<img class="art" alt="" src="art/${artSlug(sc)}.jpg" onerror="const s=this.parentNode.querySelector('svg'); if (s) s.style.display='block'; this.remove()">`;
  guestEl.innerHTML = `<div class="frame">${img}${svg.replace('<svg ', '<svg style="display:none" ')}</div><div class="name-tag">${T(sc.label || sc.name)}</div>`;
  guestEl.classList.remove('enter'); void guestEl.offsetWidth; guestEl.classList.add('enter');
  const isObject = sc.portrait.includes('<text'); // objectPortrait() labels its SVG; people's portraits have no <text>
  guestEl.classList.toggle('object', isObject);
  if (!isObject) rainBurst();
  if (/phone|телефон/i.test(sc.name.en)) { ring(); pulseClass(guestEl, 'ringing', 2600); } else if (!isObject) doorBell();
  cueQueue.length = 0;
  const motif = MOTIFS[artSlug(sc)];
  if (motif && !motifsThisNight.has(motif)) { motifsThisNight.add(motif); setTimeout(() => playCue(motif), motif.startsWith('sting') ? 0 : 600); }
}

// Resume where the player left: every shown node is written to the save (after its effect has been applied).
function saveMid(nodeId) {
  if (!NIGHT || (typeof SECRET_NIGHT !== 'undefined' && NIGHT === SECRET_NIGHT)) return;
  const sv = loadSave() || { night: state.night, flags: {} };
  const inNight = current.scene && NIGHT.scenes.indexOf(current.scene) === state.idx - 1;
  sv.mid = { night: state.night, idx: state.idx, node: inNight ? nodeId : '__next', cash: state.cash, trouble: state.trouble,
    troubleLog: state.troubleLog || [], fines: state.fines || 0, flags: state.flags, clock: state.clock, notes: state.notes || [] };
  writeSave(sv);
}
function resumeMid() {
  document.body.classList.remove('is-menu');
  const sv = loadSave(); const m = sv && sv.mid; if (!m) return false;
  NIGHT = NIGHTS[m.night];
  Object.assign(state, { night: m.night, idx: m.idx, cash: m.cash, trouble: m.trouble, troubleLog: m.troubleLog, fines: m.fines, flags: m.flags, clock: m.clock, notes: m.notes || sv.notes || [], firedBroke: undefined });
  document.body.classList.remove('is-morning'); $('title').hidden = true; $('credits').hidden = true; $('game').hidden = false;
  $('dialog').innerHTML = '<div class="speaker" id="speaker"></div><div class="line" id="line"></div>'; rebind();
  $('scene').classList.toggle('dry', NIGHT.id === 2); $('scene').classList.remove('fired-scene');
  motifsThisNight = new Set(); playBed(NIGHT_BEDS[m.night] || NIGHT_BEDS[NIGHT_BEDS.length - 1]);
  renderStats();
  if (m.node === '__next' || !NIGHT.scenes[m.idx - 1]) { nextScene(); return true; }
  const sc = NIGHT.scenes[m.idx - 1]; showScene(sc); showNode(sc, m.node, true);
  return true;
}
function showNode(sc, id, rerender = false) {
  if (id === 'end') return nextScene();
  const node = sc.nodes[id]; current = { scene: sc, node: id };
  const who = node.who === 'guest' ? T(sc.label || sc.name) : node.who === 'you' ? T(UI.you) : '';
  speakerEl.textContent = who; speakerEl.className = 'speaker ' + node.who;
  guestEl.classList.toggle('speaking', node.who === 'guest'); guestEl.classList.toggle('listening', node.who !== 'guest');
  lineEl.className = 'line ' + node.who; // narrator vs speech typography
  const text = T(resolve(node.text, state));
  typeText(text);
  if (!rerender && !(node.who !== 'you' && playVoiceLine(text))) speak(text, node.who, sc.voice); // narrator and guests are voiced
  if (node.effect && !rerender) applyEffect(node.effect);
  saveMid(id);

  choicesEl.innerHTML = '';
  const choices = resolve(node.choices, state);
  if (choices) {
    choices.forEach((c, k) => {
      const b = document.createElement('button');
      b.style.animationDelay = (0.08 * k + 0.05) + 's'; b.classList.add('appear');
      b.textContent = T(c.text);
      b.onclick = () => {
        if (choices.length > 1) noteAnswer(sc, c);
        if (c.effect) applyEffect(c.effect); showNode(sc, resolve(c.next, state));
      };
      choicesEl.appendChild(b);
    });
  } else {
    const b = document.createElement('button'); b.className = 'next'; b.textContent = T(UI.next);
    b.onclick = () => showNode(sc, resolve(node.next, state)); choicesEl.appendChild(b);
  }
}

// Scene clocks: a scene's own `time` (taken from its text) is an anchor; scenes without one are spaced
// evenly between the anchors around them, so the clock only ever moves forward. 23:00 → 06:00.
function sceneClock(N, i) {
  const toMin = (t) => { const [h, m] = t.split(':').map(Number); return (h < 12 ? h + 24 : h) * 60 + m; };
  const anchors = N.scenes.map((sc, k) => (sc.time ? [k, toMin(sc.time)] : null)).filter(Boolean);
  if (!anchors.length || anchors[0][0] !== 0) anchors.unshift([0, 23 * 60]);
  const last = N.scenes.length - 1;
  if (anchors[anchors.length - 1][0] !== last) anchors.push([last, 30 * 60]);
  let a = anchors[0], b = anchors[anchors.length - 1];
  for (let k = 0; k < anchors.length - 1; k++) if (anchors[k][0] <= i && i <= anchors[k + 1][0]) { a = anchors[k]; b = anchors[k + 1]; break; }
  const mins = a[0] === b[0] ? a[1] : a[1] + ((i - a[0]) / (b[0] - a[0])) * (b[1] - a[1]);
  const r = Math.round(mins / 10) * 10;
  return String(Math.floor(r / 60) % 24).padStart(2, '0') + ':' + String(r % 60).padStart(2, '0');
}
function salFineAmount() { const k = state.fines || 0; return SAL_FINES[Math.min(k, SAL_FINES.length - 1)]; }
// Money as the player reads it: debt is "−$20" in red, never "$-20".
function fmtMoney(n, html = true) { const t = (n < 0 ? '−$' : '$') + Math.abs(n); return html && n < 0 ? `<span class="debt">${t}</span>` : t; }
function weekMoney() { return ((loadSave() || {}).totalCash || 0) + state.cash; }
// Sal walks in, takes the fine and wipes the trouble; if the week can't cover it, the night ends in 'fired'.
function salCollects() {
  const n = salFineAmount();
  if (weekMoney() < n) { state.firedBroke = n; return ending(); }
  const sc = { name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' },
    voice: { gender: 'm', pitch: 0.7, rate: 1.05 }, portrait: portrait('#7a2a2a', false, true),
    nodes: { a: { who: 'narr', text: { en: UI.salFine.en.replace('${n}', n), ru: UI.salFine.ru.replace('${n}', n), uk: UI.salFine.uk.replace('${n}', n), es: UI.salFine.es.replace('${n}', n) }, next: 'end' } } };
  state.cash -= n; state.trouble = 0; state.troubleLog = []; state.fines = (state.fines || 0) + 1; statsAdd('fines');
  toast('−$' + n, true); renderStats();
  showScene(sc); showNode(sc, 'a');
  pulseClass($('s-cash'), 'flash-bad', 900);
}
function nextScene() {
  if (state.trouble >= TROUBLE_MAX) return salCollects();
  while (state.idx < NIGHT.scenes.length) {
    const sc = NIGHT.scenes[state.idx++];
    if (sc.when && !sc.when(state)) continue;
    const clock = sceneClock(NIGHT, state.idx - 1);
    // 19.10: a player on intfiction said guests arrive faster than you can follow. The desk now stands
    // empty for a beat between them, with the clock moving, so each arrival reads as its own moment.
    const tick = () => { state.clock = clock; renderStats(); };
    const enter = () => { showScene(sc); showNode(sc, sc.start); };
    if (ANIMATE && guestEl.firstChild && !reduceMotion()) {
      guestEl.classList.add('leave'); choicesEl.innerHTML = '';
      setTimeout(() => {
        guestEl.classList.remove('leave'); guestEl.innerHTML = '';
        tick();                                  // the hour turns over while nobody is at the desk
        setTimeout(enter, 900);                  // then the next person walks in
      }, 380);
    } else { tick(); enter(); }
    return;
  }
  ending();
}

// ---------- small animations ----------
const ANIMATE = typeof requestAnimationFrame === 'function';
function reduceMotion() { return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches; }
// Rain is only glimpsed: a few seconds when the night starts and whenever someone comes in from the street.
// Seen in the window and heard through the open door, then quiet again. Night two has no rain at all.
function rainBurst(ms = 7000) {
  if (NIGHT && NIGHT.id === 2) return;
  if (actx && rainGain && AUDIO_ON) {
    const t = actx.currentTime, g = rainGain.gain;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(0.09, t + 1.2); g.setValueAtTime(0.09, t + ms / 1000 - 2.5); g.linearRampToValueAtTime(0, t + ms / 1000);
  }
  if (ANIMATE) pulseClass($('scene'), 'raining', ms);
}
function pulseClass(el, cls, ms) {
  if (!ANIMATE || !el || !el.classList) return;
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
  clearTimeout(el['_t_' + cls]); el['_t_' + cls] = setTimeout(() => el.classList.remove(cls), ms);
}
function startNight(n) { return startNightObj(NIGHTS[n], n); }
function startNightObj(nightObj, n, saveOverride) {
  document.body.classList.remove('is-menu');
  if (n === 0) statsAdd('weeks');
  track('/night' + (n + 1) + '/start');
  document.body.classList.remove('is-morning');
  const save = saveOverride || loadSave() || { night: 0, flags: {} };
  NIGHT = nightObj;
  Object.assign(state, { cash: 0, trouble: save.trouble || 0, fines: save.fines || 0, firedBroke: undefined, troubleLog: (save.troubleLog || []).slice(), notes: (save.notes || []).filter((x) => x.night < n), flags: { ...save.flags }, idx: 0, hour: 23, night: n, shield: 0 });

  $('title').hidden = true; $('game').hidden = false;
  $('dialog').innerHTML = '<div class="speaker" id="speaker"></div><div class="line" id="line"></div>';
  rebind();
  renderStats();
  motifsThisNight = new Set();
  $('scene').classList.remove('fired-scene');
  if (ANIMATE && typeof Image === 'function') NIGHT.scenes.forEach((sc) => { new Image().src = `art/${artSlug(sc)}.jpg`; }); // no pop-in on slow connections
  $('scene').classList.toggle('dry', NIGHT.id === 2); // night two: 'The rain has stopped'
  rainBurst(9000);
  guestEl.innerHTML = '';
  playBed(NIGHT_BEDS[n] || NIGHT_BEDS[NIGHT_BEDS.length - 1]); playCue('sting_night_card');
  const card = $('night-card'); card.innerHTML = `<div>${T(NIGHT.title)}</div><div class="nc-day">${weekday()} · 23:00</div>`; card.classList.add('show');
  setTimeout(() => card.classList.remove('show'), 1800);
  setTimeout(() => { if (!card.classList.contains('show')) card.innerHTML = ''; }, 2600);   // the faded card kept '23:00' in the page all night (screen readers read it)
  if ((save.totalCash || 0) < 0 && ANIMATE) setTimeout(() => toast(T(UI.debtCarry).replace('${n}', fmtMoney(save.totalCash, false))), 2200);
  nextScene();
}
function rebind() { speakerEl = $('speaker'); lineEl = $('line'); }

function ending() {
  if (state.trouble >= TROUBLE_MAX && state.firedBroke === undefined) return salCollects();
  const key = NIGHT.pickEnding(state);
  const e = typeof NIGHT.endings[key] === 'function' ? NIGHT.endings[key](state) : NIGHT.endings[key];
  const [title, text] = (e[LANG] ?? e.en).map(G);
  if (!playVoiceLine(text)) speak(text, 'narr');
  playCue(state.trouble >= TROUBLE_MAX ? 'sting_fired' : LIGHT_ENDINGS.has(key) ? 'sting_ending_light' : 'sting_ending_dark');
  const isFired = state.trouble >= TROUBLE_MAX;
  track('/night' + (state.night + 1) + '/end/' + (isFired ? 'fired' : key));
  guestEl.innerHTML = '';
  if (isFired) {
    guestEl.innerHTML = `<div class="frame"><img class="art" alt="" src="art/sal-the-manager.jpg"></div><div class="name-tag">${T({ en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' })}</div>`;
    guestEl.className = 'guest enter speaking';
    $('scene').classList.add('fired-scene');
  }
  const prevTotal = (loadSave() || {}).totalCash || 0;
  const coda = NIGHT.coda ? `<p class="coda">${T(NIGHT.coda(prevTotal + state.cash, key, state))}</p>` : '';
  // plain-words standing, so the night does not end on bare numbers
  const standingLine = () => {
    const left = TROUBLE_MAX - state.trouble;
    if (left <= 0) return '';
    if (state.trouble === 0) return T(UI.standClean);
    return left === 1 ? T(UI.standLast) : T(UI.standMargin).replace('${n}', left);
  };
  // what went wrong tonight, by scene name, and whether the ending lands softly
  const wrongLine = () => {
    const names = [...new Set((state.troubleLog || []).filter((x) => x.night === state.night && x.name).map((x) => T(x.name)))];
    return names.length ? T(UI.wrongTonight).replace('${l}', names.join(', ')) : T(UI.wrongNone);
  };
  const verdict = T(LIGHT_ENDINGS.has(key) ? UI.verdictLight : UI.verdictDark);
  const why = isFired && (state.troubleLog || []).length
    ? `<div class="why"><h4>${T(UI.firedWhy)}</h4><ul>${state.troubleLog.map((t) => `<li>${T(UI.nightN)} ${t.night + 1}${t.name ? ' · ' + T(t.name) : ''}</li>`).join('')}</ul></div>` : '';
  const stamp = isFired ? `<div class="stamp">${T(UI.fired)}</div>` : '';
  const broke = isFired && state.firedBroke ? `<p class="broke">${T(UI.salFineBroke).replace('${n}', state.firedBroke)}</p>` : '';
  $('dialog').innerHTML = `<div class="ending${isFired ? ' fired' : ''}">${stamp}<h2>${title}</h2><p>${text}</p>${broke}${why}${coda}<p class="delta">${fmtMoney(state.cash)} ${T(UI.tonight)} · ${fmtMoney(prevTotal + state.cash)} ${T(UI.week)} · ${T(UI.trouble)} ${state.trouble}/${TROUBLE_MAX}</p>${isFired ? '' : `<p class="verdict">${verdict}</p><p class="standing">${wrongLine()} ${standingLine()} ${T(UI.standSpend)}</p>`}</div>`;
  current = { scene: null, node: null };

  const fired = state.trouble >= TROUBLE_MAX;
  const save = loadSave() || { night: 0, flags: {}, results: [] };
  save.results = save.results || [];
  save.results[state.night] = key;
  save.trouble = fired ? 0 : state.trouble; // the week's trouble carries into the next night
  save.troubleLog = fired ? [] : (state.troubleLog || []);
  save.notes = state.notes || [];
  save.fines = fired ? 0 : (state.fines || 0);
  save.totalCash = (save.totalCash || 0) + state.cash; // the week's running total, shown in the header and endings
  delete save.mid;
  statsAdd('nights'); if (state.cash > 0) statsAdd('money', state.cash); if (fired) statsAdd('fired');
  const before = archiveUnlocked().length;
  try { const seen = JSON.parse(localStorage.getItem('nd_seen') || '{}'); seen[NIGHT.id + ':' + key] = 1; localStorage.setItem('nd_seen', JSON.stringify(seen)); } catch {}
  const opened = archiveUnlocked().slice(before);
  if (opened.length && ANIMATE) setTimeout(() => toast(T(UI.archiveNew) + ': ' + opened.map((d) => T(d.title)).join(', ')), 1600);
  const isSecret = typeof SECRET_NIGHT !== 'undefined' && NIGHT === SECRET_NIGHT;
  if (isSecret) {
    choicesEl.innerHTML = '';
    const c = document.createElement('button'); c.className = 'next'; c.textContent = '▸ ' + T(UI.credits); c.onclick = showCredits; choicesEl.appendChild(c);
    const t2 = document.createElement('button'); t2.textContent = T(UI.toTitle); t2.onclick = showTitle; choicesEl.appendChild(t2);
    return;
  }
  if (!fired && state.night === NIGHTS.length - 1) save.lastWeekFlags = { ...state.flags }; // night seven replays this week
  if (!fired) { save.flags = { ...state.flags, ['night' + (state.night + 1) + '_ending']: key }; save.night = state.night + 1; }
  writeSave(save);

  choicesEl.innerHTML = '';
  const hasNext = !fired && state.night + 1 < NIGHTS.length;
  const b = document.createElement('button'); b.className = 'next';
  if (fired) { b.textContent = T(UI.restart); b.onclick = () => { freshWeek(); startNight(0); }; }
  else if (hasNext) { b.textContent = T(UI.nextNight); b.onclick = () => showMorning(state.night + 1); }
  else { b.textContent = '▸ ' + T(UI.credits); b.onclick = showCredits; }
  choicesEl.appendChild(b);
  // 17.10: the week's end reached almost nobody (1 player in 8 days), so ask from the end of night two as well
  if (!fired && (state.night >= 1 || !hasNext)) choicesEl.appendChild(supportButton());
  if (!fired && (state.night === 0 || !hasNext)) choicesEl.appendChild(rateButton());   // after the first night and the last
  const t = document.createElement('button'); t.textContent = T(UI.toTitle); t.onclick = showTitle; choicesEl.appendChild(t);
}

// ---------- morning between nights: spend the week's money (items in story/morning.js) ----------
function showMorning(n) {
  document.body.classList.remove('is-menu');
  if (window.speechSynthesis) speechSynthesis.cancel();
  if (typeof MORNING_ITEMS === 'undefined') return startNight(n);
  const save = loadSave() || { night: n, flags: {}, totalCash: 0 };
  save.bought = save.bought || {};
  NIGHT = null; current = { scene: null, node: null };
  state.night = n; state.cash = 0; state.clock = '07:00';
  guestEl.innerHTML = '';
  const day = T(WEEKDAYS[n % WEEKDAYS.length]);   // the day after night n (0-based n = the night just finished)
  $('dialog').innerHTML = `<div class="morning"><h2>${T(UI.morning)} · ${day}</h2><p>${T(UI.morningIntro)}</p><p class="m-goal">${T(UI.morningGoal)}</p>
    <p class="m-pocket">${T(UI.pocket)}: <b>${fmtMoney(save.totalCash || 0)}</b> · ${T(UI.troubleWeek)}: <b class="${(save.trouble || 0) ? 'bad' : ''}">${save.trouble || 0}/${TROUBLE_MAX}</b></p></div>`;
  choicesEl.innerHTML = '';
  const go = document.createElement('button'); go.className = 'next';
  go.textContent = '▸ ' + T(NIGHTS[n].title); go.onclick = () => startNight(n);
  choicesEl.appendChild(go);
  const nextNightNo = n + 1; // 1-based number of the night about to start
  MORNING_ITEMS.filter((it) => it.avail(nextNightNo, save.flags, save)).forEach((it) => {
    const done = it.once !== false ? save.bought[it.id] : save.flags[it.flag];
    const price = typeof it.price === 'function' ? it.price(save) : it.price;
    const afford = (save.totalCash || 0) >= price;
    const b = document.createElement('button'); b.className = 'm-item';
    b.innerHTML = `<span class="m-title">${T(it.title)}</span><span class="m-price">${done ? '✓ ' + T(UI.bought) : '$' + price + (afford ? '' : ' · ' + T(UI.cantAfford))}</span><span class="m-desc">${T(it.desc)}</span>`;
    b.disabled = !!done || !afford;
    b.onclick = () => {
      const sv = loadSave() || save; sv.bought = sv.bought || {}; sv.flags = sv.flags || {};
      sv.totalCash = (sv.totalCash || 0) - price; sv.flags[it.flag] = true; sv.bought[it.id] = true;
      sv.times = sv.times || {}; sv.times[it.id] = (sv.times[it.id] || 0) + 1;
      const before = sv.trouble || 0;
      if (it.apply) it.apply(sv);
      if (it.id === 'sal_share') sv.troubleLog = [];
      writeSave(sv); toast('−$' + price, true); showMorning(n);
      if (it.id === 'sal_share') showSalForgets(before);
    };
    choicesEl.appendChild(b);
  });
  $('title').hidden = true; $('credits').hidden = true; $('game').hidden = false;
  document.body.classList.add('is-morning');
  renderStats();
  $('s-total').textContent = '';
  $('night-tag').textContent = T(UI.morning) + ' · ' + day;
}

// The moment Sal "forgets" the week: his portrait over the lobby, his line, and the trouble count struck out to zero.
function showSalForgets(before) {
  if (!ANIMATE) return; // visual only; the simulator has no page
  const card = $('night-card');
  card.innerHTML = `<img class="nc-face" src="art/sal-the-manager.jpg" alt="">
    <div class="nc-quote">${T(UI.salForgets)}</div>
    <div class="nc-wipe">${T(UI.trouble)} <s>${before}</s> → <b>0</b></div>`;
  card.classList.add('show', 'forget');
  if (typeof playCue === 'function') playCue('sting_envelope'); // a small, slightly guilty chime
  const pocketBad = document.querySelector('.m-pocket b.bad, .m-pocket b:last-child');
  if (pocketBad) pulseClass(pocketBad, 'wiped', 2000);
  setTimeout(() => { card.classList.remove('show'); setTimeout(() => card.classList.remove('forget'), 700); }, 3400);
}

// ---------- the clerk's notebook: who came to the desk and what you said, in your own words ----------
function noteAnswer(sc, c) {
  if (typeof SECRET_NIGHT !== 'undefined' && NIGHT === SECRET_NIGHT) return;
  const eff = resolve(c.effect, state) || {};
  state.notes = state.notes || [];
  state.notes.push({ night: state.night, who: sc.label || sc.name, said: c.text, cash: eff.cash || 0, trouble: eff.trouble || 0 });
}
function notebookNotes() {
  if (NIGHT || current.scene) return state.notes || [];
  const sv = loadSave() || {};
  return (sv.mid && sv.mid.notes) || sv.notes || [];
}
function renderNotebook() {
  const box = $('notebook'), notes = notebookNotes();
  const byNight = {}; notes.forEach((x) => { (byNight[x.night] = byNight[x.night] || []).push(x); });
  const nights = Object.keys(byNight).map(Number).sort((a, b) => a - b);
  box.innerHTML = `<h4>${T(UI.notebookTitle)}</h4>` + (nights.length ? nights.map((n) => `<section><h5>${NIGHTS[n] ? T(NIGHTS[n].title) : ''} · ${T(WEEKDAYS[n % WEEKDAYS.length])}</h5><ul>${byNight[n].map((x, i, arr) => {
    const same = i > 0 && T(arr[i - 1].who) === T(x.who);   // one guest, several answers: the name once
    const marks = [x.cash ? `<span class="${x.cash < 0 ? 'nb-bad' : 'nb-cash'}">${x.cash > 0 ? '+' : '−'}$${Math.abs(x.cash)}</span>` : '', x.trouble ? `<span class="nb-bad">+${x.trouble} ${T(UI.trouble)}</span>` : ''].join(' ');
    return `<li${same ? ' class="nb-same"' : ''}>${same ? '' : `<b>${T(x.who)}</b>`}<span class="nb-said">${T(x.said)}</span>${marks.trim() ? `<small>${marks}</small>` : ''}</li>`;
  }).join('')}</ul></section>`).join('') : `<p class="nb-empty">${T(UI.notebookEmpty)}</p>`);
  const last = box.querySelector('section:last-of-type li:last-child'); if (last) last.scrollIntoView({ block: 'nearest' });
}
function toggleNotebook(open = $('notebook').hidden) {
  $('notebook').hidden = !open; $('notebook-btn').setAttribute('aria-expanded', open);
  if (open) { toggleSettings(false); renderNotebook(); }
}

// ---------- title screen ----------
function showAdvisory() {
  document.body.classList.add('is-menu'); renderStats();
  const box = $('credits');
  $('title').hidden = true; $('game').hidden = true; box.hidden = false;
  // A new player gets one screen, not four: the warning and "play as" together, then straight into night one.
  let asked = true; try { asked = !!localStorage.getItem('lc_gender'); } catch {}
  const fresh = !loadSave();
  const go = () => { try { localStorage.setItem('nd_advisory', '1'); } catch {} if (fresh) startNight(0); else showTitle(); };
  const gender = asked ? '' : `<p class="ga-hint">${T(UI.genderHint)}</p>`;
  const buttons = asked ? `<button class="next c-back">${T(UI.advisoryOk)}</button>`
    : `<div class="gender-ask"><div class="ga-buttons">${['f', 'm'].map((g) => `<button class="next" data-g="${g}">${T(UI.playAs)} ${T(g === 'f' ? UI.female : UI.male)}</button>`).join('')}</div></div>`;
  box.innerHTML = `<div class="doc advisory"><p class="c-studio">TINY LOBBY · 16+</p><h3>${T(UI.advisoryTitle)}</h3><div class="doc-body"><p>${T(UI.advisory)}</p>${gender}</div></div>${buttons}`;
  const ok = box.querySelector('.c-back'); if (ok) ok.onclick = go;
  box.querySelectorAll('button[data-g]').forEach((b) => { b.onclick = () => {
    GENDER = b.dataset.g; try { localStorage.setItem('lc_gender', GENDER); } catch {}
    box.hidden = true; go();
  }; });
}
// First start only: ask who is behind the desk (grammar in uk/es/ru). Later changes live in ⚙.
function askGender(then) {
  let asked = true; try { asked = !!localStorage.getItem('lc_gender'); } catch {}
  if (asked || !ANIMATE) return then();
  const box = $('credits');
  $('title').hidden = true; $('game').hidden = true; box.hidden = false;
  box.innerHTML = `<div class="doc advisory gender-ask"><p class="c-studio">NIGHT DESK</p><h3>${T(UI.genderAsk)}</h3><div class="doc-body"><p>${T(UI.genderHint)}</p></div>
    <div class="ga-buttons">${['f', 'm'].map((g) => `<button class="next" data-g="${g}">${T(UI.playAs)} ${T(g === 'f' ? UI.female : UI.male)}</button>`).join('')}</div></div>`;
  box.querySelectorAll('button[data-g]').forEach((b) => { b.onclick = () => {
    GENDER = b.dataset.g; try { localStorage.setItem('lc_gender', GENDER); } catch {}
    box.hidden = true; then();
  }; });
}
function showTitle() {
  if (ANIMATE && !localStorage.getItem('nd_advisory')) return showAdvisory();
  document.body.classList.add('is-menu');
  if ($('scene')) $('scene').classList.remove('fired-scene');
  document.body.classList.remove('is-morning');
  if (window.speechSynthesis) speechSynthesis.cancel();
  NIGHT = null; current = { scene: null, node: null };
  $('game').hidden = true; $('credits').hidden = true; $('title').hidden = false;
  playBed('theme_title');
  track('/title');
  const save = loadSave();
  const n = save && save.night < NIGHTS.length ? save.night : 0;
  $('t-tagline').textContent = T(UI.tagline);
  $('t-intro').textContent = T(UI.intro);
  $('t-studio').textContent = 'TINY LOBBY';
  // endings found so far (kept across "start over")
  const seen = JSON.parse(localStorage.getItem('nd_seen') || '{}');
  const total = NIGHTS.reduce((a, n) => a + Object.keys(n.endings).length, 0);
  const found = Object.keys(seen).length;
  const prog = endingsProgress();
  const te = $('t-endings');
  te.innerHTML = prog.found ? `${T(UI.endingsSeen)}: ${prog.found} / ${prog.total} ▾<span class="t-bar"><i style="width:${Math.round(prog.share * 100)}%"></i>${[0.25, 0.5, 0.75, 1].map((m) => `<b style="left:${m * 100}%" class="${prog.share >= m - 1e-9 ? 'on' : ''}"></b>`).join('')}</span>` : '';
  te.onclick = () => { const g = $('t-gallery'); g.hidden = !g.hidden; if (!g.hidden) renderGallery(seen); };
  if ($('t-gallery').hidden === false) renderGallery(seen);
  // archive documents and lifetime stats
  const ex = $('t-extra'); ex.innerHTML = '';
  if (typeof ARCHIVE !== 'undefined' && prog.found) {
    const box = document.createElement('div'); box.className = 't-archive';
    box.innerHTML = `<h4>${T(UI.archive)}</h4>` + ARCHIVE.map((d) => prog.share >= d.at - 1e-9
      ? `<button data-doc="${d.id}">${T(d.title)}</button>`
      : `<span class="locked">· · · <small>${T(UI.archiveLocked)} ${Math.round(d.at * 100)}%</small></span>`).join('');
    box.querySelectorAll('button[data-doc]').forEach((b) => { b.onclick = () => showDoc(ARCHIVE.find((d) => d.id === b.dataset.doc)); });
    ex.appendChild(box);
  }
  const btns = $('t-buttons'); btns.innerHTML = '';
  const start = document.createElement('button'); start.className = 'next';
  if (save && save.mid && NIGHTS[save.mid.night]) {
    start.textContent = T(UI.resumeAt) + ' — ' + T(NIGHTS[save.mid.night].title) + (save.mid.clock ? ', ' + save.mid.clock : '');
    start.onclick = () => resumeMid();
  } else {
    const done = save && save.night >= NIGHTS.length;   // the week is over: a new one starts clean
    start.textContent = (done ? T(UI.newWeek) : save && save.night > 0 ? T(UI.cont) : T(UI.start)) + ' — ' + T(NIGHTS[n].title);
    start.onclick = () => askGender(() => { if (done) freshWeek(); startNight(n); });
  }
  btns.appendChild(start);
  const cr = document.createElement('button'); cr.textContent = T(UI.credits); cr.onclick = showCredits;
  if (save) {
    const r = document.createElement('button'); r.textContent = T(UI.restart);
    r.onclick = () => { if (confirm(T(UI.restartConfirm))) { freshWeek(); startNight(0); } };
    btns.appendChild(r);
  }
  if (typeof SECRET_NIGHT !== 'undefined' && prog.share >= 1) {
    const sn = document.createElement('button'); sn.className = 'next secret';
    sn.textContent = '▸ ' + T(SECRET_NIGHT.title) + ' — ' + T(UI.secretNight); sn.onclick = startSecretNight;
    btns.appendChild(sn);
  }
  btns.appendChild(cr);
  renderStats();
}

// ---------- credits (also where the MiniMax-Music3 licence notice lives) ----------
function showCredits() {
  document.body.classList.add('is-menu');
  document.body.classList.remove('is-morning');
  if (window.speechSynthesis) speechSynthesis.cancel();
  NIGHT = null; current = { scene: null, node: null };
  $('game').hidden = true; $('title').hidden = true; $('credits').hidden = false;
  playBed('song_no_room_twelve');
  track('/credits');
  $('credits').innerHTML = `<div class="roll">
    <p class="c-studio">TINY LOBBY</p><h2>NIGHT DESK</h2>
    <h4>Story, design &amp; direction</h4><p>Nataliia Lohachova<br><span>a few lines of narration drafted with AI help (Claude)</span></p>
    <h4>Music</h4><p>Score and the song “No Room Twelve”<br>generated with <b>MiniMax-Music3</b><br><span>MiniMax-Music3 Community License</span></p>
    <h4>Voices</h4><p>English and Spanish voices by Murf AI<br><span>one voice per character</span></p>
    <h4>Art</h4><p>Generated locally with Z-Image-Turbo<br><span>Apache-2.0, via mflux</span></p>
    <h4>Fonts</h4><p>IBM Plex Sans &amp; IBM Plex Mono<br><span>SIL Open Font License 1.1</span></p>
    <h4>Rain, lamp &amp; telephone</h4><p>Synthesised in your browser</p>
    <p class="c-thanks">${T(UI.thanks)}</p>
    ${typeof window !== 'undefined' && window.ND_PLATFORM ? '' : `<p class="c-ifdb"><a href="${IFDB_URL}" target="_blank" rel="noopener">${T(UI.ifdbAsk)}</a></p>`}
    <p class="c-last">There is no room twelve.</p>
  </div><button class="next c-back">${T(UI.toTitle)}</button>`;
  $('credits').querySelector('.c-back').onclick = showTitle;
  $('credits').appendChild(Object.assign(supportButton(), { className: 'support-link c-support' }));
  // roll up from just below the top, and stop with the last line in the middle — never an empty screen
  const box = $('credits'), roll = box.querySelector('.roll');
  const still = !ANIMATE || !roll.animate || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  box.classList.toggle('static', still);
  if (!still) {
    const last = roll.querySelector('.c-last');
    const dist = Math.max(0, roll.offsetTop + last.offsetTop - box.clientHeight * 0.45);
    roll.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-dist}px)` }], { duration: Math.max(8000, dist * 28), delay: 1500, easing: 'linear', fill: 'forwards' });
  }
}

// Share of the 48 week endings found (night 7 doesn't count).
function endingsProgress() {
  let seen = {}; try { seen = JSON.parse(localStorage.getItem('nd_seen') || '{}'); } catch {}
  const ids = new Set(NIGHTS.map((n) => String(n.id)));
  const found = Object.keys(seen).filter((k) => ids.has(k.split(':')[0])).length;
  const total = NIGHTS.reduce((a, n) => a + Object.keys(n.endings).length, 0);
  return { found, total, share: total ? found / total : 0, seen };
}
function archiveUnlocked() { return typeof ARCHIVE === 'undefined' ? [] : ARCHIVE.filter((d) => endingsProgress().share >= d.at - 1e-9); }
function showDoc(d) {
  document.body.classList.add('is-menu');
  const box = $('credits');
  $('title').hidden = true; $('game').hidden = true; box.hidden = false;
  box.innerHTML = `<div class="doc"><p class="c-studio">${T(UI.archive)}</p><h3>${T(d.title)}</h3><div class="doc-body">${T(d.body).split(/\n\n+/).map((p) => `<p>${p}</p>`).join('')}</div></div><button class="next c-back">${T(UI.back)}</button>`;
  box.querySelector('.c-back').onclick = showTitle;
}
// Night seven is played with the flags of the player's last finished week.
function startSecretNight() {
  const sv = loadSave() || {};
  const flags = sv.lastWeekFlags || sv.flags || {};
  // the real week save is left untouched: night seven runs on a copy
  startNightObj(SECRET_NIGHT, NIGHTS.length, { ...sv, flags, trouble: 0, troubleLog: [], fines: 0 });
}

// Lifetime stats ("Your week"), shown under the endings gallery.
function statsBlock() {
  const st = statsGet();
  if (!st.nights) return '';
  return `<div class="t-stats"><h4>${T(UI.stats)}</h4><ul>
    <li>${T(UI.statWeeks)}: <b>${st.weeks || 0}</b></li><li>${T(UI.statNights)}: <b>${st.nights || 0}</b></li>
    <li>${T(UI.statMoney)}: <b>$${st.money || 0}</b></li><li>${T(UI.statFines)}: <b>${st.fines || 0}</b></li><li>${T(UI.statFired)}: <b>${st.fired || 0}</b></li></ul></div>`;
}
// Endings gallery: one column per night, found endings by title, the rest as dots.
function renderGallery(seen) {
  const g = $('t-gallery');
  g.innerHTML = NIGHTS.map((n) => {
    const rows = Object.entries(n.endings).map(([key, e]) => {
      if (typeof e === 'function') e = e(state); // variant endings share one title, so any state gives the right one
      const ok = seen[n.id + ':' + key];
      const title = ok ? G((e[LANG] ?? e.en)[0]) : T(UI.locked);
      return `<li class="${ok ? 'found' : 'locked'}">${title}</li>`;
    }).join('');
    return `<div class="g-night"><h4>${T(n.title)}</h4><ul>${rows}</ul></div>`;
  }).join('') + statsBlock();
}

// ---------- settings dropdown (⚙): language, sound, play as, text speed, size ----------
function renderSettings() {
  const lbl = { language: UI.language, sound: UI.sound, voices: UI.voices, ambience: UI.ambience, music: UI.musicLbl };
  document.querySelectorAll('#settings [data-set]').forEach((e) => { e.textContent = T(lbl[e.dataset.set]); });
  $('settings-btn').title = T(UI.settings);
  const row = (label, items, cur, key, onPick) => {
    const d = document.createElement('div'); d.className = 'gender';
    d.innerHTML = `<span>${T(label)}</span>` + items.map(([k, l]) => `<button data-k="${k}" class="${k === cur ? 'active' : ''}">${l}</button>`).join('');
    d.querySelectorAll('button').forEach((b) => { b.onclick = () => { localStorage.setItem(key, b.dataset.k); onPick(b.dataset.k); rerenderAll(); }; });
    return d;
  };
  const dyn = $('set-dyn'); dyn.innerHTML = '';
  dyn.appendChild(row(UI.playAs, [['f', T(UI.female)], ['m', T(UI.male)]], GENDER, 'lc_gender', (k) => { GENDER = k; }));
  dyn.appendChild(row(UI.speed, ['slow', 'normal', 'instant'].map((k) => [k, T(UI['speed' + k[0].toUpperCase() + k.slice(1)])]), SPEED, 'lc_speed', (k) => { SPEED = k; }));
  dyn.appendChild(row(UI.size, [['s', 'A'], ['m', 'A+'], ['l', 'A++']], SIZE, 'lc_size', (k) => { SIZE = k; applySize(); }));
  // back to the title from a night, a morning, the credits or a document (a night in progress resumes from "Continue")
  const home = $('set-home'); home.textContent = '⌂ ' + T(UI.toTitle); home.hidden = !$('title').hidden;
  home.onclick = () => { toggleSettings(false); showTitle(); };
}
// language or gender changed: redraw whatever is on screen without re-applying effects
function rerenderAll() {
  renderStats(); renderSettings();
  if (current.scene) { showScene(current.scene); showNode(current.scene, current.node, true); }
  else if (!$('title').hidden) showTitle();
}
function toggleSettings(open = $('settings').hidden) {
  $('settings').hidden = !open; $('settings-btn').setAttribute('aria-expanded', open);
  if (open) renderSettings();
}
$('settings-btn').onclick = (e) => { e.stopPropagation(); toggleNotebook(false); toggleSettings(); };
$('notebook-btn').onclick = (e) => { e.stopPropagation(); toggleNotebook(); };
document.addEventListener('click', (e) => { if (!$('notebook').hidden && !e.target.closest('#notebook, #notebook-btn')) toggleNotebook(false); });
document.addEventListener('click', (e) => { if (!$('settings').hidden && !e.target.closest('#settings, #settings-btn')) toggleSettings(false); });

document.querySelectorAll('#lang button').forEach((b) => {
  b.onclick = () => {
    LANG = b.dataset.lang; localStorage.setItem('lc_lang', LANG);
    rerenderAll();
  };
});

// keyboard: 1–9 pick a choice, Enter/Space continue (first button), Escape to title
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.metaKey || e.ctrlKey || e.altKey) return;
  if (!$('settings').hidden && e.key !== 'Escape') return;   // keys belong to the open settings panel
  if (!$('notebook').hidden) { if (e.key === 'Escape' || e.key === 'n') toggleNotebook(false); return; }
  if (e.key === 'n' && !$('notebook-btn').hidden) { toggleNotebook(true); return; }
  const btns = [...choicesEl.querySelectorAll('button')].filter((b) => !b.disabled);
  if (/^[1-9]$/.test(e.key) && btns[+e.key - 1]) { btns[+e.key - 1].click(); e.preventDefault(); }
  else if ((e.key === 'Enter' || e.key === ' ') && btns.length) {
    if (typing && lineEl.textContent.length < (lineEl.dataset.full || '').length) { clearInterval(typing); lineEl.textContent = lineEl.dataset.full; }
    else btns[0].click();
    e.preventDefault();
  } else if (e.key === 'Escape' && !$('settings').hidden) toggleSettings(false);
  else if (e.key === 'Escape' && $('title').hidden) showTitle();
  else if ((e.key === 'Enter' || e.key === 'Escape') && !$('credits').hidden) showTitle();
});

renderVoice();
renderMusic();
// index.html calls showTitle() once the story files have loaded.
