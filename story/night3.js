// Night 3 — the key. Every key in this night comes from somewhere: the envelope, Marv, or a coat pocket.
NIGHTS.push({
  id: 3,
  title: { en: 'Night three', ru: 'Ночь третья', uk: 'Ніч третя', es: 'Tercera noche' },
  scenes: [
    {
      time: '23:00', name: { en: 'The drawer', ru: 'Ящик стола', uk: 'Шухляда', es: 'El cajón' }, voice: { gender: 'm', pitch: 0.75, rate: 0.92 },
      portrait: objectPortrait('#3a2a1a', '—'), start: 'a',
      nodes: {
        a: { who: 'narr', text: (s) => s.flags.envelope
              ? (s.flags.opened
                  ? { en: "Third night. Rain again. The envelope is in the drawer, the seal you broke pressed flat by someone's thumb. Not yours.", ru: 'Третья ночь. Снова дождь. Конверт в ящике, сорванную вами печать кто-то прижал большим пальцем. Не вы.', uk: 'Третя ніч. Знову дощ. Конверт у шухляді, зірвану вами печатку хтось притиснув великим пальцем. Не ви.', es: 'Tercera noche. Llueve otra vez. El sobre está en el cajón; alguien ha aplastado con el pulgar el sello que usted rompió. No fue usted.' }
                  : { en: "Third night. Rain again. The envelope is still in the drawer. Sal's note: 'Still here. I didn't look. Neither did you, right?'", ru: 'Третья ночь. Снова дождь. Конверт всё ещё в ящике. Записка от Сэла: «На месте. Я не смотрел. Ты ведь тоже, да?»', uk: 'Третя ніч. Знову дощ. Конверт досі в шухляді. Записка від Села: «На місці. Я не дивився. Ти ж теж, так?»', es: 'Tercera noche. Llueve otra vez. El sobre sigue en el cajón. Nota de Sal: «Sigue aquí. Yo no miré. Tú tampoco, ¿verdad?»' })
              : s.flags.delivered
              ? { en: "Third night. Rain again. The drawer is empty. The register is short a hundred. Sal's note: 'My share. Don't ask.'", ru: 'Третья ночь. Снова дождь. Ящик пуст. В кассе не хватает сотни. Записка от Сэла: «Моя доля. Не спрашивай».', uk: 'Третя ніч. Знову дощ. Шухляда порожня. У касі бракує сотні. Записка від Села: «Моя частка. Не питай».', es: 'Tercera noche. Llueve otra vez. El cajón está vacío. En la caja faltan cien. Nota de Sal: «Mi parte. No preguntes».' }
              : { en: "Third night. Rain again. The drawer is empty. Sal's note: 'Someone rang for room twelve in the day. I said there isn't one. Same as you.'", ru: 'Третья ночь. Снова дождь. Ящик пуст. Записка от Сэла: «Днём звонили, спрашивали двенадцатый номер. Я сказал, что такого нет. Как и ты».', uk: 'Третя ніч. Знову дощ. Шухляда порожня. Записка від Села: «Удень дзвонили, питали дванадцятий номер. Я сказав, що такого немає. Як і ти».', es: 'Tercera noche. Llueve otra vez. El cajón está vacío. Nota de Sal: «De día llamaron preguntando por la habitación doce. Dije que no existe. Igual que tú».' },
             // "The register is short a hundred … 'My share'": Sal really takes it (only on the delivered branch above)
             effect: (s) => ({ cash: !s.flags.envelope && s.flags.delivered ? -100 : 0, flags: { dana_safe: !(s.flags.dana_stays && !s.flags.dana_hide) } }),
             next: (s) => (s.flags.envelope ? (s.flags.opened ? 'key' : 'sealed') : 'end') },
        sealed: { who: 'narr', text: { en: 'Still sealed. Still heavier than paper. A day older, like you.', ru: 'Всё ещё запечатан. Всё ещё тяжелее бумаги. На день старше, как и вы.', uk: 'Досі запечатаний. Досі важчий за папір. На день старший, як і ви.', es: 'Sigue cerrado. Sigue pesando más que el papel. Un día más viejo, como usted.' },
                  choices: [
                    { text: { en: 'Leave it sealed.', ru: 'Не вскрывать.', uk: 'Не розпечатувати.', es: 'Dejarlo cerrado.' }, next: 'end' },
                    { text: { en: 'Open it.', ru: 'Открыть.', uk: 'Відкрити.', es: 'Abrirlo.' }, next: 'open', effect: { flags: { opened: true } } },
                  ] },
        open: { who: 'narr', text: { en: 'A key, brass tag: 12. A photograph: this desk, this lamp, you. Taken from the door. You never saw anyone at the door.', ru: 'Ключ с латунной биркой: 12. Фотография: эта стойка, эта лампа, вы. Снято от двери. Вы никого у двери не видели.', uk: 'Ключ із латунною биркою: 12. Фотографія: ця стійка, ця лампа, ви. Знято від дверей. Ви нікого біля дверей не бачили.', es: 'Una llave con chapa de latón: 12. Una fotografía: este mostrador, esta lámpara, usted. Tomada desde la puerta. Usted nunca vio a nadie en la puerta.' }, next: 'key' },
        key: { who: 'narr', text: { en: 'The key is in your hand before you decide anything.', ru: 'Ключ у вас в руке раньше, чем вы что-то решили.', uk: 'Ключ у вас у руці раніше, ніж ви щось вирішили.', es: 'La llave está en su mano antes de que usted decida nada.' },
               choices: [
                 { text: { en: 'Pocket the key. Put the envelope back.', ru: 'Ключ в карман. Конверт обратно.', uk: 'Ключ у кишеню. Конверт назад.', es: 'Guardarse la llave. Devolver el sobre al cajón.' }, next: 'pocket', effect: { flags: { has_key: true } } },
                 { text: { en: 'Put it all back. The seal is ruined anyway.', ru: 'Положить всё обратно. Печать всё равно испорчена.', uk: 'Покласти все назад. Печатка все одно зіпсована.', es: 'Dejarlo todo como estaba. El sello ya está roto de todos modos.' }, next: 'end' },
               ] },
        pocket: { who: 'narr', text: { en: 'It weighs nothing. The envelope now weighs less than nothing. Anyone who lifts it will know.', ru: 'Он ничего не весит. Конверт теперь весит меньше, чем ничего. Любой, кто его поднимет, поймёт.', uk: 'Він нічого не важить. Конверт тепер важить менше, ніж нічого. Будь-хто, хто його підніме, зрозуміє.', es: 'No pesa nada. El sobre ahora pesa menos que nada. Quien lo levante lo notará.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Marv, room 7', ru: 'Марв, номер 7', uk: 'Марв, номер 7', es: 'Marv, habitación 7' }, voice: { gender: 'm', pitch: 0.85, rate: 0.9 },
      portrait: portrait('#4a5a6a', false, false), start: 'a',
      nodes: {
        a: { who: 'guest', effect: (s) => (s.flags.paid_marv ? { flags: { marv_thanked: true } } : {}), text: (s) => ((t) => (s.flags.paid_marv && !s.flags.marv_thanked ? { en: "Somebody paid my week. Sal says it wasn't him. …Thank you. Don't say anything. " + t.en, ru: "Кто-то оплатил мою неделю. Сэл говорит, не он. …Спасибо. Ничего не говорите. " + t.ru, uk: "Хтось оплатив мій тиждень. Сел каже, не він. …Дякую. Нічого не кажіть. " + t.uk, es: "Alguien me pagó la semana. Sal dice que no fue él. …Gracias. No diga nada. " + t.es } : t))(s.flags.marv_told
              ? { en: "Couldn't sleep. Found something. Denis gave me this in spring, the night before. 'Keep it for whoever's next,' he said. I figure that's you.", ru: 'Не спится. Кое-что нашёл. Денис дал мне это весной, накануне. «Сохрани для того, кто будет следующим», сказал. Похоже, это вы.', uk: 'Не спиться. Дещо знайшов. Денис дав мені це навесні, напередодні. «Збережи для того, хто буде наступним», сказав. Схоже, це ви.', es: 'No podía dormir. Encontré algo. Denis me dio esto en primavera, la noche antes. «Guárdalo para el que venga después», me dijo. Supongo que es usted.' }
              : { en: "Couldn't sleep. Footsteps on the top floor again. Nobody lives on the top floor. Been like that since spring.", ru: 'Не спится. Опять шаги на верхнем этаже. На верхнем этаже никто не живёт. Так с весны.', uk: 'Не спиться. Знову кроки на верхньому поверсі. На верхньому поверсі ніхто не живе. Так із весни.', es: 'No podía dormir. Otra vez pasos en el último piso. En el último piso no vive nadie. Así desde la primavera.' }),
             next: (s) => (s.flags.marv_told ? 'tag' : 'steps') },
        tag: { who: 'narr', text: { en: 'A key on the desk. Brass tag, worn smooth: 12. He keeps two fingers on it, like it might slide off.', ru: 'Ключ на стойке. Латунная бирка, стёртая до гладкости: 12. Он держит на нём два пальца, будто ключ может соскользнуть.', uk: 'Ключ на стійці. Латунна бирка, стерта до гладкості: 12. Він тримає на ньому два пальці, наче ключ може зісковзнути.', es: 'Una llave sobre el mostrador. Chapa de latón, gastada hasta quedar lisa: 12. Él la sujeta con dos dedos, como si pudiera resbalar.' },
               choices: [
                 { text: { en: 'Take the key.', ru: 'Взять ключ.', uk: 'Взяти ключ.', es: 'Tomar la llave.' }, next: 'took', effect: { flags: { has_key: true } } },
                 { text: { en: '"Keep it, Marv. I don\'t want to be whoever\'s next."', ru: '«Оставь себе, Марв. Я не хочу быть {следующим|следующей}».', uk: '«Лиши собі, Марве. Я не хочу бути {наступним|наступною}».', es: '«Quédatela, Marv. No quiero ser {el siguiente|la siguiente}».' }, next: 'kept' },
               ] },
        took: { who: 'guest', text: { en: "Denis said: 'Don't use it. Just don't let Sal have it.' I'm telling you the same. The first half louder.", ru: 'Денис сказал: «Не пользуйся. Просто не отдавай Сэлу». Я вам говорю то же самое. Первую половину громче.', uk: 'Денис сказав: «Не користуйся. Просто не віддавай Селу». Я вам кажу те саме. Першу половину голосніше.', es: 'Denis me dijo: «No la uses. Solo que no se la quede Sal». Yo le digo lo mismo. La primera parte, más fuerte.' }, next: 'end' },
        kept: { who: 'guest', text: { en: "…Yeah. Yeah, that's probably right. Denis didn't want to be, either.", ru: '…Да. Да, наверное, вы правы. Денис тоже не хотел.', uk: '…Так. Так, мабуть, ваша правда. Денис теж не хотів.', es: '…Sí. Sí, seguramente tiene razón. Denis tampoco quería serlo.' }, next: 'kept2' },
        kept2: { who: 'narr', text: { en: 'He puts the key back in his coat. He looks older going up the stairs than he did coming down.', ru: 'Он убирает ключ обратно в пальто. Поднимаясь по лестнице, он выглядит старше, чем когда спускался.', uk: 'Він ховає ключ назад у пальто. Піднімаючись сходами, він виглядає старшим, ніж коли спускався.', es: 'Vuelve a guardar la llave en el abrigo. Subiendo la escalera parece más viejo que cuando bajó.' }, next: 'end' },
        steps: { who: 'narr', text: { en: 'He waits for you to say the top floor is empty. You don\'t.', ru: 'Он ждёт, что вы скажете: верхний этаж пуст. Вы не говорите.', uk: 'Він чекає, що ви скажете: верхній поверх порожній. Ви не кажете.', es: 'Espera que usted diga que el último piso está vacío. Usted no lo dice.' },
                 choices: [
                   { text: { en: '"What\'s up there, Marv?"', ru: '«Что там наверху, Марв?»', uk: '«Що там нагорі, Марве?»', es: '«¿Qué hay ahí arriba, Marv?»' }, next: 'floor' },
                   { text: { en: '"Old pipes. Go to bed."', ru: '«Старые трубы. Иди спать».', uk: '«Старі труби. Іди спати».', es: '«Tuberías viejas. Vete a dormir».' }, next: 'bed' },
                 ] },
        floor: { who: 'guest', text: { en: "A door with no number. Sal says it's storage. Storage doesn't walk around at four in the morning.", ru: 'Дверь без номера. Сэл говорит, кладовка. Кладовки не ходят туда-сюда в четыре утра.', uk: 'Двері без номера. Сел каже, комора. Комори не ходять туди-сюди о четвертій ранку.', es: 'Una puerta sin número. Sal dice que es un trastero. Los trasteros no se pasean a las cuatro de la mañana.' }, next: 'end' },
        bed: { who: 'guest', text: { en: "Pipes. Sure. Pipes that go quiet when the lift comes up.", ru: 'Трубы. Конечно. Трубы, которые замолкают, когда поднимается лифт.', uk: 'Труби. Аякже. Труби, які замовкають, коли піднімається ліфт.', es: 'Tuberías. Claro. Tuberías que se callan cuando sube el ascensor.' }, next: 'end' },
      }
    },
    {
      time: '23:30', name: { en: 'Officer Reyes', ru: 'Офицер Рейес', uk: 'Офіцер Реєс', es: 'Agente Reyes' }, voice: { gender: 'f', pitch: 0.95, rate: 1.0 },
      portrait: portrait('#2a3a6a', true, false), start: 'a',
      when: (s) => s.flags.informant,
      nodes: {
        a: { who: 'narr', text: { en: 'Half past eleven. Reyes, off duty, no badge showing. She puts something on the desk smaller than a matchbox. It does not look like anything.', ru: 'Половина двенадцатого. Рейес, не при исполнении, значка не видно. Кладёт на стойку что-то меньше спичечного коробка. Ни на что не похоже.', uk: 'Пів на дванадцяту. Реєс, не на службі, значка не видно. Кладе на стійку щось менше за сірникову коробку. Ні на що не схоже.', es: 'Las once y media. Reyes, fuera de servicio, sin placa a la vista. Deja en el mostrador algo más pequeño que una caja de cerillas. No parece nada.' }, next: 'b' },
        b: { who: 'guest', text: { en: "When the next one comes, this goes under the flap. It calls me. You don't have to.", ru: 'Когда придёт следующий, это идёт под клапан. Оно позвонит мне само. Вам не придётся.', uk: 'Коли прийде наступний, це йде під клапан. Воно подзвонить мені саме. Вам не доведеться.', es: 'Cuando llegue el próximo, esto va bajo la solapa. Me avisa por sí solo. Usted no tiene que hacerlo.' },
             choices: [
               { text: { en: '"And when he finds it?"', ru: '«А когда он его найдёт?»', uk: '«А коли він його знайде?»', es: '«¿Y cuando él lo encuentre?»' }, next: 'finds' },
               { text: { en: '"What did Denis put in his?"', ru: '«А Денис что положил в свой?»', uk: '«А Денис що поклав у свій?»', es: '«¿Y qué puso Denis en el suyo?»' }, next: 'denis' },
               { text: { en: 'Take it without a word.', ru: 'Взять молча.', uk: 'Взяти мовчки.', es: 'Tomarlo sin decir nada.' }, next: 'quiet' },
               { text: { en: 'Leave it on the desk.', ru: 'Оставить на стойке.', uk: 'Лишити на стійці.', es: 'Dejarlo en el mostrador.' }, next: 'leave' },
             ] },
        leave: { who: 'guest', text: { en: "Then it's on the desk. He'll assume it's yours anyway.", ru: 'Значит, на стойке. Он всё равно решит, что оно ваше.', uk: 'Отже, на стійці. Він усе одно вирішить, що воно ваше.', es: 'Entonces queda en el mostrador. Él dará por hecho que es de usted igualmente.' }, next: 'leave2' },
        leave2: { who: 'narr', text: { en: 'She goes. It stays where she put it. You work the rest of the night around it, the way you work around the drawer.', ru: 'Она уходит. Оно остаётся там, куда она его положила. Остаток ночи вы работаете, обходя его, как обходите ящик.', uk: 'Вона йде. Воно лишається там, куди вона його поклала. Решту ночі ви працюєте, оминаючи його, як оминаєте шухляду.', es: 'Se va. Aquello se queda donde ella lo dejó. El resto de la noche usted trabaja rodeándolo, como rodea el cajón.' }, next: 'end' },
        finds: { who: 'guest', text: { en: "He won't. And if he does, it was yours. That's how it works, clerk. You knew that when you said yes.", ru: 'Не найдёт. А если найдёт, это было ваше. Так это работает, портье. Вы это знали, когда сказали «да».', uk: 'Не знайде. А якщо знайде, це було ваше. Так це працює, портьє. Ви це знали, коли сказали «так».', es: 'No lo encontrará. Y si lo encuentra, era de usted. Así funciona, recepcionista. Usted lo sabía cuando dijo que sí.' }, next: 'stays' },
        denis: { who: 'guest', text: { en: "Nothing. Denis asked questions instead. Questions don't transmit.", ru: 'Ничего. Денис вместо этого задавал вопросы. Вопросы сигнала не дают.', uk: 'Нічого. Денис натомість ставив запитання. Запитання сигналу не дають.', es: 'Nada. Denis hizo preguntas en su lugar. Las preguntas no emiten señal.' }, next: 'stays' },
        quiet: { who: 'narr', text: { en: 'She nods as if you had said something. Most people say something.', ru: 'Она кивает, будто вы что-то сказали. Большинство что-то говорят.', uk: 'Вона киває, наче ви щось сказали. Більшість щось кажуть.', es: 'Ella asiente como si usted hubiera dicho algo. La mayoría dice algo.' }, next: 'stays' },
        // Only reached from the taking choices; tracker_device = the thing is in your pocket (night-3 local).
        stays: { who: 'narr', effect: { flags: { tracker_device: true } }, text: { en: 'It sits on the desk. It is yours now whether you pick it up or not. You pick it up.', ru: 'Оно лежит на стойке. Теперь оно ваше, возьмёте вы его или нет. Вы берёте.', uk: 'Воно лежить на стійці. Тепер воно ваше, візьмете ви його чи ні. Ви берете.', es: 'Está sobre el mostrador. Ya es suyo, lo tome o no. Usted lo toma.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Rick', ru: 'Рик', uk: 'Рік', es: 'Rick' }, voice: { gender: 'm', pitch: 1.0, rate: 1.1 },
      portrait: portrait('#8a3a5a', false, false), start: 'a',
      when: (s) => s.flags.dana_stays,
      nodes: {
        a: { who: 'narr', text: (s) => s.flags.dana_hide
              ? { en: 'Rick. Sober, which is worse. He holds up a photo of Dana on his phone like a badge.', ru: 'Рик. Трезвый, что хуже. Держит телефон с фотографией Даны, как значок.', uk: 'Рік. Тверезий, що гірше. Тримає телефон із фотографією Дани, наче значок.', es: 'Rick. Sobrio, que es peor. Levanta el teléfono con una foto de Dana, como si fuera una placa.' }
              : { en: "Rick. Sober, which is worse. He does not ask which room. 'Four,' he says. 'Her sister talks.'", ru: 'Рик. Трезвый, что хуже. Он не спрашивает, какой номер. «Четвёртый», говорит. «Её сестра болтливая».', uk: 'Рік. Тверезий, що гірше. Він не питає, який номер. «Четвертий», каже. «Її сестра балакуча».', es: 'Rick. Sobrio, que es peor. No pregunta qué habitación. «La cuatro», dice. «Su hermana habla demasiado».' },
             next: 'b' },
        b: { who: 'guest', text: (s) => s.flags.misdirected_rick
              ? (s.flags.dana_hide
                  ? { en: "North. You said north. Four hours of north, on your word. …She's here. Which room.", ru: 'На север. Вы сказали, на север. Четыре часа севера, под ваше слово. …Она здесь. Какой номер.', uk: 'На північ. Ви сказали, на північ. Чотири години півночі, під ваше слово. …Вона тут. Який номер.', es: 'Al norte. Usted dijo al norte. Cuatro horas de norte, por su palabra. …Está aquí. ¿Qué habitación?' }
                  : { en: "North. You said north. Four hours of north, on your word. …I'm going up. You can watch or not watch.", ru: 'На север. Вы сказали, на север. Четыре часа севера, под ваше слово. …Я поднимаюсь. Можете смотреть, можете не смотреть.', uk: 'На північ. Ви сказали, на північ. Чотири години півночі, під ваше слово. …Я піднімаюся. Можете дивитися, можете не дивитися.', es: 'Al norte. Usted dijo al norte. Cuatro horas de norte, por su palabra. …Voy a subir. Puede mirar o no mirar.' })
              : s.flags.dana_hide
              ? { en: "She's here. Don't. I know she's here. Which room.", ru: 'Она здесь. Не надо. Я знаю, что она здесь. Какой номер.', uk: 'Вона тут. Не треба. Я знаю, що вона тут. Який номер.', es: 'Está aquí. Ni lo intente. Sé que está aquí. ¿Qué habitación?' }
              : { en: "I'm going up. You can watch or not watch. Your choice, clerk.", ru: 'Я поднимаюсь. Можете смотреть, можете не смотреть. Ваш выбор, портье.', uk: 'Я піднімаюся. Можете дивитися, можете не дивитися. Ваш вибір, портьє.', es: 'Voy a subir. Puede mirar o no mirar. Usted elige, recepcionista.' },
             choices: (s) => s.flags.dana_hide
              ? [
                  // If he already caught the "north" lie in night 2, lying again costs trouble.
                  { text: { en: '"She checked out Wednesday. Paid cash. Went north."', ru: '«Она выехала в среду. Заплатила наличными. Уехала на север».', uk: '«Вона виїхала в середу. Заплатила готівкою. Поїхала на північ».', es: '«Se fue el miércoles. Pagó en efectivo. Se marchó al norte».' }, next: 'gone', effect: (s) => ({ trouble: s.flags.misdirected_rick ? 1 : 0, flags: { dana_safe: true } }) },
                  { text: { en: '"If she were, you\'d be the last to hear it from me."', ru: '«Даже если бы была, от меня вы узнали бы в последнюю очередь».', uk: '«Навіть якби була, від мене ви дізналися б в останню чергу».', es: '«Si estuviera aquí, usted sería el último en saberlo por mí».' }, next: 'blocked', effect: { trouble: 1, flags: { dana_safe: true } } },
                ]
              : [
                  { text: { en: 'Stand in front of the stairs.', ru: 'Встать перед лестницей.', uk: 'Стати перед сходами.', es: 'Ponerse delante de la escalera.' }, next: 'stairs', effect: { trouble: 1, flags: { rick_found: true } } },
                  { text: { en: 'Pick up the phone. Dial the police, slowly and loudly.', ru: 'Снять трубку. Набрать полицию, медленно и громко.', uk: 'Зняти слухавку. Набрати поліцію, повільно й голосно.', es: 'Descolgar el teléfono. Marcar el número de la policía, despacio y en voz alta.' }, next: 'phone', effect: { flags: { dana_safe: true } } },
                  { text: { en: 'Let him go. Note the time.', ru: 'Пропустить. Записать время.', uk: 'Пропустити. Записати час.', es: 'Dejarlo pasar. Anotar la hora.' }, next: 'let', effect: { flags: { rick_found: true } } },
                ] },
        gone: { who: 'narr', text: (s) => s.flags.misdirected_rick
              ? { en: "'North.' He says it like a bill he means to collect. He believes the cash part anyway; men like Rick always believe the cash part. He leaves a number. You don't write it down.", ru: '«На север». Он говорит это, как счёт, который намерен взыскать. В часть про наличные он всё равно верит; такие, как Рик, всегда верят в часть про наличные. Оставляет номер. Вы его не записываете.', uk: '«На північ». Він каже це, як рахунок, який має намір стягнути. У частину про готівку він усе одно вірить; такі, як Рік, завжди вірять у частину про готівку. Лишає номер. Ви його не записуєте.', es: '«Al norte». Lo dice como una deuda que piensa cobrar. La parte del efectivo se la cree igual; los tipos como Rick siempre se creen la parte del efectivo. Deja un número. Usted no lo apunta.' }
              : { en: "He believes the cash part. Men like Rick always believe the cash part. He leaves a number 'in case she calls'. You don't write it down.", ru: 'Он верит в часть про наличные. Такие, как Рик, всегда верят в часть про наличные. Оставляет номер «на случай, если позвонит». Вы его не записываете.', uk: 'Він вірить у частину про готівку. Такі, як Рік, завжди вірять у частину про готівку. Лишає номер «на випадок, якщо подзвонить». Ви його не записуєте.', es: 'Se cree la parte del efectivo. Los tipos como Rick siempre se creen la parte del efectivo. Deja un número «por si llama». Usted no lo apunta.' },
              next: 'end' },
        blocked: { who: 'guest', text: { en: "Last. Right. …Every hotel in this city has a night clerk. Only one of them is you.", ru: 'В последнюю очередь. Ясно. …В каждом отеле этого города есть ночной портье. Но только {один|одна} из них — вы.', uk: 'В останню чергу. Ясно. …У кожному готелі цього міста є нічний портьє. Але тільки {один|одна} із них — ви.', es: 'El último. Ya. …Cada hotel de esta ciudad tiene un recepcionista de noche. Pero solo {uno|una} de ellos es usted.' }, next: 'end' },
        stairs: { who: 'guest', text: { en: "Move.", ru: 'Отойди.', uk: 'Відійди.', es: 'Apártese.' }, next: 'stairs2' },
        stairs2: { who: 'narr', text: { en: "You don't. He goes around you. You hear the knock on 4 from here. Then you hear it stop.", ru: 'Вы не отходите. Он обходит вас. Стук в четвёртый слышно даже отсюда. Потом стук прекращается.', uk: 'Ви не відходите. Він обходить вас. Стукіт у четвертий чути навіть звідси. Потім стукіт припиняється.', es: 'Usted no se aparta. Él pasa por su lado. Desde aquí se oyen los golpes en la 4. Luego se oye cómo paran.' }, next: 'after' },
        phone: { who: 'narr', text: { en: 'He hears every digit. He goes out, not up. The door of 4 stays shut tonight, and he knows which door it is.', ru: 'Он слышит каждую цифру. Выходит, а не поднимается. Дверь четвёртого сегодня остаётся закрытой, и он знает, которая это дверь.', uk: 'Він чує кожну цифру. Виходить, а не піднімається. Двері четвертого сьогодні лишаються зачиненими, і він знає, які це двері.', es: 'Oye cada dígito. Sale a la calle, no sube. La puerta de la 4 sigue cerrada esta noche, y él sabe cuál es.' }, next: 'phone2' },
        phone2: { who: 'narr', text: { en: 'Outside, a man who was smoking, not smoking, watched him go. He noted the room number too. He notes everything.', ru: 'Снаружи мужчина, что курил, не куря, смотрел, как тот уходит. Номер комнаты он тоже отметил. Он отмечает всё.', uk: 'Надворі чоловік, що курив, не курячи, дивився, як той іде. Номер кімнати він теж відзначив. Він відзначає все.', es: 'Fuera, un hombre que fumaba sin fumar lo vio marcharse. También anotó el número de la habitación. Lo anota todo.' }, next: 'end' },
        let: { who: 'narr', text: { en: 'You write 00:40 on the pad. It is the only thing you do. The lift takes him up like it takes anyone.', ru: 'Вы пишете в блокноте 00:40. Это единственное, что вы делаете. Лифт везёт его наверх, как любого другого.', uk: 'Ви пишете в блокноті 00:40. Це єдине, що ви робите. Ліфт везе його нагору, як будь-кого іншого.', es: 'Usted escribe 00:40 en el bloc. Es lo único que hace. El ascensor lo sube como sube a cualquiera.' }, next: 'after' },
        after: { who: 'narr', text: { en: 'Twenty minutes later Dana comes down with her suitcase and sits on the couch in her coat, not crying. She will not go back up. She does not look at you.', ru: 'Через двадцать минут Дана спускается с чемоданом и садится на диван в пальто, не плача. Наверх она больше не пойдёт. На вас она не смотрит.', uk: 'За двадцять хвилин Дана спускається з валізою і сідає на диван у пальті, не плачучи. Нагору вона більше не піде. На вас вона не дивиться.', es: 'Veinte minutos después Dana baja con su maleta y se sienta en el sofá con el abrigo puesto, sin llorar. No volverá a subir. No levanta la vista hacia usted.' }, next: 'end' },
      }
    },
    {
      time: '01:00', name: { en: 'The woman in grey', ru: 'Женщина в сером', uk: 'Жінка в сірому', es: 'La mujer de gris' }, voice: { gender: 'f', pitch: 0.8, rate: 0.88 },
      portrait: portrait('#5a5a5a', false, true), start: 'a',
      nodes: {
        a: { who: 'narr', text: (s) => s.flags.envelope
              ? { en: 'One o\'clock. She looks at the drawer the way Reyes does. She knows it is still in there.', ru: 'Час ночи. Она смотрит на ящик так же, как Рейес. Она знает, что он всё ещё там.', uk: 'Перша ночі. Вона дивиться на шухляду так само, як Реєс. Вона знає, що він досі там.', es: 'La una. Mira el cajón como lo mira Reyes. Sabe que sigue ahí.' }
              : { en: 'One o\'clock. Rain on her shoulders, unshaken. She puts an envelope on the desk. Same weight. Same everything.', ru: 'Час ночи. Дождь на плечах, не стряхнутый. Она кладёт на стойку конверт. Тот же вес. Всё то же.', uk: 'Перша ночі. Дощ на плечах, не струшений. Вона кладе на стійку конверт. Та сама вага. Усе те саме.', es: 'La una. Lluvia en los hombros, sin sacudir. Deja un sobre en el mostrador. El mismo peso. Todo igual.' },
             next: (s) => (s.flags.envelope ? 'still' : 'offer') },
        still: { who: 'guest', text: { en: "Still here. He didn't come for it, or you didn't let him. Tonight he comes. Say the words.", ru: 'Всё ещё здесь. Он за ним не пришёл, или вы не дали. Сегодня он придёт. Скажите слова.', uk: 'Досі тут. Він по нього не прийшов, або ви не дали. Сьогодні він прийде. Скажіть слова.', es: 'Sigue aquí. Él no vino a buscarlo, o usted no le dejó. Esta noche viene. Diga las palabras.' },
                choices: [
                  { text: { en: 'Say the words now, to her.', ru: 'Сказать слова сейчас. Ей.', uk: 'Сказати слова зараз. Їй.', es: 'Decir las palabras ahora. A ella.' }, next: 'toher' },
                  { text: { en: 'Give it back.', ru: 'Вернуть конверт.', uk: 'Повернути конверт.', es: 'Devolver el sobre.' }, next: 'giveback', effect: { cash: -200, flags: { envelope: false, gave_back: true } } },
                ] },
        toher: { who: 'guest', text: { en: "Not to me. To him.", ru: 'Не мне. Ему.', uk: 'Не мені. Йому.', es: 'A mí no. A él.' }, next: 'still2' },
        giveback: { who: 'narr', text: { en: 'She takes it without surprise. She does not weigh it. The two hundred goes back across the desk the way it came, and she does not count that either.', ru: 'Она берёт его без удивления. Не взвешивает. Двести уходят обратно через стойку тем же путём, что пришли, и их она тоже не считает.', uk: 'Вона бере його без подиву. Не зважує. Двісті повертаються через стійку тим самим шляхом, що прийшли, і їх вона теж не рахує.', es: 'Lo toma sin sorpresa. No lo sopesa. Los doscientos cruzan el mostrador de vuelta por donde vinieron, y tampoco los cuenta.' }, next: 'end' },
        still2: { who: 'narr', text: { en: 'No money this time. You were paid already. She leaves the way she came. For her, the door is only a draught.', ru: 'Денег на этот раз нет. Вам уже заплатили. Она уходит так же, как пришла. Для неё дверь — всего лишь сквозняк.', uk: 'Грошей цього разу немає. Вам уже заплатили. Вона йде так само, як прийшла. Для неї двері — лише протяг.', es: 'Esta vez no hay dinero. A usted ya le pagaron. Se va como vino. Para ella, la puerta es solo una corriente de aire.' }, next: 'end' },
        offer: { who: 'guest', text: (s) => s.flags.refused_twice
              ? { en: "Third time. Nobody gets a third time. Two hundred. Same words.", ru: 'Третий раз. Третьего раза не бывает ни у кого. Двести. Те же слова.', uk: 'Третій раз. Третього разу не буває ні в кого. Двісті. Ті самі слова.', es: 'Tercera vez. Nadie tiene una tercera vez. Doscientos. Las mismas palabras.' }
              : { en: "Two hundred. Same words. You know them by now.", ru: 'Двести. Те же слова. Вы их уже знаете.', uk: 'Двісті. Ті самі слова. Ви їх уже знаєте.', es: 'Doscientos. Las mismas palabras. Ya se las sabe.' },
                 choices: [
                   { text: { en: 'Take it.', ru: 'Взять.', uk: 'Взяти.', es: 'Aceptarlo.' }, next: (s) => (s.flags.tracker_device ? 'tracker' : 'took'), effect: { cash: 200, flags: { envelope: true, second_envelope: true } } },
                   { text: { en: '"No."', ru: '«Нет».', uk: '«Ні».', es: '«No».' }, next: 'no' },
                 ] },
        tracker: { who: 'narr', text: { en: "Reyes's thing is in your pocket. The seal is a fold and a drop of wax. It would take a second.", ru: 'Штука Рейес у вас в кармане. Печать — сгиб и капля воска. Это займёт секунду.', uk: 'Штука Реєс у вас у кишені. Печатка — згин і крапля воску. Це займе секунду.', es: 'El aparato de Reyes está en su bolsillo. El sello es un pliegue y una gota de cera. Sería un segundo.' },
                   choices: [
                     { text: { en: 'Slide it under the flap.', ru: 'Подсунуть под клапан.', uk: 'Підсунути під клапан.', es: 'Deslizarlo bajo la solapa.' }, next: 'planted', effect: { flags: { tracker: true } } },
                     { text: { en: 'Leave the envelope clean.', ru: 'Оставить конверт чистым.', uk: 'Лишити конверт чистим.', es: 'Dejar el sobre limpio.' }, next: 'took' },
                   ] },
        planted: { who: 'narr', text: { en: 'It goes in like it was made to. Now the envelope calls somebody. So do you, apparently.', ru: 'Оно входит так, будто для этого и сделано. Теперь конверт кому-то звонит. Как и вы, судя по всему.', uk: 'Воно входить так, наче для цього й зроблене. Тепер конверт комусь дзвонить. Як і ви, судячи з усього.', es: 'Entra como si estuviera hecho para eso. Ahora el sobre llama a alguien. Igual que usted, por lo visto.' }, next: 'end' },
        took: { who: 'narr', text: { en: 'There is no room twelve. You almost say it out loud, alone, to practise.', ru: 'Двенадцатого номера нет. Вы чуть не произносите это вслух, в одиночестве, для тренировки.', uk: 'Дванадцятого номера немає. Ви ледь не кажете це вголос, на самоті, для тренування.', es: 'No hay habitación doce. Casi lo dice en voz alta, a solas, para practicar.' },
                choices: [
                  { text: { en: 'Open it.', ru: 'Открыть.', uk: 'Відкрити.', es: 'Abrirlo.' }, next: 'openkey', effect: { flags: { opened: true } } },
                  { text: { en: 'Leave it sealed.', ru: 'Не вскрывать.', uk: 'Не розпечатувати.', es: 'Dejarlo cerrado.' }, next: 'end' },
                ] },
        openkey: { who: 'narr', text: { en: 'A key, tag 12. A photograph: last night, this desk, you. Your face in it is already tired.', ru: 'Ключ, бирка 12. Фотография: прошлая ночь, эта стойка, вы. Лицо на ней уже усталое.', uk: 'Ключ, бирка 12. Фотографія: минула ніч, ця стійка, ви. Обличчя на ній уже втомлене.', es: 'Una llave, chapa 12. Una fotografía: anoche, este mostrador, usted. En ella su cara ya se ve cansada.' },
                   choices: [
                     { text: { en: 'Take the key out.', ru: 'Вынуть ключ.', uk: 'Вийняти ключ.', es: 'Sacar la llave.' }, next: 'out', effect: { flags: { has_key: true } } },
                     { text: { en: 'Put it back. Press the seal down.', ru: 'Положить обратно. Прижать печать.', uk: 'Покласти назад. Притиснути печатку.', es: 'Volver a meterla. Apretar el sello.' }, next: 'back' },
                   ] },
        out: { who: 'narr', text: { en: 'The photograph you leave. Let him have the face. He has it anyway.', ru: 'Фотографию оставляете. Пусть забирает лицо. Оно у него и так есть.', uk: 'Фотографію лишаєте. Хай забирає обличчя. Воно в нього і так є.', es: 'La fotografía la deja. Que se quede él con la cara. Ya la tiene de todos modos.' }, next: 'end' },
        back: { who: 'narr', text: { en: 'The seal does not close the way it was. They never do. That is what seals are for.', ru: 'Печать не закрывается так, как была. Они никогда не закрываются. Для этого печати и нужны.', uk: 'Печатка не закривається так, як була. Вони ніколи не закриваються. Для цього печатки й потрібні.', es: 'El sello no cierra como antes. Nunca lo hacen. Para eso están los sellos.' }, next: 'end' },
        no: { who: 'guest', text: (s) => s.flags.refused_twice
              ? { en: "Three. I'll write it down. Somebody upstairs collects those too.", ru: 'Три. Я запишу. Кое-кто наверху и такое собирает.', uk: 'Три. Я запишу. Дехто нагорі й таке збирає.', es: 'Tres. Lo anotaré. Alguien de arriba también colecciona eso.' }
              : { en: "No. I'll write it down. Somebody upstairs collects those too.", ru: 'Нет. Я запишу. Кое-кто наверху и такое собирает.', uk: 'Ні. Я запишу. Дехто нагорі й таке збирає.', es: 'No. Lo anotaré. Alguien de arriba también colecciona eso.' },
             next: 'end' },
      }
    },
    {
      time: '02:00', name: { en: 'Leo', ru: 'Лео', uk: 'Лео', es: 'Leo' }, voice: { gender: 'm', pitch: 1.3, rate: 1.15 },
      portrait: portrait('#6a5a2a', true, false), start: 'a',
      when: (s) => s.flags.leo_friend || s.flags.leo_watch,
      nodes: {
        a: { who: 'guest', effect: (s) => (s.flags.leo_money ? { flags: { leo_thanked: true } } : {}), text: (s) => ((t) => (s.flags.leo_money && !s.flags.leo_thanked ? { en: "Somebody left fifty at the shelter. Envelope, my name on it. Nobody writes my name. …I carried it around an hour before I opened it. This hotel's rubbing off on me. " + t.en, ru: "Кто-то оставил в приюте пятьдесят. Конверт, на нём моё имя. Моё имя никто не пишет. …Я час носил его, прежде чем открыть. Ваш отель на меня плохо влияет. " + t.ru, uk: "Хтось залишив у притулку п’ятдесят. Конверт, на ньому моє ім’я. Моє ім’я ніхто не пише. …Я годину носив його, перш ніж відкрити. Ваш готель на мене погано впливає. " + t.uk, es: "Alguien dejó cincuenta en el albergue. Un sobre, con mi nombre. Nadie escribe mi nombre. …Lo llevé encima una hora antes de abrirlo. Este hotel se me está pegando. " + t.es } : t))(s.flags.father_enemy
              ? { en: "Two in the morning, I know. My dad's been parked across the street two nights. He'll get bored. Can I have the couch till he does?", ru: 'Два ночи, знаю. Мой отец две ночи стоит в машине через дорогу. Ему надоест. Можно мне диван, пока не надоело?', uk: 'Друга ночі, знаю. Мій батько дві ночі стоїть у машині через дорогу. Йому набридне. Можна мені диван, поки не набридло?', es: 'Las dos de la mañana, ya lo sé. Mi padre lleva dos noches esperando enfrente, sin bajarse del coche. Ya se aburrirá. ¿Me deja el sofá hasta entonces?' }
              : { en: "Two in the morning, I know. Shelter locks at ten and I missed it, and the ones that don't lock you don't want. Can I have the couch?", ru: 'Два ночи, знаю. Приют закрывают в десять, я не успел, а в те, что не закрывают, лучше не соваться. Можно мне диван?', uk: 'Друга ночі, знаю. Притулок зачиняють о десятій, я не встиг, а в ті, що не зачиняють, краще не потикатися. Можна мені диван?', es: 'Las dos de la mañana, ya lo sé. El albergue cierra a las diez y no llegué, y en los que no cierran mejor no meterse. ¿Me deja el sofá?' }),
             choices: [
               { text: { en: '"Couch. Blanket. Whatever happens at four, you\'re asleep."', ru: '«Диван. Плед. Что бы ни случилось в четыре, ты спишь».', uk: '«Диван. Плед. Хай що станеться о четвертій, ти спиш».', es: '«Sofá. Manta. Pase lo que pase a las cuatro, tú estás dormido».' }, next: 'couch' },
               { text: { en: '"A man in a good coat comes at four. There is a room twelve. It\'s upstairs."', ru: '«В четыре придёт мужчина в хорошем пальто. Двенадцатый номер есть. Он наверху».', uk: '«О четвертій прийде чоловік у гарному пальті. Дванадцятий номер є. Він нагорі».', es: '«A las cuatro viene un hombre con un abrigo bueno. Hay una habitación doce. Está arriba».' }, next: 'truth' },
               { text: { en: '"Twenty bucks. Go somewhere warmer than here tonight."', ru: '«Двадцать баксов. Иди сегодня куда-нибудь, где теплее, чем здесь».', uk: '«Двадцять баксів. Іди сьогодні кудись, де тепліше, ніж тут».', es: '«Toma veinte dólares. Esta noche vete a algún sitio donde haga menos frío».' }, next: 'money', effect: { cash: -20 } },
             ] },
        couch: { who: 'guest', text: { en: "Asleep. Sure. I'm a very light sleeper when I want to be.", ru: 'Сплю. Конечно. Я очень чутко сплю, когда хочу.', uk: 'Сплю. Звісно. Я дуже чутко сплю, коли хочу.', es: 'Dormido. Claro. Tengo el sueño muy ligero cuando quiero.' }, next: 'end' },
        truth: { who: 'guest', text: { en: "…So there is one. Okay. Okay. I'll be on the couch. I'm invisible on a couch. People in coats don't see furniture.", ru: '…Значит, есть. Ладно. Ладно. Я буду на диване. На диване я невидимка. Люди в пальто мебель не замечают.', uk: '…Отже, є. Гаразд. Гаразд. Я буду на дивані. На дивані я невидимка. Люди в пальті меблів не помічають.', es: '…Entonces sí hay una. Bueno. Bueno. Estaré en el sofá. En un sofá soy invisible. La gente con abrigo no ve los muebles.' }, next: 'end' },
        money: { who: 'narr', text: { en: "He takes the twenty. He does not leave. 'It's raining,' he says, as if you might not have noticed, and folds onto the couch.", ru: 'Он берёт двадцатку. Не уходит. «Дождь», говорит, будто вы могли не заметить, и сворачивается на диване.', uk: 'Він бере двадцятку. Не йде. «Дощ», каже, наче ви могли не помітити, і згортається на дивані.', es: 'Toma los veinte. No se va. «Está lloviendo», dice, como si usted no se hubiera dado cuenta, y se acurruca en el sofá.' }, next: 'end' },
      }
    },
    {
      time: '03:00', name: { en: 'The desk phone', ru: 'Телефон на стойке', uk: 'Телефон на стійці', es: 'El teléfono del mostrador' }, voice: { gender: 'm', pitch: 0.6, rate: 0.9 },
      portrait: objectPortrait('#2a2a2a', '☎'), start: 'a',
      nodes: {
        a: { who: 'narr', text: { en: '03:00. The phone. You know its ring now the way you know your own name.', ru: '03:00. Телефон. Вы теперь знаете его звонок, как собственное имя.', uk: '03:00. Телефон. Ви тепер знаєте його дзвінок, як власне ім’я.', es: '03:00. El teléfono. Ya conoce su timbre como conoce su propio nombre.' },
             choices: [
               { text: { en: 'Pick up.', ru: 'Снять трубку.', uk: 'Зняти слухавку.', es: 'Contestar.' }, next: 'denis', effect: { flags: { denis_call: true } } },
               { text: { en: 'Let it ring.', ru: 'Пусть звонит.', uk: 'Хай дзвонить.', es: 'Dejarlo sonar.' }, next: 'ring' },
             ] },
        ring: { who: 'narr', text: { en: 'Eleven rings. On the twelfth it stops. You counted. You wish you hadn\'t.', ru: 'Одиннадцать звонков. На двенадцатом замолкает. Вы считали. Лучше бы не считали.', uk: 'Одинадцять дзвінків. На дванадцятому замовкає. Ви рахували. Краще б не рахували.', es: 'Once timbrazos. En el duodécimo se calla. Usted los contó. Ojalá no lo hubiera hecho.' }, next: 'end' },
        denis: { who: 'guest', text: { en: "Not him. Denis. The one before you. …Don't come up. Don't. …Or come up before Friday.", ru: 'Это не он. Это Денис. Тот, кто был до вас. …Не поднимайтесь. Не надо. …Или поднимитесь до пятницы.', uk: 'Це не він. Це Денис. Той, хто був до вас. …Не піднімайтеся. Не треба. …Або підніміться до п’ятниці.', es: 'No es él. Soy Denis. El de antes de usted. …No suba. No lo haga. …O suba antes del viernes.' },
                 choices: (s) => [
                   { text: { en: '"What happens Friday?"', ru: '«Что будет в пятницу?»', uk: '«Що буде в п’ятницю?»', es: '«¿Qué pasa el viernes?»' }, next: 'thursday', effect: { flags: { thursday: true } } },
                   { text: { en: '"Where are you, Denis?"', ru: '«Где вы, Денис?»', uk: '«Де ви, Денисе?»', es: '«¿Dónde está, Denis?»' }, next: 'where' },
                   ...(s.flags.has_key
                     ? [{ text: { en: '"I have a key."', ru: '«У меня есть ключ».', uk: '«У мене є ключ».', es: '«Tengo una llave».' }, next: 'have', effect: { flags: { thursday: true } } }]
                     : []),
                   { text: { en: '"I\'m not coming up. Ever."', ru: '«Я не поднимусь. Никогда».', uk: '«Я не піднімуся. Ніколи».', es: '«No voy a subir. Nunca».' }, next: 'never' },
                 ] },
        thursday: { who: 'guest', text: { en: "Locks. He changes them every season. After Friday your key opens a wall. …So does mine.", ru: 'Замки. Он меняет их каждый сезон. После пятницы ваш ключ откроет стену. …Мой тоже.', uk: 'Замки. Він міняє їх щосезону. Після п’ятниці ваш ключ відчинить стіну. …Мій теж.', es: 'Las cerraduras. Las cambia cada temporada. Después del viernes su llave abre una pared. …La mía también.' }, next: 'click' },
        where: { who: 'guest', text: { en: "Closer than the shelter. Farther than the lift. …Does Marv still snore?", ru: 'Ближе, чем приют. Дальше, чем лифт. …Марв всё ещё храпит?', uk: 'Ближче, ніж притулок. Далі, ніж ліфт. …Марв досі хропе?', es: 'Más cerca que el albergue. Más lejos que el ascensor. …¿Marv sigue roncando?' }, next: 'click' },
        have: { who: 'guest', text: { en: "Then don't let him see your hands. Friday. After that it's just brass.", ru: 'Тогда не показывайте ему руки. Пятница. После этого он просто латунь.', uk: 'Тоді не показуйте йому руки. П’ятниця. Після цього він просто латунь.', es: 'Entonces no deje que le vea las manos. El viernes. Después, es solo latón.' }, next: 'click' },
        never: { who: 'guest', text: { en: "That's what I said. Word for word. …Sorry. That's his line. He lets me borrow it.", ru: 'Я тоже так говорил. Слово в слово. …Простите. Это его фраза. Он даёт мне её поносить.', uk: 'Я теж так казав. Слово в слово. …Вибачте. Це його фраза. Він дає мені її поносити.', es: 'Eso dije yo. Palabra por palabra. …Perdone. Esa frase es suya. Me la presta.' }, next: 'click' },
        click: { who: 'narr', text: { en: 'Click. Upstairs, if you are honest with yourself, a floorboard.', ru: 'Щелчок. Наверху, если уж честно, скрипнула половица.', uk: 'Клацання. Нагорі, якщо вже чесно, рипнула мостина.', es: 'Clic. Arriba, para qué engañarse, cruje una tabla del suelo.' }, next: 'end' },
      }
    },
    {
      time: '04:00', name: { en: 'The man in the good coat', ru: 'Мужчина в хорошем пальто', uk: 'Чоловік у гарному пальті', es: 'El hombre del abrigo bueno' }, voice: { gender: 'm', pitch: 0.65, rate: 0.9 },
      portrait: portrait('#1e1e2e', true, false), start: 'a',
      nodes: {
        a: { who: 'narr', text: (s) => (s.flags.leo_friend || s.flags.leo_watch)
              ? { en: '04:00. Leo is a shape on the couch, asleep or very good at it. The man in the good coat comes in and does not look at furniture.', ru: '04:00. Лео — силуэт на диване, спит или очень хорошо притворяется. Мужчина в хорошем пальто входит и на мебель не смотрит.', uk: '04:00. Лео — силует на дивані, спить або дуже добре вдає. Чоловік у гарному пальті заходить і на меблі не дивиться.', es: '04:00. Leo es un bulto en el sofá, dormido o muy bueno fingiéndolo. El hombre del abrigo bueno entra y no mira los muebles.' }
              : { en: '04:00. He comes in like the weather: expected, unwelcome, unhurried.', ru: '04:00. Он входит, как погода: ожидаемо, нежеланно, не спеша.', uk: '04:00. Він заходить, як погода: очікувано, небажано, не поспішаючи.', es: '04:00. Entra como el mal tiempo: esperado, indeseado, sin prisa.' },
             next: 'b' },
        b: { who: 'guest', text: (s) => s.flags.envelope
              ? { en: "Room twelve.", ru: 'Двенадцатый номер.', uk: 'Дванадцятий номер.', es: 'La habitación doce.' }
              : s.flags.gave_back
              ? { en: "She said you gave it back. Nobody gives it back. …I came anyway. I like to know a face.", ru: 'Она сказала, вы его вернули. Никто не возвращает. …Я всё равно пришёл. Люблю знать лицо.', uk: 'Вона сказала, ви його повернули. Ніхто не повертає. …Я все одно прийшов. Люблю знати обличчя.', es: 'Ella dice que usted se lo devolvió. Nadie lo devuelve. …He venido igual. Me gusta conocer una cara.' }
              : { en: "No envelope tonight. I know. I came anyway. I like to know a face.", ru: 'Сегодня без конверта. Знаю. Я всё равно пришёл. Люблю знать лицо.', uk: 'Сьогодні без конверта. Знаю. Я все одно прийшов. Люблю знати обличчя.', es: 'Esta noche no hay sobre. Lo sé. He venido igual. Me gusta conocer una cara.' },
             choices: (s) => s.flags.envelope
              ? [
                  { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: (s) => (s.flags.has_key && s.flags.opened ? 'light' : 'took'), effect: { cash: 300, flags: { envelope: false } } },
                  ...(s.flags.denis_call ? [{ text: { en: '"Denis called tonight."', ru: '«Сегодня звонил Денис».', uk: '«Сьогодні дзвонив Денис».', es: '«Denis ha llamado esta noche».' }, next: 'denis' }] : []),
                  { text: { en: '"You\'re not getting it."', ru: '«Вы его не получите».', uk: '«Ви його не отримаєте».', es: '«No se lo va a llevar».' }, next: 'refuse', effect: { trouble: 2 } },
                ]
              : [
                  { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: 'face' },
                  { text: { en: '"What do you want from me?"', ru: '«Что вам от меня нужно?»', uk: '«Що вам від мене потрібно?»', es: '«¿Qué quiere de mí?»' }, next: 'want' },
                  { text: { en: 'Let him wait.', ru: 'Пусть ждёт.', uk: 'Хай чекає.', es: 'Dejarlo esperar.' }, next: 'silent' },
                ] },
        denis: { who: 'guest', text: { en: "Denis calls everybody. It's the one thing I let him keep. …Room twelve, clerk. I asked nicely.", ru: 'Денис звонит всем. Это единственное, что я ему оставил. …Двенадцатый номер, портье. Я вежливо попросил.', uk: 'Денис дзвонить усім. Це єдине, що я йому лишив. …Дванадцятий номер, портьє. Я чемно попросив.', es: 'Denis llama a todo el mundo. Es lo único que le dejo conservar. …La habitación doce, recepcionista. Lo he pedido con amabilidad.' },
                 choices: [
                   { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: (s) => (s.flags.has_key && s.flags.opened ? 'light' : 'took'), effect: { cash: 300, flags: { envelope: false } } },
                   { text: { en: '"You\'re not getting it."', ru: '«Вы его не получите».', uk: '«Ви його не отримаєте».', es: '«No se lo va a llevar».' }, next: 'refuse', effect: { trouble: 2 } },
                 ] },
        took: { who: 'narr', text: { en: 'Three hundred, in fifties. He does not weigh the envelope. Other people do that for him.', ru: 'Триста, полтинниками. Он не взвешивает конверт. Это за него делают другие.', uk: 'Триста, п’ятдесятками. Він не зважує конверт. Це за нього роблять інші.', es: 'Trescientos, en billetes de cincuenta. No sopesa el sobre. Eso lo hacen otros por él.' }, next: 'leo' },
        light: { who: 'guest', text: { en: "…Lighter. Or I'm getting old. Three hundred anyway. For the silence. The rest we'll discuss.", ru: '…Легче. Или я старею. Триста всё равно. За молчание. Остальное обсудим.', uk: '…Легший. Або я старію. Триста все одно. За мовчання. Решту обговоримо.', es: '…Más ligero. O me estoy haciendo viejo. Trescientos de todos modos. Por el silencio. Lo demás lo hablaremos.' }, effect: { trouble: 1 }, next: 'leo' },
        refuse: { who: 'guest', text: { en: "Twice, then. Denis managed once.", ru: 'Значит, дважды. Денис осилил один раз.', uk: 'Отже, двічі. Денис подужав один раз.', es: 'Dos veces, entonces. Denis pudo una.' }, next: 'refuse2' },
        refuse2: { who: 'narr', text: { en: 'He leaves without the envelope. You have never seen anyone leave a room so unhurried.', ru: 'Он уходит без конверта. Вы никогда не видели, чтобы кто-то уходил так неторопливо.', uk: 'Він іде без конверта. Ви ніколи не бачили, щоб хтось ішов так неквапливо.', es: 'Se va sin el sobre. Usted nunca ha visto a nadie marcharse con tan poca prisa.' }, next: 'leo' },
        face: { who: 'guest', text: { en: "Good. You say it like Denis did. The second time, not the first.", ru: 'Хорошо. Вы говорите это, как Денис. Во второй раз, не в первый.', uk: 'Добре. Ви кажете це, як Денис. Удруге, не вперше.', es: 'Bien. Lo dice como Denis. La segunda vez, no la primera.' }, next: 'leo' },
        want: { who: 'guest', text: { en: "Nothing yet. That's the part people find hard.", ru: 'Пока ничего. Вот это людям труднее всего.', uk: 'Поки нічого. Ось це людям найважче.', es: 'Nada, todavía. Esa es la parte que a la gente le cuesta.' }, next: 'leo' },
        silent: { who: 'narr', text: { en: "He waits. You wait. He does not lose; he just goes when he's done.", ru: 'Он ждёт. Вы ждёте. Он не проигрывает; просто уходит, когда закончил.', uk: 'Він чекає. Ви чекаєте. Він не програє; просто йде, коли закінчив.', es: 'Él espera. Usted espera. Él no pierde; simplemente se va cuando ha terminado.' }, next: 'leo' },
        leo: { who: 'narr', text: (s) => (s.flags.leo_friend || s.flags.leo_watch)
              ? { en: 'At the door, Leo is up, holding it open for him the way a kid holds a door for a dollar. He looks at you over the man\'s shoulder. He is waiting for a nod.', ru: 'У двери Лео уже на ногах, придерживает её, как мальчишка придерживает дверь за доллар. Смотрит на вас через плечо мужчины. Ждёт кивка.', uk: 'Біля дверей Лео вже на ногах, притримує їх, як хлопчисько притримує двері за долар. Дивиться на вас через плече чоловіка. Чекає кивка.', es: 'En la puerta, Leo ya está de pie, sosteniéndosela como un chico sostiene una puerta por un dólar. Por encima del hombro del hombre, busca sus ojos. Espera una señal.' }
              : { en: 'The door closes behind him as if it had never opened. The lift, though, hums. You do not check the floor. You do not need to.', ru: 'Дверь закрывается за ним так, будто и не открывалась. А вот лифт гудит. Вы не смотрите, на какой этаж. Вам не нужно.', uk: 'Двері зачиняються за ним так, наче й не відчинялися. А ось ліфт гуде. Ви не дивитеся, на який поверх. Вам не треба.', es: 'La puerta se cierra tras él como si nunca se hubiera abierto. El ascensor, en cambio, zumba. Usted no mira a qué piso va. No le hace falta.' },
             choices: (s) => (s.flags.leo_friend || s.flags.leo_watch)
              ? [
                  { text: { en: 'Nod at the street. Follow him.', ru: 'Кивнуть на улицу. Проследить.', uk: 'Кивнути на вулицю. Простежити.', es: 'Señalar la calle con la cabeza. Que lo siga.' }, next: 'follow', effect: { flags: { leo_followed: true } } },
                  ...(s.flags.has_key ? [] : [{ text: { en: 'Nod at the coat. Left pocket.', ru: 'Кивнуть на пальто. Левый карман.', uk: 'Кивнути на пальто. Ліва кишеня.', es: 'Señalar el abrigo con la cabeza. Bolsillo izquierdo.' }, next: 'lift', effect: { flags: { has_key: true } } }]),
                  { text: { en: 'Shake your head. Keep Leo out of it.', ru: 'Покачать головой. Не впутывать Лео.', uk: 'Похитати головою. Не вплутувати Лео.', es: 'Negar con la cabeza. Dejar a Leo fuera de esto.' }, next: 'out' },
                ]
              : null,
             next: 'end' },
        follow: { who: 'narr', text: { en: "Leo gives it ten seconds and goes. He is back in twenty minutes, whiter. 'He didn't go out. He went up. The lift. There's no button for that floor. He has a button.'", ru: 'Лео выжидает десять секунд и выходит. Возвращается через двадцать минут, бледнее. «Он не вышел. Он поднялся. Лифт. Кнопки на тот этаж нет. У него есть кнопка».', uk: 'Лео вичікує десять секунд і виходить. Повертається за двадцять хвилин, блідіший. «Він не вийшов. Він піднявся. Ліфт. Кнопки на той поверх немає. У нього є кнопка».', es: 'Leo espera diez segundos y sale. Vuelve a los veinte minutos, más pálido. «No salió. Subió. En el ascensor. No hay botón para ese piso. Él tiene un botón».' }, next: 'end' },
        lift: { who: 'narr', text: { en: "A bump, an apology, a brass tag in a seventeen-year-old's fist behind his back. The man does not turn. He gives Leo a dollar for the door.", ru: 'Толчок, извинение, латунная бирка в кулаке семнадцатилетнего за спиной. Мужчина не оборачивается. Даёт Лео доллар за дверь.', uk: 'Поштовх, вибачення, латунна бирка в кулаці сімнадцятирічного за спиною. Чоловік не обертається. Дає Лео долар за двері.', es: 'Un empujón, una disculpa, una chapa de latón en el puño de un chico de diecisiete años, a su espalda. El hombre no se da la vuelta. Le da a Leo un dólar por la puerta.' }, next: 'end' },
        out: { who: 'narr', text: { en: 'Leo lets the door go. He sits back down. He looks relieved, and ashamed of being relieved.', ru: 'Лео отпускает дверь. Садится обратно. Ему легче, и ему стыдно, что легче.', uk: 'Лео відпускає двері. Сідає назад. Йому легше, і йому соромно, що легше.', es: 'Leo suelta la puerta. Vuelve a sentarse. Parece aliviado, y avergonzado de estarlo.' }, next: 'end' },
      }
    },
    {
      time: '06:00', name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' }, voice: { gender: 'm', pitch: 0.7, rate: 1.05 },
      portrait: portrait('#7a2a2a', false, true), start: 'a',
      nodes: {
        a: { who: 'guest', text: (s) => s.flags.rick_found
              ? { en: "Morning. There's a woman on my couch with a suitcase and the door of 4 has a boot mark on it. Register.", ru: 'Утро. На моём диване женщина с чемоданом, а на двери четвёртого след от ботинка. Касса.', uk: 'Ранок. На моєму дивані жінка з валізою, а на дверях четвертого слід від черевика. Каса.', es: 'Buenos días. Hay una mujer con una maleta en mi sofá y la puerta de la 4 tiene una marca de bota. La caja.' }
              : (s.flags.leo_friend || s.flags.leo_watch)
              ? { en: "Morning. The kid's on my couch again. He was awake when I came in. Nobody that age is awake at six. Register.", ru: 'Утро. Парень опять на моём диване. Не спал, когда я вошёл. В этом возрасте в шесть утра никто не бодрствует. Касса.', uk: 'Ранок. Хлопець знову на моєму дивані. Не спав, коли я зайшов. У цьому віці о шостій ранку ніхто не пильнує. Каса.', es: 'Buenos días. El chico otra vez en mi sofá. Estaba despierto cuando entré. Nadie a esa edad está despierto a las seis. La caja.' }
              : { en: "Morning. Register.", ru: 'Утро. Касса.', uk: 'Ранок. Каса.', es: 'Buenos días. La caja.' },
             next: 'b' },
        b: { who: 'narr', text: { en: 'He counts. Then he takes a plain envelope from his own pocket, no seal, and counts that too. Fifties. He sees you see it.', ru: 'Он считает. Потом достаёт из своего кармана простой конверт, без печати, и считает и его. Полтинники. Он видит, что вы видите.', uk: 'Він рахує. Потім дістає зі своєї кишені простий конверт, без печатки, і рахує і його. П’ятдесятки. Він бачить, що ви бачите.', es: 'Cuenta. Luego saca de su propio bolsillo un sobre corriente, sin sello, y también lo cuenta. Billetes de cincuenta. Ve que usted lo ve.' },
             choices: [
               { text: { en: '"His fifties. For not knowing."', ru: '«Его полтинники. За то, что не знаете».', uk: '«Його п’ятдесятки. За те, що не знаєте».', es: '«Los billetes de cincuenta son de él. Por no saber».' }, next: 'cut', effect: { flags: { sal_cut: true } } },
               { text: { en: '"What\'s behind the door upstairs, Sal?"', ru: '«Что за дверью наверху, Сэл?»', uk: '«Що за дверима нагорі, Селе?»', es: '«¿Qué hay detrás de la puerta de arriba, Sal?»' }, next: 'door' },
               { text: { en: 'Count your own. Say nothing.', ru: 'Считать своё. Молчать.', uk: 'Рахувати своє. Мовчати.', es: 'Contar lo suyo. No decir nada.' }, next: 'quiet' },
             ] },
        cut: { who: 'guest', text: { en: "Two years of not knowing. Best-paid thing I do. …He said you'd ask sooner or later. He said that's fine. Denis asked too.", ru: 'Два года не знаю. Самое прибыльное из всего, что я делаю. …Он сказал, что ты рано или поздно спросишь. Сказал, ничего страшного. Денис тоже спрашивал.', uk: 'Два роки не знаю. Найприбутковіше з усього, що я роблю. …Він сказав, що ти рано чи пізно спитаєш. Сказав, нічого страшного. Денис теж питав.', es: 'Dos años sin saber. Lo mejor pagado que hago. …Dijo que tarde o temprano preguntarías. Dijo que no pasaba nada. Denis también preguntó.' }, next: 'end' },
        door: { who: 'guest', text: { en: "Storage.", ru: 'Кладовка.', uk: 'Комора.', es: 'Un trastero.' }, next: 'door2' },
        door2: { who: 'narr', text: { en: 'He says it to the envelope, not to you.', ru: 'Он говорит это конверту, а не вам.', uk: 'Він каже це конверту, а не вам.', es: 'Se lo dice al sobre, no a usted.' },
                 choices: [
                   { text: { en: '"Storage doesn\'t pay in fifties."', ru: '«Кладовка полтинниками не платит».', uk: '«Комора п’ятдесятками не платить».', es: '«Un trastero no paga en billetes de cincuenta».' }, next: 'cut2', effect: { flags: { sal_cut: true } } },
                   { text: { en: 'Let it go.', ru: 'Оставить это.', uk: 'Облишити.', es: 'Dejarlo estar.' }, next: 'go' },
                 ] },
        cut2: { who: 'guest', text: { en: "…No. It doesn't. Go home, clerk. You're not fired. That's the worst thing I can tell you.", ru: '…Нет. Не платит. Иди домой, портье. Увольнять тебя не буду. Хуже этого я тебе ничего сказать не могу.', uk: '…Ні. Не платить. Іди додому, портьє. Тебе не звільнено. Гірше за це я тобі нічого сказати не можу.', es: '…No. No paga. Vete a casa, recepcionista. No estás {despedido|despedida}. Es lo peor que te puedo decir.' }, next: 'end' },
        go: { who: 'narr', text: { en: 'You let it go. It does not go far.', ru: 'Вы оставляете это. Далеко оно не уходит.', uk: 'Ви облишаєте це. Далеко воно не йде.', es: 'Usted lo deja estar. No llega muy lejos.' }, next: 'end' },
        quiet: { who: 'guest', text: { en: "Good clerk.", ru: 'Хороший портье.', uk: 'Хороший портьє.', es: '{Buen recepcionista|Buena recepcionista}.' }, next: 'quiet2' },
        quiet2: { who: 'narr', text: { en: 'It is not a compliment.', ru: 'Это не комплимент.', uk: 'Це не комплімент.', es: 'No es un cumplido.' }, next: 'end' },
      }
    },
  ],
  pickEnding(state) {
    const f = state.flags;
    if (state.trouble >= TROUBLE_MAX) return 'fired';
    if (f.tracker && !f.envelope) return 'tracked';
    if (f.has_key) return 'key';
    if (!f.denis_call && !f.leo_followed) return 'no_key';
    if (f.leo_followed) return 'upstairs';
    if (f.thursday) return 'thursday';
    if (f.rick_found) return 'room_four';
    if (f.sal_cut) return 'sal_cut';
    return 'no_key';
  },
  endings: {
    fired: {
      en: ['SHIFT OVER', "Sal's pad has been filling up since Monday, and tonight's mark does not need explaining. 'Don't come back.' Somebody else will answer the phone at three."],
      ru: ['СМЕНА ОКОНЧЕНА', 'Блокнот Сэла заполняется с понедельника, и сегодняшнюю отметку ему объяснять не нужно. «Не возвращайся». Кто-то другой снимет трубку в три часа.'],
      uk: ['ЗМІНУ ЗАКІНЧЕНО', 'Блокнот Села заповнюється з понеділка, і сьогоднішню позначку йому пояснювати не треба. «Не повертайся». Хтось інший зніме слухавку о третій.'],
      es: ['FIN DEL TURNO', 'El bloc de Sal se ha ido llenando desde el lunes, y la marca de esta noche no necesita explicación. «No vuelvas». Otra persona contestará el teléfono a las tres.'] },
    tracked: {
      en: ['TRACKED', "The envelope left in his coat with Reyes's little ear inside it. Tomorrow she will know where it went. So will you. You already suspect the answer is: not far."],
      ru: ['НА СИГНАЛЕ', 'Конверт ушёл в его пальто, а в нём — маленькое ухо Рейес. Завтра она узнает, куда он отправился. И вы тоже. Вы уже подозреваете ответ: недалеко.'],
      uk: ['НА СИГНАЛІ', 'Конверт пішов у його пальті, а в ньому — маленьке вухо Реєс. Завтра вона дізнається, куди він подівся. І ви теж. Ви вже підозрюєте відповідь: недалеко.'],
      es: ['RASTREADO', 'El sobre se fue en el abrigo de él con la pequeña oreja de Reyes dentro. Mañana ella sabrá adónde fue. Usted también. Ya sospecha la respuesta: no muy lejos.'] },
    key: {
      en: ['THE KEY', "Brass tag, 12. It is in your pocket and your hand keeps finding it. Upstairs, a door with no number. You have not decided anything. Your hand has."],
      ru: ['КЛЮЧ', 'Латунная бирка, 12. Он в кармане, и рука всё время его находит. Наверху дверь без номера. Вы ещё ничего не решили. Рука уже решила.'],
      uk: ['КЛЮЧ', 'Латунна бирка, 12. Він у кишені, і рука весь час його знаходить. Нагорі двері без номера. Ви ще нічого не вирішили. Рука вже вирішила.'],
      es: ['LA LLAVE', 'Chapa de latón, 12. Está en su bolsillo y su mano no deja de encontrarla. Arriba, una puerta sin número. Usted no ha decidido nada. Su mano, sí.'] },
    upstairs: {
      en: ['UPSTAIRS', "'He didn't go out. He went up.' Room twelve is not across the city. It is above your head, and it has been all along. You have no key. Yet."],
      ru: ['НАВЕРХУ', '«Он не вышел. Он поднялся». Двенадцатый номер не на другом конце города. Он у вас над головой, и был там всегда. Ключа у вас нет. Пока.'],
      uk: ['НАГОРІ', '«Він не вийшов. Він піднявся». Дванадцятий номер не на іншому кінці міста. Він у вас над головою, і був там завжди. Ключа у вас немає. Поки що.'],
      es: ['ARRIBA', '«No salió. Subió». La habitación doce no está al otro lado de la ciudad. Está sobre su cabeza, y siempre ha estado ahí. No tiene llave. Todavía.'] },
    thursday: {
      en: ['FRIDAY', "After Friday every key opens a wall. You believed him. You have two nights and no key, and for the first time that feels like a shortage."],
      ru: ['ПЯТНИЦА', 'После пятницы любой ключ откроет стену. Вы ему поверили. У вас две ночи и ни одного ключа, и впервые это ощущается как нехватка.'],
      uk: ['П’ЯТНИЦЯ', 'Після п’ятниці будь-який ключ відчинить стіну. Ви йому повірили. У вас дві ночі й жодного ключа, і вперше це відчувається як нестача.'],
      es: ['VIERNES', 'Después del viernes, cualquier llave abre una pared. Usted le creyó. Tiene dos noches y ninguna llave, y por primera vez eso le parece una carencia.'] },
    room_four: {
      en: ['ROOM FOUR', "Dana sleeps on the couch in her coat. Rick knows the room. The man in the good coat knows Rick's face now, and you saw him file it. Nobody in this hotel is only one thing."],
      ru: ['ЧЕТВЁРТЫЙ НОМЕР', 'Дана спит на диване в пальто. Рик знает номер. Мужчина в хорошем пальто теперь знает лицо Рика, и вы видели, как он его запомнил. В этом отеле никто не является только чем-то одним.'],
      uk: ['ЧЕТВЕРТИЙ НОМЕР', 'Дана спить на дивані в пальті. Рік знає номер. Чоловік у гарному пальті тепер знає обличчя Ріка, і ви бачили, як він його запам’ятав. У цьому готелі ніхто не є лише чимось одним.'],
      es: ['HABITACIÓN CUATRO', 'Dana duerme en el sofá con el abrigo puesto. Rick conoce la habitación. El hombre del abrigo bueno conoce ahora la cara de Rick, y usted lo vio archivarla. En este hotel nadie es una sola cosa.'] },
    sal_cut: {
      en: ["SAL'S CUT", "Two years of fifties for not knowing. Sal is not the villain; he is the rent. You go home with the register balanced and the building's arithmetic finally clear."],
      ru: ['ДОЛЯ СЭЛА', 'Два года полтинников за незнание. Сэл не злодей; он — арендная плата. Вы идёте домой с сошедшейся кассой и наконец понятной арифметикой этого дома.'],
      uk: ['ЧАСТКА СЕЛА', 'Два роки п’ятдесяток за незнання. Сел не лиходій; він — орендна плата. Ви йдете додому зі зведеною касою і нарешті зрозумілою арифметикою цього будинку.'],
      es: ['LA PARTE DE SAL', 'Dos años de billetes de cincuenta por no saber. Sal no es el villano; es el alquiler. Usted se va a casa con la caja cuadrada y la aritmética del edificio, por fin, clara.'] },
    no_key: {
      en: ['NO KEY', "Dawn. No key in your pocket, no envelope in the drawer. The phone said what it said; the receiver is back on its cradle. The top floor stays a rumour. For now."],
      ru: ['БЕЗ КЛЮЧА', 'Рассвет. В кармане нет ключа, в ящике нет конверта. Телефон сказал, что сказал; трубка снова на рычаге. Верхний этаж остаётся слухом. Пока.'],
      uk: ['БЕЗ КЛЮЧА', 'Світанок. У кишені немає ключа, у шухляді немає конверта. Телефон сказав, що сказав; слухавка знову на важелі. Верхній поверх лишається чуткою. Поки що.'],
      es: ['SIN LLAVE', 'Amanece. Ninguna llave en el bolsillo, ningún sobre en el cajón. El teléfono dijo lo que dijo; el auricular vuelve a estar en su sitio. El último piso sigue siendo un rumor. Por ahora.'] },
  },
});
