// Night 1 — the envelope.
// Scene: { name, voice, portrait, start, nodes: { id: { who, text, choices|next, effect } } }; text/choices/effect may be functions of state.
NIGHTS.push({
  id: 1,
  title: { en: 'Night one', ru: 'Ночь первая', uk: 'Ніч перша', es: 'Primera noche' },
  scenes: [
  {
    voice: { gender: 'm', pitch: 0.85, rate: 0.9 }, name: { en: 'Marv, room 7', ru: 'Марв, номер 7', uk: 'Марв, номер 7', es: 'Marv, habitación 7' }, portrait: portrait('#4a5a6a', false, false), start: 'a',
    nodes: {
      a: { who: 'guest', text: { en: "Lost my key again. I know, I know. And rent's Saturday, I know that too. Just the spare, please.", ru: 'Опять потерял ключ. Знаю, знаю. И за комнату в субботу, это я тоже знаю. Просто запасной, пожалуйста.', uk: 'Знову загубив ключ. Знаю, знаю. І за кімнату в суботу, це я теж знаю. Просто запасний, будь ласка.', es: 'Perdí la llave otra vez. Ya sé, ya sé. Y el alquiler es el sábado, eso también lo sé. Solo la de repuesto, por favor.' },
           choices: [
             { text: { en: 'Hand him the spare. Say nothing about rent.', ru: 'Дать запасной. Про оплату промолчать.', uk: 'Дати запасний. Про оплату промовчати.', es: 'Darle la de repuesto. No decir nada del alquiler.' }, next: 'key', effect: { flags: { marv_key: true } } },
             { text: { en: '"Key\'s yours when I see thirty for last week."', ru: '«Ключ получишь, когда увижу тридцать за прошлую неделю».', uk: '«Ключ отримаєш, коли побачу тридцять за минулий тиждень».', es: '«La llave es tuya cuando vea los treinta de la semana pasada».' }, next: 'pay', effect: { cash: 30, flags: { marv_paid: true } } },
             { text: { en: '"No key. Manager\'s orders. Lobby couch is free."', ru: '«Ключа нет. Приказ управляющего. Диван в холле свободен».', uk: '«Ключа немає. Наказ управителя. Диван у холі вільний».', es: '«No hay llave. Órdenes del gerente. El sofá del vestíbulo está libre».' }, next: 'lobby', effect: { flags: { marv_lobby: true } } },
           ] },
      key: { who: 'guest', text: { en: "You're the only one in this building who still looks at me. Night.", ru: 'В этом доме больше никто на меня не смотрит. Только вы. Спокойной.', uk: 'У цьому будинку більше ніхто на мене не дивиться. Тільки ви. Добраніч.', es: 'Usted es {el único|la única} en este edificio que todavía me mira. Buenas noches.' }, next: 'end' },
      pay: { who: 'guest', text: { en: "…Right. Here. That was food money, but sure.", ru: '…Ясно. Держите. Это были деньги на еду, но ладно.', uk: '…Ясно. Тримайте. Це були гроші на їжу, але гаразд.', es: '…Ya. Tome. Era para comer, pero bueno.' }, next: 'pay2' },
      pay2: { who: 'narr', text: { en: 'He takes the key and does not look at you again. Thirty dollars buys a lot of not looking.', ru: 'Он берёт ключ и больше на вас не смотрит. За тридцать долларов можно долго не смотреть.', uk: 'Він бере ключ і більше на вас не дивиться. За тридцять доларів можна довго не дивитися.', es: 'Toma la llave y no vuelve a dirigirle la mirada. Treinta dólares compran mucho no mirar.' }, next: 'end' },
      lobby: { who: 'narr', text: { en: 'He folds himself onto the couch under the broken lamp. Coat as a blanket. The lamp has been broken longer than Marv has owed rent. It\'s close.', ru: 'Он сворачивается на диване под сломанной лампой. Пальто вместо одеяла. Лампа сломана дольше, чем Марв не платит за комнату. Но ненамного.', uk: 'Він згортається на дивані під зламаною лампою. Пальто замість ковдри. Лампа зламана довше, ніж Марв не платить за кімнату. Але ненабагато.', es: 'Se encoge en el sofá, bajo la lámpara rota. El abrigo como manta. La lámpara lleva rota más tiempo del que Marv lleva sin pagar. Por poco.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 1.0,  rate: 1.1 }, name: { en: 'Dana & Rick', ru: 'Дана и Рик', uk: 'Дана і Рік', es: 'Dana y Rick' }, label: { en: 'A couple', ru: 'Пара', uk: 'Пара', es: 'Una pareja' }, portrait: portrait('#8a3a5a', false, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'A couple. He is loud and sure of himself. She stands half a step behind, looks at you and mouths: "help".', ru: 'Пара. Он громкий и уверенный. Она стоит на полшага позади, смотрит на вас и одними губами: «помоги».', uk: 'Пара. Він гучний і впевнений. Вона стоїть на півкроку позаду, дивиться на вас і самими губами: «допоможи».', es: 'Una pareja. Él, ruidoso y seguro de sí. Ella, medio paso atrás, cruza la mirada con usted y articula sin voz: «ayuda».' }, next: 'b' },
      b: { who: 'guest', text: { en: "One room, one bed, top floor. And no calls, we're busy. Right babe?", ru: 'Один номер, одна кровать, верхний этаж. И никаких звонков, мы заняты. Да, детка?', uk: 'Один номер, одне ліжко, верхній поверх. І жодних дзвінків, ми зайняті. Так, крихітко?', es: 'Una habitación, una cama, último piso. Y nada de llamadas, estamos ocupados. ¿Verdad, nena?' },
           choices: [
             { text: { en: 'Give them the room. Not your business.', ru: 'Дать номер. Не ваше дело.', uk: 'Дати номер. Не ваша справа.', es: 'Darles la habitación. No es asunto suyo.' }, next: 'room', effect: { cash: 60 } },
             { text: { en: '"Only two singles left tonight. Separate floors. Sorry."', ru: '«Остались только два одноместных. На разных этажах. Извините».', uk: '«Лишилися тільки два одномісні. На різних поверхах. Вибачте».', es: '«Solo quedan dos individuales esta noche. En pisos distintos. Lo siento».' }, next: 'singles', effect: { cash: 80, flags: { saved_dana: true } } },
             { text: { en: '"Sir, I think she wants to leave."', ru: '«Сэр, мне кажется, она хочет уйти».', uk: '«Пане, мені здається, вона хоче піти».', es: '«Señor, creo que ella quiere irse».' }, next: 'blunt', effect: { trouble: 1 } },
           ] },
      room: { who: 'narr', text: { en: 'She takes the key card without a word. The elevator doors close on her face.', ru: 'Она берёт карту-ключ молча. Двери лифта закрываются перед её лицом.', uk: 'Вона бере картку-ключ мовчки. Двері ліфта зачиняються перед її обличчям.', es: 'Ella toma la tarjeta sin decir palabra. Las puertas del ascensor se le cierran en la cara.' }, next: 'end' },
      singles: { who: 'guest', text: { en: "Separate— fine. Whatever. Fine.", ru: 'На разных… ладно. Неважно. Ладно.', uk: 'На різних… гаразд. Байдуже. Гаразд.', es: 'Separadas… bien. Lo que sea. Bien.' }, next: 'singles2' },
      singles2: { who: 'narr', text: { en: 'She signs for hers. Under her name she writes, very small: thank you.', ru: 'Она расписывается за свой. Под именем пишет, очень мелко: спасибо.', uk: 'Вона розписується за свій. Під іменем пише, дуже дрібно: дякую.', es: 'Firma por la suya. Debajo de su nombre escribe, muy pequeño: gracias.' }, next: 'end' },
      blunt: { who: 'guest', text: { en: "Who asked you? Forget it. This place is a dump anyway.", ru: 'А тебя кто спрашивал? Забудь. Всё равно дыра, а не отель.', uk: 'А тебе хто питав? Забудь. Усе одно діра, а не готель.', es: '¿Y a usted quién le preguntó? Olvídelo. Total, este sitio es una pocilga.' }, next: 'blunt2' },
      blunt2: { who: 'narr', text: { en: 'He slams the door. She follows him out. Slowly.', ru: 'Он хлопает дверью. Она выходит за ним. Медленно.', uk: 'Він грюкає дверима. Вона виходить за ним. Повільно.', es: 'Da un portazo. Ella sale tras él. Despacio.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 1.3,  rate: 1.15 }, name: { en: 'Kid in a hoodie', ru: 'Парень в худи', uk: 'Хлопець у худі', es: 'Chico con sudadera' }, portrait: portrait('#6a5a2a', true, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'Seventeen, maybe. Backpack. Cash already in his hand. He keeps checking the door behind him.', ru: 'Лет семнадцать, наверное. Рюкзак. Наличные уже в руке. Всё время оглядывается на дверь.', uk: 'Років сімнадцять, мабуть. Рюкзак. Готівка вже в руці. Весь час озирається на двері.', es: 'Diecisiete, quizá. Mochila. El dinero ya en la mano. No deja de mirar la puerta a su espalda.' }, next: 'b' },
      b: { who: 'guest', text: { en: "One night. I've got fifty. I don't— I don't have ID on me. Please.", ru: 'Одну ночь. У меня пятьдесят. У меня… у меня нет с собой документов. Пожалуйста.', uk: 'Одну ніч. У мене п’ятдесят. У мене… у мене немає з собою документів. Будь ласка.', es: 'Una noche. Tengo cincuenta. No… no llevo documentos encima. Por favor.' },
           choices: [
             { text: { en: 'Take the cash. Give him a room. No questions.', ru: 'Взять деньги. Дать номер. Без вопросов.', uk: 'Взяти гроші. Дати номер. Без запитань.', es: 'Tomar el dinero. Darle una habitación. Sin preguntas.' }, next: 'room', effect: { cash: 50, flags: { kid_room: true } } },
             { text: { en: '"No ID, no room. Rules."', ru: '«Нет документов, нет номера. Правила».', uk: '«Немає документів, немає номера. Правила».', es: '«Sin documentos no hay habitación. Son las reglas».' }, next: 'out', effect: { flags: { kid_out: true } } },
             { text: { en: '"Keep your money. Couch, blanket, till morning. Then we talk."', ru: '«Оставь деньги. Диван, плед, до утра. Потом поговорим».', uk: '«Залиш гроші. Диван, плед, до ранку. Потім поговоримо».', es: '«Guárdate el dinero. Sofá y manta hasta la mañana. Luego hablamos».' }, next: 'couch', effect: { flags: { kid_couch: true } } },
           ] },
      room: { who: 'narr', text: { en: 'He takes the stairs, not the elevator. Two at a time. Smart. The elevator has opinions about the third floor.', ru: 'Он идёт по лестнице, не на лифте. Через две ступеньки. Умно. У лифта своё мнение о третьем этаже.', uk: 'Він іде сходами, не ліфтом. Через дві сходинки. Розумно. Ліфт має свою думку про третій поверх.', es: 'Sube por la escalera, no en el ascensor. De dos en dos. Listo. El ascensor tiene sus opiniones sobre el tercer piso.' }, next: 'end' },
      out: { who: 'narr', text: { en: 'He nods like he expected it. The rain takes him.', ru: 'Он кивает, будто так и знал. Дождь забирает его.', uk: 'Він киває, наче так і знав. Дощ забирає його.', es: 'Asiente como si lo esperara. La lluvia se lo lleva.' }, next: 'end' },
      couch: { who: 'guest', text: { en: "…Okay. Okay. Thanks. My name's Leo, if— if anyone asks. Don't tell them.", ru: '…Ладно. Ладно. Спасибо. Меня зовут Лео, если… если кто спросит. Не говорите им.', uk: '…Гаразд. Гаразд. Дякую. Мене звати Лео, якщо… якщо хтось спитає. Не кажіть їм.', es: '…Bueno. Bueno. Gracias. Me llamo Leo, por si… por si alguien pregunta. No se lo diga.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'f', pitch: 0.8,  rate: 0.88 }, name: { en: 'The woman in grey', ru: 'Женщина в сером', uk: 'Жінка в сірому', es: 'La mujer de gris' }, portrait: portrait('#5a5a5a', false, true), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'She does not shake the rain off. She does not ask for a room. She puts an envelope on the desk between you.', ru: 'Она не стряхивает дождь. Не спрашивает про номер. Кладёт конверт на стойку между вами.', uk: 'Вона не струшує дощ. Не питає про номер. Кладе конверт на стійку між вами.', es: 'No se sacude la lluvia. No pide habitación. Pone un sobre en el mostrador, entre los dos.' }, next: 'b' },
      b: { who: 'guest', text: { en: "This stays behind your desk until tomorrow night. Two hundred, now, for the favour. And if anyone asks: I was never here.", ru: 'Это лежит у вас за стойкой до завтрашней ночи. Двести, сейчас, за услугу. И если кто-то спросит: меня здесь не было.', uk: 'Це лежить у вас за стійкою до завтрашньої ночі. Двісті, зараз, за послугу. І якщо хтось спитає: мене тут не було.', es: 'Esto se queda detrás de su mostrador hasta mañana por la noche. Doscientos, ahora, por el favor. Y si alguien pregunta: nunca estuve aquí.' },
           choices: [
             { text: { en: 'Take the envelope. Take the money.', ru: 'Взять конверт. Взять деньги.', uk: 'Взяти конверт. Взяти гроші.', es: 'Tomar el sobre. Tomar el dinero.' }, next: 'take', effect: { cash: 200, flags: { envelope: true } } },
             { text: { en: '"What\'s in it?"', ru: '«Что внутри?»', uk: '«Що всередині?»', es: '«¿Qué hay dentro?»' }, next: 'ask' },
             { text: { en: '"No. Have a good night."', ru: '«Нет. Хорошей ночи».', uk: '«Ні. Гарної ночі».', es: '«No. Que pase buena noche».' }, next: 'no' },
           ] },
      ask: { who: 'guest', text: { en: "Paper. Nothing that bites. Two hundred says you stop asking.", ru: 'Бумага. Ничего кусачего. Двести за то, чтобы вы перестали спрашивать.', uk: 'Папір. Нічого кусючого. Двісті за те, щоб ви перестали питати.', es: 'Papel. Nada que muerda. Doscientos para que deje de preguntar.' },
             choices: [
               { text: { en: 'Take it.', ru: 'Взять.', uk: 'Взяти.', es: 'Aceptarlo.' }, next: 'take', effect: { cash: 200, flags: { envelope: true } } },
               { text: { en: 'Refuse.', ru: 'Отказаться.', uk: 'Відмовитися.', es: 'Negarse.' }, next: 'no' },
             ] },
      take: { who: 'guest', text: { en: "One more thing. If a man calls tonight and asks for room twelve: there is no room twelve. You understand?", ru: 'И ещё. Если сегодня позвонит мужчина и спросит двенадцатый номер: двенадцатого номера нет. Понимаете?', uk: 'І ще. Якщо сьогодні подзвонить чоловік і спитає дванадцятий номер: дванадцятого номера немає. Розумієте?', es: 'Una cosa más. Si esta noche llama un hombre y pregunta por la habitación doce: no hay habitación doce. ¿Entiende?' }, next: 'take2' },
      take2: { who: 'narr', text: { en: 'There is no room twelve. There never was. The envelope is heavier than paper should be. She is gone before you look up.', ru: 'Двенадцатого номера нет. Никогда не было. Конверт тяжелее, чем должна быть бумага. Когда вы поднимаете глаза, её уже нет.', uk: 'Дванадцятого номера немає. Ніколи не було. Конверт важчий, ніж має бути папір. Коли ви підводите очі, її вже немає.', es: 'No hay habitación doce. Nunca la hubo. El sobre pesa más de lo que debería pesar el papel. Cuando levanta la vista, ella ya no está.' }, next: 'end' },
      no: { who: 'guest', text: { en: "Pity. You have an honest face. Those are expensive.", ru: 'Жаль. У вас честное лицо. Такие дорого стоят.', uk: 'Шкода. У вас чесне обличчя. Такі дорого коштують.', es: 'Lástima. Tiene usted una cara honrada. Esas salen caras.' }, next: 'no2' },
      no2: { who: 'narr', text: { en: 'At the door she stops. "Someone will call anyway." Then the rain.', ru: 'У двери она останавливается. «Позвонят всё равно». Потом дождь.', uk: 'Біля дверей вона зупиняється. «Подзвонять усе одно». Потім дощ.', es: 'En la puerta se detiene. «Llamarán de todos modos». Luego, la lluvia.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 0.6,  rate: 0.9 }, time: '03:00', name: { en: 'The desk phone', ru: 'Телефон на стойке', uk: 'Телефон на стійці', es: 'El teléfono del mostrador' }, portrait: portrait('#2a2a2a', false, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: '03:00. The desk phone rings. It has not rung in a year. Not even the time the boiler caught fire.', ru: '03:00. Звонит телефон на стойке. Он не звонил год. Даже когда загорелся бойлер.', uk: '03:00. Дзвонить телефон на стійці. Він не дзвонив рік. Навіть коли загорівся бойлер.', es: '03:00. Suena el teléfono del mostrador. Lleva un año sin sonar. Ni siquiera cuando se incendió la caldera.' }, next: 'b' },
      b: { who: 'guest', text: { en: "Room twelve, please.", ru: 'Двенадцатый номер, пожалуйста.', uk: 'Дванадцятий номер, будь ласка.', es: 'La habitación doce, por favor.' },
           choices: (s) => s.flags.envelope
            ? [
                { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: 'no12', effect: { flags: { phone_obeyed: true } } },
                { text: { en: '"She left something. Who is this?"', ru: '«Она кое-что оставила. Кто это?»', uk: '«Вона дещо залишила. Хто це?»', es: '«Ella dejó algo. ¿Quién habla?»' }, next: 'talk', effect: { flags: { phone_talked: true } } },
                { text: { en: 'Hang up.', ru: 'Положить трубку.', uk: 'Покласти слухавку.', es: 'Colgar.' }, next: 'hangup' },
              ]
            : [
                { text: { en: '"There is no room twelve here."', ru: '«Здесь нет двенадцатого номера».', uk: '«Тут немає дванадцятого номера».', es: '«Aquí no hay habitación doce».' }, next: 'no12b' },
                { text: { en: '"Who is this?"', ru: '«Кто это?»', uk: '«Хто це?»', es: '«¿Quién habla?»' }, next: 'who' },
                { text: { en: 'Hang up.', ru: 'Положить трубку.', uk: 'Покласти слухавку.', es: 'Colgar.' }, next: 'hangup' },
              ] },
      no12: { who: 'guest', text: { en: "…Good. Then she found the right desk. Tomorrow. Don't open it.", ru: '…Хорошо. Значит, она нашла правильную стойку. Завтра. Не открывайте.', uk: '…Добре. Отже, вона знайшла правильну стійку. Завтра. Не відкривайте.', es: '…Bien. Entonces encontró el mostrador correcto. Mañana. No lo abra.' }, next: 'click' },
      talk: { who: 'guest', text: { en: "She told you to say there's no room twelve. You didn't. I'll remember your voice.", ru: 'Она велела вам сказать, что двенадцатого номера нет. Вы не сказали. Я запомню ваш голос.', uk: 'Вона веліла вам сказати, що дванадцятого номера немає. Ви не сказали. Я запам’ятаю ваш голос.', es: 'Ella le pidió que dijera que no hay habitación doce. No lo hizo. Recordaré su voz.' }, next: 'click', effect: { trouble: 1 } },
      no12b: { who: 'guest', text: { en: "Then she hasn't come yet. She will.", ru: 'Значит, она ещё не приходила. Придёт.', uk: 'Отже, вона ще не приходила. Прийде.', es: 'Entonces todavía no ha venido. Vendrá.' }, next: 'click' },
      who: { who: 'narr', text: { en: 'Breathing. Traffic somewhere behind him. Then a click.', ru: 'Дыхание. Где-то за ним шум машин. Потом щелчок.', uk: 'Дихання. Десь за ним шум машин. Потім клацання.', es: 'Una respiración. Tráfico en algún lugar detrás de él. Luego, un clic.' }, next: 'end' },
      hangup: { who: 'narr', text: { en: 'You put the receiver down. It rings once more, then stops. The silence is worse.', ru: 'Вы кладёте трубку. Он звонит ещё раз, потом замолкает. Тишина хуже.', uk: 'Ви кладете слухавку. Він дзвонить ще раз, потім замовкає. Тиша гірша.', es: 'Cuelga el auricular. Suena una vez más y se calla. El silencio es peor.' }, next: 'end' },
      click: { who: 'narr', text: { en: 'Click. Your hand is not quite steady when you hang up.', ru: 'Щелчок. Рука не совсем твёрдая, когда вы кладёте трубку.', uk: 'Клацання. Рука не зовсім тверда, коли ви кладете слухавку.', es: 'Clic. Al colgar, la mano no le responde del todo.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'f', pitch: 0.95, rate: 1.0 }, name: { en: 'Officer Reyes', ru: 'Офицер Рейес', uk: 'Офіцер Реєс', es: 'Agente Reyes' }, portrait: portrait('#2a3a6a', true, false), start: 'a',
    nodes: {
      a: { who: 'narr', text: { en: 'A cop. Wet from the rain. She sets a photo on the desk: a boy in a hoodie.', ru: 'Полицейская. Мокрая от дождя. Кладёт на стойку фото: парень в худи.', uk: 'Поліцейська. Мокра від дощу. Кладе на стійку фото: хлопець у худі.', es: 'Una policía. Empapada de lluvia. Deja una foto en el mostrador: un chico con sudadera.' }, next: 'b' },
      b: { who: 'guest', text: { en: "Seventeen. Ran from a bad house. Parents say worse. Seen him?", ru: 'Семнадцать. Сбежал из плохого дома. Родители говорят хуже. Видели его?', uk: 'Сімнадцять. Утік із поганого дому. Батьки кажуть гірше. Бачили його?', es: 'Diecisiete. Huyó de una mala casa. Los padres dicen cosas peores. ¿Lo ha visto?' },
           choices: (s) => s.flags.kid_room
            ? [
                { text: { en: '"Room 9. He paid cash. No ID."', ru: '«Номер 9. Заплатил наличными. Без документов».', uk: '«Номер 9. Заплатив готівкою. Без документів».', es: '«Habitación 9. Pagó en efectivo. Sin documentos».' }, next: 'kid_told', effect: { trouble: 1 } },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie', effect: { flags: { lied_kid: true } } },
              ]
            : s.flags.kid_couch
            ? [
                { text: { en: 'Nod at the couch. "He\'s asleep. Be gentle."', ru: 'Кивнуть на диван. «Спит. Аккуратнее».', uk: 'Кивнути на диван. «Спить. Обережніше».', es: 'Señalar el sofá con la cabeza. «Está dormido. Con cuidado».' }, next: 'kid_couch_told' },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie', effect: { flags: { lied_kid: true } } },
              ]
            : [
                { text: { en: '"He came by. I sent him away."', ru: '«Заходил. Я его не {пустил|пустила}».', uk: '«Заходив. Я його не {пустив|пустила}».', es: '«Vino. No lo dejé quedarse».' }, next: 'kid_out_told' },
                { text: { en: '"Haven\'t seen him."', ru: '«Не {видел|видела}».', uk: '«Не {бачив|бачила}».', es: '«No lo he visto».' }, next: 'kid_lie2' },
              ] },
      kid_told: { who: 'guest', text: { en: "No ID and you gave him a room. We'll talk about that. Later.", ru: 'Без документов, и вы дали ему номер. Об этом поговорим. Позже.', uk: 'Без документів, і ви дали йому номер. Про це поговоримо. Пізніше.', es: 'Sin documentos, y usted le dio una habitación. De eso hablaremos. Más tarde.' }, next: 'grey' },
      kid_couch_told: { who: 'guest', text: { en: "…You kept him off the street and off the books. That's the first smart thing anyone's done tonight.", ru: '…Вы не пустили его на улицу и не вписали в книгу. Первый умный поступок за эту ночь.', uk: '…Ви не пустили його на вулицю і не вписали в книгу. Перший розумний вчинок за цю ніч.', es: '…Lo sacó de la calle y no lo anotó en el registro. Es lo primero sensato que alguien hace esta noche.' }, next: 'grey' },
      kid_out_told: { who: 'guest', text: { en: "Into the rain. Great. If we find him, I'll let you know how that went.", ru: 'Под дождь. Прекрасно. Если найдём, расскажу, чем это кончилось.', uk: 'Під дощ. Чудово. Якщо знайдемо, розповім, чим це скінчилося.', es: 'A la lluvia. Genial. Si lo encontramos, ya le contaré cómo le fue.' }, next: 'grey' },
      kid_lie: { who: 'narr', text: { en: 'She looks at you a beat too long. Then at the stairs. Then back.', ru: 'Она смотрит на вас на секунду дольше, чем нужно. Потом на лестницу. Потом снова на вас.', uk: 'Вона дивиться на вас на секунду довше, ніж треба. Потім на сходи. Потім знову на вас.', es: 'Le sostiene la mirada un segundo de más. Luego mira la escalera. Luego, otra vez a usted.' }, next: 'grey' },
      kid_lie2: { who: 'narr', text: { en: 'She puts the photo away.', ru: 'Она убирает фото.', uk: 'Вона ховає фото.', es: 'Guarda la foto.' }, next: 'grey' },
      grey: { who: 'guest', text: (s) => s.flags.envelope
            ? { en: "One more. Woman in grey. Leaves envelopes with night clerks. The last clerk who held one is missing. You holding anything?", ru: 'И ещё. Женщина в сером. Оставляет конверты ночным портье. Последний портье, который взял такой, пропал. Вы что-нибудь храните?', uk: 'І ще. Жінка в сірому. Лишає конверти нічним портьє. Останній портьє, який узяв такий, зник. Ви щось зберігаєте?', es: 'Otra cosa. Una mujer de gris. Deja sobres a los recepcionistas de noche. El último que guardó uno ha desaparecido. ¿Usted guarda algo?' }
            : { en: "One more. Woman in grey. Leaves envelopes with night clerks. She been in?", ru: 'И ещё. Женщина в сером. Оставляет конверты ночным портье. Заходила?', uk: 'І ще. Жінка в сірому. Лишає конверти нічним портьє. Заходила?', es: 'Otra cosa. Una mujer de gris. Deja sobres a los recepcionistas de noche. ¿Ha pasado por aquí?' },
           choices: (s) => s.flags.envelope
            ? [
                { text: { en: 'Hand over the envelope.', ru: 'Отдать конверт.', uk: 'Віддати конверт.', es: 'Entregar el sobre.' }, next: 'hand', effect: { cash: -200, flags: { envelope: false, gave_envelope: true } } },
                { text: { en: '"Nothing here but room keys, officer."', ru: '«Тут только ключи от номеров, офицер».', uk: '«Тут лише ключі від номерів, офіцере».', es: '«Aquí solo hay llaves de habitaciones, agente».' }, next: 'lie', effect: { flags: { lied_cop: true } } },
              ]
            : [
                { text: { en: '"She came. I said no."', ru: '«Приходила. Я {отказал|отказала}».', uk: '«Приходила. Я {відмовив|відмовила}».', es: '«Vino. Le dije que no».' }, next: 'refused_told' },
                { text: { en: '"Never seen her."', ru: '«Никогда не {видел|видела}».', uk: '«Ніколи не {бачив|бачила}».', es: '«Nunca la he visto».' }, next: 'lie_soft' },
              ] },
      hand: { who: 'guest', text: { en: "Smart. You didn't open it? …Good. Don't ever. Somebody will come asking. Tell them I took it.", ru: 'Умно. Не открывали? …Хорошо. Никогда не открывайте. Кто-то придёт спрашивать. Скажите, что забрала я.', uk: 'Розумно. Не відкривали? …Добре. Ніколи не відкривайте. Хтось прийде питати. Скажіть, що забрала я.', es: 'Bien pensado. ¿No lo abrió? …Bien. No lo haga nunca. Alguien vendrá a preguntar. Diga que me lo llevé yo.' }, next: 'end' },
      lie: { who: 'narr', text: { en: 'She looks at the drawer. At you. Writes something down. Leaves a card on the desk.', ru: 'Она смотрит на ящик. На вас. Что-то записывает. Оставляет на стойке визитку.', uk: 'Вона дивиться на шухляду. На вас. Щось записує. Лишає на стійці візитівку.', es: 'Mira el cajón. A usted. Anota algo. Deja una tarjeta en el mostrador.' }, next: 'end' },
      refused_told: { who: 'guest', text: { en: "Good. That was the right call. Keep it that way.", ru: 'Хорошо. Правильное решение. Так и держите.', uk: 'Добре. Правильне рішення. Так і тримайте.', es: 'Bien. Fue la decisión correcta. Siga así.' }, next: 'end' },
      lie_soft: { who: 'narr', text: { en: 'She nods. She does not believe you, but she nods. Professional courtesy. Neither of you is paid enough for the truth.', ru: 'Она кивает. Не верит, но кивает. Профессиональная вежливость. Ни одному из вас не платят столько, чтобы говорить правду.', uk: 'Вона киває. Не вірить, але киває. Професійна ввічливість. Жодному з вас не платять стільки, щоб казати правду.', es: 'Asiente. No le cree, pero asiente. Cortesía profesional. A ninguno de los dos le pagan lo suficiente por la verdad.' }, next: 'end' },
    }
  },
  {
    voice: { gender: 'm', pitch: 0.7,  rate: 1.05 }, time: '06:00', name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' }, portrait: portrait('#7a2a2a', false, true), start: 'a',
    nodes: {
      a: { who: 'guest', text: { en: "Morning. Register. Now.", ru: 'Утро. Касса. Сейчас.', uk: 'Ранок. Каса. Зараз.', es: 'Buenos días. La caja. Ya.' }, next: 'count' },
      count: { who: 'narr', text: { en: 'He counts the register twice: once for the hotel, once for himself.', ru: 'Он пересчитывает кассу дважды: раз для отеля, раз для себя.', uk: 'Він перераховує касу двічі: раз для готелю, раз для себе.', es: 'Cuenta la caja dos veces: una para el hotel y otra para él.' }, next: 'b' },
      b: { who: 'guest', text: (s) => s.flags.marv_key
            ? { en: "Marv's key again, no rent? I told you. It's coming out of yours.", ru: 'Опять ключ Марву без оплаты? Я же говорил. Вычитаю из твоих.', uk: 'Знову ключ Марву без оплати? Я ж казав. Вираховую з твоїх.', es: '¿Otra vez la llave a Marv sin pagar? Te lo dije. Sale de tu bolsillo.' }
            : s.flags.marv_lobby
            ? { en: "Why is Marv on my couch? …Never mind. Actually, don't tell me.", ru: 'Почему Марв на моём диване? …Неважно. Вообще-то не рассказывай.', uk: 'Чому Марв на моєму дивані? …Байдуже. Власне, не розповідай.', es: '¿Por qué está Marv en mi sofá? …Da igual. Mejor no me lo cuentes.' }
            : { en: "Marv paid? First time in a month. Huh.", ru: 'Марв заплатил? Впервые за месяц. Ну надо же.', uk: 'Марв заплатив? Уперше за місяць. Оце так.', es: '¿Marv pagó? Primera vez en un mes. Vaya.' },
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
      en: ['ROOM TWELVE', "You said what she told you to say. You lied to a cop. The envelope waits in the drawer. Tomorrow night someone will come for it, and you already know their voice."],
      ru: ['ДВЕНАДЦАТЫЙ НОМЕР', 'Вы сказали то, что она велела. Вы соврали полицейской. Конверт ждёт в ящике. Завтра ночью за ним кто-то придёт, и вы уже знаете его голос.'],
      uk: ['ДВАНАДЦЯТИЙ НОМЕР', 'Ви сказали те, що вона веліла. Ви збрехали поліцейській. Конверт чекає в шухляді. Завтра вночі по нього хтось прийде, і ви вже знаєте його голос.'],
      es: ['LA HABITACIÓN DOCE', 'Dijo lo que ella le mandó decir. Le mintió a una policía. El sobre espera en el cajón. Mañana por la noche alguien vendrá a buscarlo, y usted ya conoce su voz.'] },
    voice: {
      en: ['HE KNOWS YOUR VOICE', "The envelope is still in the drawer. The cop has your name. The man on the phone has your voice, or the click you gave him instead; he keeps both. Tomorrow night, one of them comes first."],
      ru: ['ОН ЗНАЕТ ВАШ ГОЛОС', 'Конверт всё ещё в ящике. У полицейской есть ваше имя. У мужчины из телефона есть ваш голос или щелчок, которым вы его заменили; он хранит и то и другое. Завтра ночью кто-то из них придёт первым.'],
      uk: ['ВІН ЗНАЄ ВАШ ГОЛОС', 'Конверт досі в шухляді. У поліцейської є ваше ім’я. У чоловіка з телефону є ваш голос або клацання, яким ви його замінили; він зберігає і те, й інше. Завтра вночі хтось із них прийде першим.'],
      es: ['ÉL CONOCE SU VOZ', 'El sobre sigue en el cajón. La policía tiene su nombre. El hombre del teléfono tiene su voz, o el clic que usted le dio en su lugar; guarda ambos. Mañana por la noche, uno de los dos llegará primero.'] },
    handed: {
      en: ['ACROSS THE STREET', "The envelope is gone. So is the money. At dawn a woman in grey stands across the street, not moving, looking at the hotel."],
      ru: ['ЧЕРЕЗ ДОРОГУ', 'Конверта нет. Денег тоже. На рассвете женщина в сером стоит через дорогу, не двигаясь, и смотрит на отель.'],
      uk: ['ЧЕРЕЗ ДОРОГУ', 'Конверта немає. Грошей теж. На світанку жінка в сірому стоїть через дорогу, не рухаючись, і дивиться на готель.'],
      es: ['ENFRENTE', 'El sobre ya no está. El dinero tampoco. Al amanecer, una mujer de gris espera al otro lado de la calle, inmóvil, mirando el hotel.'] },
    rich: {
      en: ['GOOD NIGHT', "Best register in months. Sal almost smiles. Every dollar of it came from rooms. Remember what that felt like."],
      ru: ['ХОРОШАЯ НОЧЬ', 'Лучшая касса за месяцы. Сэл почти улыбается. Каждый доллар — за номера. Запомните, каково это.'],
      uk: ['ГАРНА НІЧ', 'Найкраща каса за місяці. Сел майже всміхається. Кожен долар — за номери. Запам’ятайте, як це.'],
      es: ['UNA BUENA NOCHE', 'La mejor caja en meses. Sal casi sonríe. Cada dólar salió de las habitaciones. Recuerde esa sensación.'] },
    saint: {
      en: ['THE NIGHT CLERK', "The register is thin. But Dana slept behind her own lock and Leo slept at all. Some nights that's the whole job."],
      ru: ['НОЧНОЙ ПОРТЬЕ', 'Касса тощая. Зато Дана спала за своим замком, а Лео вообще спал. В некоторые ночи это и есть вся работа.'],
      uk: ['НІЧНИЙ ПОРТЬЄ', 'Каса худа. Зате Дана спала за своїм замком, а Лео взагалі спав. У деякі ночі це і є вся робота.'],
      es: ['{EL RECEPCIONISTA|LA RECEPCIONISTA} DE NOCHE', 'La caja está flaca. Pero Dana durmió tras su propia cerradura, y Leo, al menos, durmió. Hay noches en que ese es todo el trabajo.'] },
    normal: {
      en: ['ANOTHER NIGHT', "Dawn. Nothing terrible happened. Nothing good either. The phone does not ring. Yet."],
      ru: ['ЕЩЁ ОДНА НОЧЬ', 'Рассвет. Ничего ужасного не случилось. Ничего хорошего тоже. Телефон не звонит. Пока.'],
      uk: ['ЩЕ ОДНА НІЧ', 'Світанок. Нічого жахливого не сталося. Нічого доброго теж. Телефон не дзвонить. Поки що.'],
      es: ['OTRA NOCHE', 'Amanece. No pasó nada terrible. Nada bueno tampoco. El teléfono no suena. Todavía.'] },
  },
});
