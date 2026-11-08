// Night 1 — the envelope.
// Rewritten 08.11.2026 after the intfiction reviews (t/82443): one thread instead of seven unrelated visitors.
// Sal hands over the desk (orientation in three lines), the envelope arrives second, everything after it hangs on it.
// Flags and endings are unchanged: marv_key|marv_paid|marv_lobby, saved_dana, kid_room|kid_out|kid_couch, envelope, gave_envelope,
// lied_cop, phone_obeyed, phone_talked, lied_kid. Nights 2–6 and secrets.js read them.
// Scene: { name, voice, portrait, start, nodes: { id: { who, text, choices|next, effect } } }; text/choices/effect may be functions of state.
NIGHTS.push({
  id: 1,
  title: { en: 'Night one', ru: 'Ночь первая', uk: 'Ніч перша', es: 'Primera noche' },
  scenes: [
  {
    voice: { gender: 'm', pitch: 0.7,  rate: 1.05 }, time: '23:00', name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' }, portrait: portrait('#7a2a2a', false, true), start: 'a',
    nodes: {
      a: { who: 'guest', text: { en: "Eleven rooms. Nine of them empty. The register is yours till six; I count it in the morning. Marv in seven has lost his key again. He owes thirty. I'm going home.", ru: 'Одиннадцать номеров. Девять пустые. Касса твоя до шести, утром пересчитаю. Марв из седьмого опять потерял ключ. Должен тридцать. Я домой.', uk: 'Одинадцять номерів. Дев’ять порожні. Каса твоя до шостої, вранці перерахую. Марв із сьомого знову загубив ключ. Винен тридцять. Я додому.', es: 'Once habitaciones. Nueve vacías. La caja es tuya hasta las seis; la cuento por la mañana. Marv, el de la siete, ha vuelto a perder la llave. Debe treinta. Me voy a casa.' }, next: 'b' },
      b: { who: 'narr', text: { en: 'The door closes behind him. Rain on the windows, the lamp, the phone. The desk is yours.', ru: 'Дверь закрывается за ним. Дождь по окнам, лампа, телефон. Стойка ваша.', uk: 'Двері зачиняються за ним. Дощ по вікнах, лампа, телефон. Стійка ваша.', es: 'La puerta se cierra tras él. Lluvia en las ventanas, la lámpara, el teléfono. El mostrador es suyo.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'f', pitch: 0.8,  rate: 0.88 }, name: { en: 'The woman in grey', ru: 'Женщина в сером', uk: 'Жінка в сірому', es: 'La mujer de gris' }, portrait: portrait('#5a5a5a', false, true), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: "A woman in a grey coat comes in out of the rain and doesn't shake it off. She doesn't want a room. She puts an envelope on the desk.", ru: 'Женщина в сером пальто входит с дождя и не отряхивается. Номер ей не нужен. Она кладёт на стойку конверт.', uk: 'Жінка в сірому пальті заходить із дощу й не обтрушується. Номер їй не потрібен. Вона кладе на стійку конверт.', es: 'Una mujer con abrigo gris entra de la lluvia y no se la sacude. No quiere habitación. Pone un sobre en el mostrador.' }, next: 'b' },
      b: { who: 'guest', text: { en: "Keep this behind the desk until tomorrow night. Two hundred dollars for the trouble. If anyone asks, I was never here.", ru: 'Пусть лежит у вас за стойкой до завтрашней ночи. Двести долларов за беспокойство. Если кто спросит, меня здесь не было.', uk: 'Нехай лежить у вас за стійкою до завтрашньої ночі. Двісті доларів за клопіт. Якщо хтось спитає, мене тут не було.', es: 'Guárdelo detrás del mostrador hasta mañana por la noche. Doscientos dólares por la molestia. Si alguien pregunta, yo nunca estuve aquí.' },
           choices: [
             { text: { en: 'Take the envelope and the money.', ru: 'Взять конверт и деньги.', uk: 'Взяти конверт і гроші.', es: 'Tomar el sobre y el dinero.' }, next: 'take', effect: { cash: 200, flags: { envelope: true } } },
             { text: { en: '"What\'s in it?"', ru: '«Что внутри?»', uk: '«Що всередині?»', es: '«¿Qué hay dentro?»' }, next: 'ask' },
             { text: { en: '"No. Good night."', ru: '«Нет. Доброй ночи».', uk: '«Ні. Добраніч».', es: '«No. Buenas noches».' }, next: 'no' },
           ] },
      ask: { who: 'guest', text: { en: "Paper. Nothing that bites. For two hundred you can stop asking.", ru: 'Бумага. Ничего кусачего. За двести можно перестать спрашивать.', uk: 'Папір. Нічого кусючого. За двісті можна перестати питати.', es: 'Papel. Nada que muerda. Por doscientos puede dejar de preguntar.' },
             choices: [
               { text: { en: 'Take it.', ru: 'Взять.', uk: 'Взяти.', es: 'Aceptarlo.' }, next: 'take', effect: { cash: 200, flags: { envelope: true } } },
               { text: { en: 'Refuse.', ru: 'Отказаться.', uk: 'Відмовитися.', es: 'Negarse.' }, next: 'no' },
             ] },
      take: { who: 'guest', text: { en: "One more thing. If a man calls tonight and asks for room twelve, you tell him there is no room twelve. Those words exactly.", ru: 'И ещё. Если ночью позвонит мужчина и спросит двенадцатый номер, скажите ему: двенадцатого номера нет. Слово в слово.', uk: 'І ще. Якщо вночі подзвонить чоловік і спитає дванадцятий номер, скажіть йому: дванадцятого номера немає. Слово в слово.', es: 'Una cosa más. Si esta noche llama un hombre y pregunta por la habitación doce, le dice que no hay habitación doce. Con esas palabras.' }, next: 'take2' },
      take2: { who: 'narr', text: { en: "There is no room twelve. You check the key board to be sure: one to eleven. The envelope is heavier than paper. When you look up, she's gone.", ru: 'Двенадцатого номера нет. Вы на всякий случай смотрите на доску с ключами: с первого по одиннадцатый. Конверт тяжелее бумаги. Когда вы поднимаете глаза, её уже нет.', uk: 'Дванадцятого номера немає. Ви про всяк випадок дивитеся на дошку з ключами: з першого по одинадцятий. Конверт важчий за папір. Коли ви підводите очі, її вже немає.', es: 'No hay habitación doce. Mira el tablero de llaves para estar seguro: de la uno a la once. El sobre pesa más que el papel. Cuando levanta la vista, ella ya no está.' }, next: 'end' },
      no: { who: 'guest', text: { en: "Pity. You have an honest face. Those don't come cheap.", ru: 'Жаль. У вас честное лицо. Такие дёшево не достаются.', uk: 'Шкода. У вас чесне обличчя. Такі дешево не дістаються.', es: 'Lástima. Tiene una cara honrada. Esas no salen baratas.' }, next: 'no2' },
      no2: { who: 'narr', text: { en: 'At the door she stops. "He\'ll call anyway." Then she\'s gone.', ru: 'У двери она останавливается. «Он всё равно позвонит». И уходит.', uk: 'Біля дверей вона зупиняється. «Він усе одно подзвонить». І йде.', es: 'En la puerta se detiene. «Llamará igual». Y se va.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 0.85, rate: 0.9 }, name: { en: 'Marv, room 7', ru: 'Марв, номер 7', uk: 'Марв, номер 7', es: 'Marv, habitación 7' }, portrait: portrait('#4a5a6a', false, false), start: 'a',
    nodes: {
      a: { who: 'guest', text: { en: "Lost my key again. I know. Rent's Saturday, I know that too. Just give me the spare.", ru: 'Опять потерял ключ. Знаю. За комнату в субботу, тоже знаю. Просто дайте запасной.', uk: 'Знову загубив ключ. Знаю. За кімнату в суботу, теж знаю. Просто дайте запасний.', es: 'Perdí la llave otra vez. Ya sé. El alquiler es el sábado, eso también lo sé. Solo deme la de repuesto.' },
           choices: [
             { text: { en: 'Hand him the spare. Say nothing about rent.', ru: 'Дать запасной. Про оплату промолчать.', uk: 'Дати запасний. Про оплату промовчати.', es: 'Darle la de repuesto. No decir nada del alquiler.' }, next: 'key', effect: { flags: { marv_key: true } } },
             { text: { en: '"Thirty for last week. Then the key."', ru: '«Тридцать за прошлую неделю. Потом ключ».', uk: '«Тридцять за минулий тиждень. Потім ключ».', es: '«Treinta de la semana pasada. Luego la llave».' }, next: 'pay', effect: { cash: 30, flags: { marv_paid: true } } },
             { text: { en: '"No key. Sal\'s orders. The couch is free."', ru: '«Ключа нет. Сэл не велел. Диван свободен».', uk: '«Ключа немає. Сел не велів. Диван вільний».', es: '«No hay llave. Órdenes de Sal. El sofá está libre».' }, next: 'lobby', effect: { flags: { marv_lobby: true } } },
           ] },
      key: { who: 'guest', text: { en: "You're the only one in this building who still looks at me. Night.", ru: 'В этом доме на меня больше никто не смотрит. Только вы. Спокойной.', uk: 'У цьому будинку на мене більше ніхто не дивиться. Тільки ви. Добраніч.', es: 'Usted es {el único|la única} en este edificio que todavía me mira. Buenas noches.' }, next: 'end' },
      pay: { who: 'guest', text: { en: "…Fine. Here. That was food money.", ru: '…Ладно. Держите. Это были деньги на еду.', uk: '…Гаразд. Тримайте. Це були гроші на їжу.', es: '…Vale. Tome. Era para comer.' }, next: 'pay2' },
      pay2: { who: 'narr', text: { en: 'He takes the key without looking at you.', ru: 'Он берёт ключ, не глядя на вас.', uk: 'Він бере ключ, не дивлячись на вас.', es: 'Toma la llave sin mirarle.' }, next: 'end' },
      lobby: { who: 'narr', text: { en: 'He lies down on the lobby couch under the broken lamp, his coat over him like a blanket.', ru: 'Он ложится на диван в холле под сломанной лампой, укрывшись пальто как одеялом.', uk: 'Він лягає на диван у холі під зламаною лампою, вкрившись пальтом як ковдрою.', es: 'Se tumba en el sofá del vestíbulo, bajo la lámpara rota, con el abrigo por manta.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 1.0,  rate: 1.1 }, name: { en: 'Dana & Rick', ru: 'Дана и Рик', uk: 'Дана і Рік', es: 'Dana y Rick' }, label: { en: 'A couple', ru: 'Пара', uk: 'Пара', es: 'Una pareja' }, portrait: portrait('#8a3a5a', false, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: "A couple. He's loud. She stands half a step behind him and, when he isn't looking, mouths one word at you: help.", ru: 'Пара. Он громкий. Она стоит на полшага позади и, пока он не смотрит, одними губами говорит вам: помогите.', uk: 'Пара. Він гучний. Вона стоїть на півкроку позаду і, поки він не дивиться, самими губами каже вам: допоможіть.', es: 'Una pareja. Él habla alto. Ella está medio paso atrás y, cuando él no mira, le dice a usted una palabra sin voz: ayuda.' }, next: 'b' },
      b: { who: 'guest', text: { en: "One room, one bed, top floor. No calls, we're busy. Right, babe?", ru: 'Один номер, одна кровать, верхний этаж. Никаких звонков, мы заняты. Да, детка?', uk: 'Один номер, одне ліжко, верхній поверх. Жодних дзвінків, ми зайняті. Так, крихітко?', es: 'Una habitación, una cama, último piso. Nada de llamadas, estamos ocupados. ¿Verdad, nena?' },
           choices: [
             { text: { en: 'Give them a room. Not your business.', ru: 'Дать номер. Не ваше дело.', uk: 'Дати номер. Не ваша справа.', es: 'Darles una habitación. No es asunto suyo.' }, next: 'room', effect: { cash: 60 } },
             { text: { en: '"Only two singles left tonight. Different floors. Sorry."', ru: '«Остались только два одноместных. На разных этажах. Извините».', uk: '«Лишилися тільки два одномісні. На різних поверхах. Вибачте».', es: '«Solo quedan dos individuales. En pisos distintos. Lo siento».' }, next: 'singles', effect: { cash: 80, flags: { saved_dana: true } } },
             { text: { en: '"Sir, I think she wants to leave."', ru: '«Сэр, мне кажется, она хочет уйти».', uk: '«Пане, мені здається, вона хоче піти».', es: '«Señor, creo que ella quiere irse».' }, next: 'blunt', effect: { trouble: 1 } },
           ] },
      room: { who: 'narr', text: { en: 'She takes the key without a word. The elevator doors close on her face.', ru: 'Она молча берёт ключ. Двери лифта закрываются перед её лицом.', uk: 'Вона мовчки бере ключ. Двері ліфта зачиняються перед її обличчям.', es: 'Ella toma la llave sin decir nada. Las puertas del ascensor se cierran sobre su cara.' }, next: 'end' },
      singles: { who: 'guest', text: { en: "Separate. Fine. Whatever.", ru: 'На разных. Ладно. Неважно.', uk: 'На різних. Гаразд. Байдуже.', es: 'Separadas. Bien. Lo que sea.' }, next: 'singles2' },
      singles2: { who: 'narr', text: { en: 'She signs for her room. Under her name, very small, she writes: thank you.', ru: 'Она расписывается за свой номер. Под именем, очень мелко, пишет: спасибо.', uk: 'Вона розписується за свій номер. Під іменем, дуже дрібно, пише: дякую.', es: 'Firma por su habitación. Debajo de su nombre, muy pequeño, escribe: gracias.' }, next: 'end' },
      blunt: { who: 'guest', text: { en: "Who asked you? Forget it. This place is a dump anyway.", ru: 'А тебя кто спрашивал? Забудь. Всё равно дыра, а не отель.', uk: 'А тебе хто питав? Забудь. Усе одно діра, а не готель.', es: '¿Y a usted quién le preguntó? Olvídelo. Total, este sitio es una pocilga.' }, next: 'blunt2' },
      blunt2: { who: 'narr', text: { en: 'He slams the door. She follows him out, slowly.', ru: 'Он хлопает дверью. Она выходит за ним, медленно.', uk: 'Він грюкає дверима. Вона виходить за ним, повільно.', es: 'Da un portazo. Ella sale tras él, despacio.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 1.3,  rate: 1.15 }, name: { en: 'Kid in a hoodie', ru: 'Парень в худи', uk: 'Хлопець у худі', es: 'Chico con sudadera' }, portrait: portrait('#6a5a2a', true, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'A kid in a hoodie, seventeen maybe. Backpack. Cash already in his hand. He keeps looking back at the door.', ru: 'Парень в худи, лет семнадцати. Рюкзак. Наличные уже в руке. Всё время оглядывается на дверь.', uk: 'Хлопець у худі, років сімнадцяти. Рюкзак. Готівка вже в руці. Весь час озирається на двері.', es: 'Un chico con sudadera, diecisiete quizá. Mochila. El dinero ya en la mano. No deja de mirar hacia la puerta.' }, next: 'b' },
      b: { who: 'guest', text: { en: "One night. I've got fifty. I don't… I don't have ID. Please.", ru: 'Одну ночь. У меня пятьдесят. У меня… у меня нет документов. Пожалуйста.', uk: 'Одну ніч. У мене п’ятдесят. У мене… у мене немає документів. Будь ласка.', es: 'Una noche. Tengo cincuenta. No… no tengo documentos. Por favor.' },
           choices: [
             { text: { en: 'Take the cash. Give him a room. No questions.', ru: 'Взять деньги. Дать номер. Без вопросов.', uk: 'Взяти гроші. Дати номер. Без запитань.', es: 'Tomar el dinero. Darle una habitación. Sin preguntas.' }, next: 'room', effect: { cash: 50, flags: { kid_room: true } } },
             { text: { en: '"No ID, no room. Rules."', ru: '«Нет документов, нет номера. Правила».', uk: '«Немає документів, немає номера. Правила».', es: '«Sin documentos no hay habitación. Son las reglas».' }, next: 'out', effect: { flags: { kid_out: true } } },
             { text: { en: '"Keep your money. Couch, blanket, till morning. Then we talk."', ru: '«Оставь деньги. Диван, плед, до утра. Потом поговорим».', uk: '«Залиш гроші. Диван, плед, до ранку. Потім поговоримо».', es: '«Guárdate el dinero. Sofá y manta hasta la mañana. Luego hablamos».' }, next: 'couch', effect: { flags: { kid_couch: true } } },
           ] },
      room: { who: 'narr', text: { en: "He takes the stairs two at a time and doesn't look back.", ru: 'Он бежит по лестнице через две ступеньки и не оглядывается.', uk: 'Він біжить сходами через дві сходинки й не озирається.', es: 'Sube la escalera de dos en dos y no mira atrás.' }, next: 'end' },
      out: { who: 'narr', text: { en: 'He nods like he expected it and walks back out into the rain.', ru: 'Он кивает, будто так и знал, и уходит обратно под дождь.', uk: 'Він киває, наче так і знав, і виходить назад під дощ.', es: 'Asiente como si lo esperara y vuelve a salir a la lluvia.' }, next: 'end' },
      couch: { who: 'guest', text: { en: "…Okay. Thanks. My name's Leo, if anyone asks. Don't tell them.", ru: '…Ладно. Спасибо. Меня зовут Лео, если кто спросит. Не говорите им.', uk: '…Гаразд. Дякую. Мене звати Лео, якщо хтось спитає. Не кажіть їм.', es: '…Vale. Gracias. Me llamo Leo, por si alguien pregunta. No se lo diga.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 0.6,  rate: 0.9 }, time: '03:00', name: { en: 'The desk phone', ru: 'Телефон на стойке', uk: 'Телефон на стійці', es: 'El teléfono del mostrador' }, portrait: portrait('#2a2a2a', false, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: "03:00. The desk phone rings. It hasn't rung all year.", ru: '03:00. Звонит телефон на стойке. Он не звонил весь год.', uk: '03:00. Дзвонить телефон на стійці. Він не дзвонив цілий рік.', es: '03:00. Suena el teléfono del mostrador. No ha sonado en todo el año.' }, next: 'b' },
      b: { who: 'guest', text: { en: "Room twelve, please.", ru: 'Двенадцатый номер, пожалуйста.', uk: 'Дванадцятий номер, будь ласка.', es: 'La habitación doce, por favor.' },
           choices: (s) => s.flags.envelope
            ? [
                { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: 'no12', effect: { flags: { phone_obeyed: true } } },
                { text: { en: '"She left something. Who is this?"', ru: '«Она кое-что оставила. Кто это?»', uk: '«Вона дещо залишила. Хто це?»', es: '«Ella dejó algo. ¿Quién habla?»' }, next: 'talk', effect: { flags: { phone_talked: true } } },
                { text: { en: 'Hang up.', ru: 'Положить трубку.', uk: 'Покласти слухавку.', es: 'Colgar.' }, next: 'hangup' },
              ]
            : [
                { text: { en: '"There\'s no room twelve here."', ru: '«Здесь нет двенадцатого номера».', uk: '«Тут немає дванадцятого номера».', es: '«Aquí no hay habitación doce».' }, next: 'no12b' },
                { text: { en: '"Who is this?"', ru: '«Кто это?»', uk: '«Хто це?»', es: '«¿Quién habla?»' }, next: 'who' },
                { text: { en: 'Hang up.', ru: 'Положить трубку.', uk: 'Покласти слухавку.', es: 'Colgar.' }, next: 'hangup' },
              ] },
      no12: { who: 'guest', text: { en: "…Good. Then she found the right desk. Someone comes for it tomorrow night. Don't open it.", ru: '…Хорошо. Значит, она нашла правильную стойку. Завтра ночью за ним придут. Не открывайте.', uk: '…Добре. Отже, вона знайшла правильну стійку. Завтра вночі по нього прийдуть. Не відкривайте.', es: '…Bien. Entonces encontró el mostrador correcto. Mañana por la noche vendrán a buscarlo. No lo abra.' }, next: 'click' },
      talk: { who: 'guest', text: { en: "She told you to say there's no room twelve. You didn't. I'll remember your voice.", ru: 'Она велела вам сказать, что двенадцатого номера нет. Вы не сказали. Я запомню ваш голос.', uk: 'Вона веліла вам сказати, що дванадцятого номера немає. Ви не сказали. Я запам’ятаю ваш голос.', es: 'Ella le dijo que dijera que no hay habitación doce. No lo hizo. Recordaré su voz.' }, next: 'click', effect: { trouble: 1 } },
      no12b: { who: 'guest', text: { en: "Then she hasn't been in yet. She will.", ru: 'Значит, она ещё не приходила. Придёт.', uk: 'Отже, вона ще не приходила. Прийде.', es: 'Entonces todavía no ha venido. Vendrá.' }, next: 'click' },
      who: { who: 'narr', text: { en: 'Breathing. Traffic somewhere behind him. Then he hangs up.', ru: 'Дыхание. Где-то за ним шум машин. Потом он кладёт трубку.', uk: 'Дихання. Десь за ним шум машин. Потім він кладе слухавку.', es: 'Una respiración. Tráfico en algún lugar detrás de él. Luego cuelga.' }, next: 'end' },
      hangup: { who: 'narr', text: { en: 'You put the receiver down. It rings once more and stops. The quiet is worse.', ru: 'Вы кладёте трубку. Он звонит ещё раз и замолкает. Тишина хуже.', uk: 'Ви кладете слухавку. Він дзвонить ще раз і замовкає. Тиша гірша.', es: 'Cuelga el auricular. Suena una vez más y se calla. El silencio es peor.' }, next: 'end' },
      click: { who: 'narr', text: { en: "Click. Your hand isn't quite steady when you hang up.", ru: 'Щелчок. Рука не совсем твёрдая, когда вы кладёте трубку.', uk: 'Клацання. Рука не зовсім тверда, коли ви кладете слухавку.', es: 'Clic. Al colgar, la mano no le responde del todo.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'f', pitch: 0.95, rate: 1.0 }, name: { en: 'Officer Reyes', ru: 'Офицер Рейес', uk: 'Офіцер Реєс', es: 'Agente Reyes' }, portrait: portrait('#2a3a6a', true, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'A cop, wet from the rain. She puts a photo on the desk: a boy in a hoodie.', ru: 'Полицейская, мокрая от дождя. Кладёт на стойку фото: парень в худи.', uk: 'Поліцейська, мокра від дощу. Кладе на стійку фото: хлопець у худі.', es: 'Una policía, empapada de lluvia. Deja una foto en el mostrador: un chico con sudadera.' }, next: 'b' },
      b: { who: 'guest', text: { en: "Seventeen. Ran away from a bad home. Seen him?", ru: 'Семнадцать. Сбежал из плохого дома. Видели его?', uk: 'Сімнадцять. Утік із поганого дому. Бачили його?', es: 'Diecisiete. Se escapó de una mala casa. ¿Lo ha visto?' },
           choices: (s) => s.flags.kid_room
            ? [
                { text: { en: '"Room 9. Paid cash, no ID."', ru: '«Номер 9. Заплатил наличными, без документов».', uk: '«Номер 9. Заплатив готівкою, без документів».', es: '«Habitación 9. Pagó en efectivo, sin documentos».' }, next: 'kid_told', effect: { trouble: 1 } },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie', effect: { flags: { lied_kid: true } } },
              ]
            : s.flags.kid_couch
            ? [
                { text: { en: 'Nod at the couch. "He\'s asleep. Go easy."', ru: 'Кивнуть на диван. «Спит. Полегче с ним».', uk: 'Кивнути на диван. «Спить. Обережніше з ним».', es: 'Señalar el sofá con la cabeza. «Está dormido. Con cuidado».' }, next: 'kid_couch_told' },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie', effect: { flags: { lied_kid: true } } },
              ]
            : [
                { text: { en: '"He came by. I turned him away."', ru: '«Заходил. Я его не {пустил|пустила}».', uk: '«Заходив. Я його не {пустив|пустила}».', es: '«Vino. No lo dejé quedarse».' }, next: 'kid_out_told' },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie2' },
              ] },
      kid_told: { who: 'guest', text: { en: "No ID, and you gave him a room. We'll talk about that later.", ru: 'Без документов, и вы дали ему номер. Об этом поговорим позже.', uk: 'Без документів, і ви дали йому номер. Про це поговоримо пізніше.', es: 'Sin documentos, y usted le dio una habitación. De eso hablaremos más tarde.' }, next: 'grey' },
      kid_couch_told: { who: 'guest', text: { en: "…Off the street and off the books. First smart thing anyone's done tonight.", ru: '…Не на улице и не в книге. Первый умный поступок за эту ночь.', uk: '…Не на вулиці й не в книзі. Перший розумний вчинок за цю ніч.', es: '…Fuera de la calle y fuera del registro. Lo primero sensato que alguien hace esta noche.' }, next: 'grey' },
      kid_out_told: { who: 'guest', text: { en: "Back into the rain. Great. If we find him, I'll tell you how that went.", ru: 'Обратно под дождь. Прекрасно. Если найдём, расскажу, чем это кончилось.', uk: 'Назад під дощ. Чудово. Якщо знайдемо, розповім, чим це скінчилося.', es: 'De vuelta a la lluvia. Genial. Si lo encontramos, le cuento cómo acabó.' }, next: 'grey' },
      kid_lie: { who: 'narr', text: { en: 'She looks at you a second too long. Then at the stairs. Then back at you.', ru: 'Она смотрит на вас на секунду дольше, чем нужно. Потом на лестницу. Потом снова на вас.', uk: 'Вона дивиться на вас на секунду довше, ніж треба. Потім на сходи. Потім знову на вас.', es: 'Le sostiene la mirada un segundo de más. Luego mira la escalera. Luego otra vez a usted.' }, next: 'grey' },
      kid_lie2: { who: 'narr', text: { en: 'She puts the photo away.', ru: 'Она убирает фото.', uk: 'Вона ховає фото.', es: 'Guarda la foto.' }, next: 'grey' },
      grey: { who: 'guest', text: (s) => s.flags.envelope
            ? { en: "One more thing. A woman in a grey coat. She leaves envelopes with night clerks. The last clerk who kept one is missing. Are you keeping anything?", ru: 'И ещё. Женщина в сером пальто. Оставляет конверты ночным портье. Последний портье, который взял такой, пропал. Вы что-нибудь храните?', uk: 'І ще. Жінка в сірому пальті. Лишає конверти нічним портьє. Останній портьє, який узяв такий, зник. Ви щось зберігаєте?', es: 'Otra cosa. Una mujer con abrigo gris. Deja sobres a los recepcionistas de noche. El último que guardó uno ha desaparecido. ¿Usted guarda algo?' }
            : { en: "One more thing. A woman in a grey coat. She leaves envelopes with night clerks. Has she been in?", ru: 'И ещё. Женщина в сером пальто. Оставляет конверты ночным портье. Заходила?', uk: 'І ще. Жінка в сірому пальті. Лишає конверти нічним портьє. Заходила?', es: 'Otra cosa. Una mujer con abrigo gris. Deja sobres a los recepcionistas de noche. ¿Ha pasado por aquí?' },
           choices: (s) => s.flags.envelope
            ? [
                { text: { en: 'Hand over the envelope.', ru: 'Отдать конверт.', uk: 'Віддати конверт.', es: 'Entregar el sobre.' }, next: 'hand', effect: { cash: -200, flags: { envelope: false, gave_envelope: true } } },
                { text: { en: '"Nothing back here but room keys, officer."', ru: '«Тут только ключи от номеров, офицер».', uk: '«Тут лише ключі від номерів, офіцере».', es: '«Aquí solo hay llaves de habitaciones, agente».' }, next: 'lie', effect: { flags: { lied_cop: true } } },
              ]
            : [
                { text: { en: '"She came in. I said no."', ru: '«Приходила. Я {отказал|отказала}».', uk: '«Приходила. Я {відмовив|відмовила}».', es: '«Vino. Le dije que no».' }, next: 'refused_told' },
                { text: { en: '"Never seen her."', ru: '«Никогда не {видел|видела}».', uk: '«Ніколи не {бачив|бачила}».', es: '«Nunca la he visto».' }, next: 'lie_soft' },
              ] },
      hand: { who: 'guest', text: { en: "Smart. You didn't open it? Good. Don't. Somebody will come asking. Tell them I took it.", ru: 'Умно. Не открывали? Хорошо. И не открывайте. Кто-то придёт спрашивать. Скажите, что забрала я.', uk: 'Розумно. Не відкривали? Добре. І не відкривайте. Хтось прийде питати. Скажіть, що забрала я.', es: 'Bien pensado. ¿No lo abrió? Bien. No lo haga. Alguien vendrá a preguntar. Diga que me lo llevé yo.' }, next: 'end' },
      lie: { who: 'narr', text: { en: 'She looks at the drawer. Then at you. She writes something down and leaves her card on the desk.', ru: 'Она смотрит на ящик. Потом на вас. Что-то записывает и оставляет на стойке визитку.', uk: 'Вона дивиться на шухляду. Потім на вас. Щось записує і лишає на стійці візитівку.', es: 'Mira el cajón. Luego a usted. Anota algo y deja su tarjeta en el mostrador.' }, next: 'end' },
      refused_told: { who: 'guest', text: { en: "Good. That was the right call. Keep making it.", ru: 'Хорошо. Правильное решение. Так и продолжайте.', uk: 'Добре. Правильне рішення. Так і продовжуйте.', es: 'Bien. Fue la decisión correcta. Siga tomándola.' }, next: 'end' },
      lie_soft: { who: 'narr', text: { en: "She nods. She doesn't believe you, but she nods, and leaves.", ru: 'Она кивает. Не верит, но кивает и уходит.', uk: 'Вона киває. Не вірить, але киває і йде.', es: 'Asiente. No le cree, pero asiente y se va.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 0.7,  rate: 1.05 }, time: '06:00', name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' }, portrait: portrait('#7a2a2a', false, true), start: 'a',
    nodes: {
      a: { who: 'guest', text: { en: "Morning. Register.", ru: 'Утро. Касса.', uk: 'Ранок. Каса.', es: 'Buenos días. La caja.' }, next: 'count' },
      count: { who: 'narr', text: { en: 'He counts it twice. Once for the hotel, once for himself.', ru: 'Он пересчитывает дважды. Раз для отеля, раз для себя.', uk: 'Він перераховує двічі. Раз для готелю, раз для себе.', es: 'La cuenta dos veces. Una para el hotel, otra para él.' }, next: 'b' },
      b: { who: 'guest', text: (s) => s.flags.marv_key
            ? { en: "Marv got his key for free again? I told you. That's coming out of your pay.", ru: 'Марв опять получил ключ бесплатно? Я же говорил. Вычту из твоих.', uk: 'Марв знову отримав ключ безкоштовно? Я ж казав. Вирахую з твоїх.', es: '¿Marv se llevó la llave gratis otra vez? Te lo dije. Sale de tu paga.' }
            : s.flags.marv_lobby
            ? { en: "Why is Marv on my couch? …Never mind. Don't tell me.", ru: 'Почему Марв на моём диване? …Неважно. Не рассказывай.', uk: 'Чому Марв на моєму дивані? …Байдуже. Не розповідай.', es: '¿Por qué está Marv en mi sofá? …Da igual. No me lo cuentes.' }
            : { en: "Marv paid? First time in a month.", ru: 'Марв заплатил? Впервые за месяц.', uk: 'Марв заплатив? Уперше за місяць.', es: '¿Marv pagó? Primera vez en un mes.' },
           effect: (s) => (s.flags.marv_key ? { cash: -20 } : {}),
           next: 'end' },
    }
  },
],
  pickEnding(state) {
    const f = state.flags;
    if (state.trouble >= TROUBLE_MAX) return 'fired';
    if (f.lied_cop && f.envelope) return f.phone_obeyed ? 'envelope' : 'voice';
    if (f.gave_envelope) return 'handed';
    if (f.saved_dana && f.kid_couch) return 'saint';
    if (state.cash >= 120) return 'rich';
    return 'normal';
  },
  endings: {
    fired: {
      en: ['SHIFT OVER', "One night, and Sal has already run out of patience; he counts the trouble before he counts the cash. 'Don't come back.' You walk home in the rain."],
      ru: ['СМЕНА ОКОНЧЕНА', 'Одной ночи хватило, чтобы у Сэла кончилось терпение; он считает проблемы раньше, чем деньги. «Не возвращайся». Вы идёте домой под дождём.'],
      uk: ['ЗМІНУ ЗАКІНЧЕНО', 'Однієї ночі вистачило, щоб у Села урвався терпець; він рахує проблеми раніше, ніж гроші. «Не повертайся». Ви йдете додому під дощем.'],
      es: ['FIN DEL TURNO', 'A Sal le bastó una sola noche para perder la paciencia; cuenta los problemas antes que el dinero. «No vuelvas». Usted vuelve a casa bajo la lluvia.'] },
    envelope: {
      en: ['ROOM TWELVE', "You said what she told you to say. You lied to a cop. The envelope is in the drawer. Tomorrow night someone comes for it, and you already know his voice."],
      ru: ['ДВЕНАДЦАТЫЙ НОМЕР', 'Вы сказали то, что она велела. Вы соврали полицейской. Конверт лежит в ящике. Завтра ночью за ним придут, и вы уже знаете этот голос.'],
      uk: ['ДВАНАДЦЯТИЙ НОМЕР', 'Ви сказали те, що вона веліла. Ви збрехали поліцейській. Конверт лежить у шухляді. Завтра вночі по нього прийдуть, і ви вже знаєте цей голос.'],
      es: ['LA HABITACIÓN DOCE', 'Dijo lo que ella le mandó decir. Le mintió a una policía. El sobre está en el cajón. Mañana por la noche alguien vendrá a buscarlo, y usted ya conoce su voz.'] },
    voice: {
      en: ['HE KNOWS YOUR VOICE', "The envelope is still in the drawer. The cop has your name. The man on the phone has your voice. Tomorrow night, one of them comes first."],
      ru: ['ОН ЗНАЕТ ВАШ ГОЛОС', 'Конверт всё ещё в ящике. У полицейской есть ваше имя. У мужчины из телефона есть ваш голос. Завтра ночью кто-то из них придёт первым.'],
      uk: ['ВІН ЗНАЄ ВАШ ГОЛОС', 'Конверт досі в шухляді. У поліцейської є ваше ім’я. У чоловіка з телефону є ваш голос. Завтра вночі хтось із них прийде першим.'],
      es: ['ÉL CONOCE SU VOZ', 'El sobre sigue en el cajón. La policía tiene su nombre. El hombre del teléfono tiene su voz. Mañana por la noche, uno de los dos llegará primero.'] },
    handed: {
      en: ['ACROSS THE STREET', "The envelope is gone, and so is the money. At dawn a woman in grey stands across the street, not moving, looking at the hotel."],
      ru: ['ЧЕРЕЗ ДОРОГУ', 'Конверта нет, и денег тоже. На рассвете женщина в сером стоит через дорогу, не двигаясь, и смотрит на отель.'],
      uk: ['ЧЕРЕЗ ДОРОГУ', 'Конверта немає, і грошей теж. На світанку жінка в сірому стоїть через дорогу, не рухаючись, і дивиться на готель.'],
      es: ['ENFRENTE', 'El sobre ya no está, y el dinero tampoco. Al amanecer, una mujer de gris espera al otro lado de la calle, inmóvil, mirando el hotel.'] },
    rich: {
      en: ['GOOD NIGHT', "Best register in months. Sal almost smiles. Every dollar of it came from rooms. Remember how that felt."],
      ru: ['ХОРОШАЯ НОЧЬ', 'Лучшая касса за месяцы. Сэл почти улыбается. Каждый доллар за номера. Запомните, каково это.'],
      uk: ['ГАРНА НІЧ', 'Найкраща каса за місяці. Сел майже всміхається. Кожен долар за номери. Запам’ятайте, як це.'],
      es: ['UNA BUENA NOCHE', 'La mejor caja en meses. Sal casi sonríe. Cada dólar salió de las habitaciones. Recuerde esa sensación.'] },
    saint: {
      en: ['THE NIGHT CLERK', "The register is thin. But Dana slept behind her own lock, and Leo slept at all. Some nights that's the whole job."],
      ru: ['НОЧНОЙ ПОРТЬЕ', 'Касса тощая. Зато Дана спала за своим замком, а Лео вообще спал. В некоторые ночи это и есть вся работа.'],
      uk: ['НІЧНИЙ ПОРТЬЄ', 'Каса худа. Зате Дана спала за своїм замком, а Лео взагалі спав. У деякі ночі це і є вся робота.'],
      es: ['{EL RECEPCIONISTA|LA RECEPCIONISTA} DE NOCHE', 'La caja está flaca. Pero Dana durmió tras su propia cerradura, y Leo, al menos, durmió. Hay noches en que ese es todo el trabajo.'] },
    normal: {
      en: ['ANOTHER NIGHT', "Dawn. Nothing terrible happened. Nothing good either. The phone doesn't ring. Yet."],
      ru: ['ЕЩЁ ОДНА НОЧЬ', 'Рассвет. Ничего ужасного не случилось. Ничего хорошего тоже. Телефон не звонит. Пока.'],
      uk: ['ЩЕ ОДНА НІЧ', 'Світанок. Нічого жахливого не сталося. Нічого доброго теж. Телефон не дзвонить. Поки що.'],
      es: ['OTRA NOCHE', 'Amanece. No pasó nada terrible. Nada bueno tampoco. El teléfono no suena. Todavía.'] },
  },
});
