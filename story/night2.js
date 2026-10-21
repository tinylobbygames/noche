// Night 2 — the man in the good coat. Everything here depends on flags from night 1.
NIGHTS.push({
  id: 2,
  title: { en: 'Night two', ru: 'Ночь вторая', uk: 'Ніч друга', es: 'Segunda noche' },
  scenes: [
    {
      time: '23:00', name: { en: 'The drawer', ru: 'Ящик стола', uk: 'Шухляда', es: 'El cajón' }, voice: { gender: 'm', pitch: 0.75, rate: 0.92 },
      portrait: objectPortrait('#3a2a1a', '—'), start: 'a',
      nodes: {
        a: { who: 'narr', text: (s) => (s.flags.lied_cop || s.flags.lied_kid)
              ? { en: "Second night. The rain has stopped. A note from Sal on the desk: 'Cop came by in the day. Asked the night clerk's name. I gave it.'", ru: 'Вторая ночь. Дождь кончился. Записка от Сэла на стойке: «Днём заходила полицейская. Спросила имя ночного портье. Я сказал».', uk: 'Друга ніч. Дощ скінчився. Записка від Села на стійці: «Удень заходила поліцейська. Спитала ім’я нічного портьє. Я сказав».', es: 'Segunda noche. Ha dejado de llover. Una nota de Sal en el mostrador: «Vino una policía de día. Preguntó el nombre {del recepcionista|de la recepcionista} de noche. Se lo di».' }
              : { en: "Second night. The rain has stopped. A note from Sal on the desk: 'Quiet day. Don't touch the drawer.'", ru: 'Вторая ночь. Дождь кончился. Записка от Сэла на стойке: «Тихий день. Ящик не трогай».', uk: 'Друга ніч. Дощ скінчився. Записка від Села на стійці: «Тихий день. Шухляду не чіпай».', es: 'Segunda noche. Ha dejado de llover. Una nota de Sal en el mostrador: «Día tranquilo. No toques el cajón».' },
             next: (s) => (s.flags.envelope ? 'env' : s.flags.gave_envelope ? 'card' : 'empty') },
        env: { who: 'narr', text: { en: 'The envelope is in the drawer. Still sealed. Still heavier than paper.', ru: 'Конверт в ящике. Всё ещё запечатан. Всё ещё тяжелее бумаги.', uk: 'Конверт у шухляді. Досі запечатаний. Досі важчий за папір.', es: 'El sobre está en el cajón. Todavía cerrado. Todavía más pesado que el papel.' },
               choices: [
                 { text: { en: 'Leave it. You were told not to open it.', ru: 'Не трогать. Вам велели не открывать.', uk: 'Не чіпати. Вам веліли не відкривати.', es: 'Dejarlo. Le dijeron que no lo abriera.' }, next: 'end' },
                 { text: { en: 'Open it.', ru: 'Открыть.', uk: 'Відкрити.', es: 'Abrirlo.' }, next: 'open', effect: { flags: { opened: true } } },
               ] },
        open: { who: 'narr', text: { en: 'A key with a brass tag: 12. And a photograph. This desk, this lamp. The person behind the desk is you. Taken last night.', ru: 'Ключ с латунной биркой: 12. И фотография. Эта стойка, эта лампа. За стойкой стоите вы. Снято прошлой ночью.', uk: 'Ключ із латунною биркою: 12. І фотографія. Ця стійка, ця лампа. За стійкою стоїте ви. Знято минулої ночі.', es: 'Una llave con una chapa de latón: 12. Y una fotografía. Este mostrador, esta lámpara. La persona detrás del mostrador es usted. Tomada anoche.' }, next: 'open2' },
        open2: { who: 'narr', text: { en: 'You put it back. The seal does not close the way it was.', ru: 'Вы кладёте всё обратно. Печать не закрывается так, как была.', uk: 'Ви кладете все назад. Печатка не закривається так, як була.', es: 'Lo vuelve a guardar todo. El sello ya no cierra como antes.' }, next: 'end' },
        card: { who: 'narr', text: { en: "The drawer is empty except for Officer Reyes's card. Someone has written on the back, not her handwriting: 'Twelve.'", ru: 'В ящике пусто, только визитка офицера Рейес. На обороте кто-то написал, не её почерком: «Двенадцать».', uk: 'У шухляді порожньо, лише візитівка офіцера Реєс. На звороті хтось написав, не її почерком: «Дванадцять».', es: 'En el cajón solo queda la tarjeta de la agente Reyes. Alguien escribió en el reverso, y no con su letra: «Doce».' }, next: 'end' },
        empty: { who: 'narr', text: { en: 'The drawer is empty. You check it twice anyway.', ru: 'Ящик пуст. Вы всё равно проверяете дважды.', uk: 'Шухляда порожня. Ви все одно перевіряєте двічі.', es: 'El cajón está vacío. Aun así, lo revisa dos veces.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Marv, room 7', ru: 'Марв, номер 7', uk: 'Марв, номер 7', es: 'Marv, habitación 7' }, voice: { gender: 'm', pitch: 0.85, rate: 0.9 },
      portrait: portrait('#4a5a6a', false, false), start: 'a',
      nodes: {
        a: { who: 'guest', effect: (s) => (s.flags.paid_marv ? { flags: { marv_thanked: true } } : {}), text: (s) => ((t) => (s.flags.paid_marv && !s.flags.marv_thanked ? { en: "Somebody paid my week. Sal says it wasn't him. …Thank you. Don't say anything. " + t.en, ru: "Кто-то оплатил мою неделю. Сэл говорит, не он. …Спасибо. Ничего не говорите. " + t.ru, uk: "Хтось оплатив мій тиждень. Сел каже, не він. …Дякую. Нічого не кажіть. " + t.uk, es: "Alguien me pagó la semana. Sal dice que no fue él. …Gracias. No diga nada. " + t.es } : t))(s.flags.marv_lobby
              ? { en: "Slept on your couch. Neck's ruined. Anyway. The grey woman. She's been here before, you know.", ru: 'Спал на вашем диване. Шея убита. Ладно. Женщина в сером. Она здесь уже была, знаете.', uk: 'Спав на вашому дивані. Шию вбило. Гаразд. Жінка в сірому. Вона тут уже була, знаєте.', es: 'Dormí en su sofá. Tengo el cuello destrozado. En fin. La mujer de gris. Ya había estado aquí, ¿sabe?' }
              : { en: "Can't sleep. Saw the grey woman leave last night. She's been here before, you know.", ru: 'Не спится. Видел вчера, как уходила женщина в сером. Она здесь уже была, знаете.', uk: 'Не спиться. Бачив учора, як ішла жінка в сірому. Вона тут уже була, знаєте.', es: 'No puedo dormir. Anoche vi salir a la mujer de gris. Ya había estado aquí, ¿sabe?' }),
             choices: [
               { text: { en: '"Before? When?"', ru: '«Была? Когда?»', uk: '«Була? Коли?»', es: '«¿Ya había estado? ¿Cuándo?»' }, next: 'denis' },
               { text: { en: '"Go to bed, Marv."', ru: '«Иди спать, Марв».', uk: '«Іди спати, Марве».', es: '«Vete a dormir, Marv».' }, next: 'bed' },
             ] },
        denis: { who: 'guest', text: { en: "Spring. Night clerk then was Denis. Nice kid. She left him an envelope. Then a man in a good coat came. Then Denis went out with the man. 'Room twelve,' he said to me. Never came back.", ru: 'Весной. Портье тогда был Денис. Хороший парень. Она оставила ему конверт. Потом пришёл мужчина в хорошем пальто. Потом Денис ушёл с ним. «Двенадцатый номер», сказал мне. И не вернулся.', uk: 'Навесні. Портьє тоді був Денис. Хороший хлопець. Вона лишила йому конверт. Потім прийшов чоловік у гарному пальті. Потім Денис пішов із ним. «Дванадцятий номер», сказав мені. І не повернувся.', es: 'En primavera. El recepcionista de noche entonces era Denis. Buen chico. Ella le dejó un sobre. Luego vino un hombre con un abrigo bueno. Luego Denis se fue con él. «La habitación doce», me dijo. Nunca volvió.' },
                 choices: [
                   { text: { en: '"Did Denis open the envelope?"', ru: '«Денис открывал конверт?»', uk: '«Денис відкривав конверт?»', es: '«¿Denis abrió el sobre?»' }, next: 'opened', effect: { flags: { marv_told: true } } },
                   { text: { en: '"What did the man look like?"', ru: '«Как выглядел мужчина?»', uk: '«Який на вигляд був чоловік?»', es: '«¿Cómo era el hombre?»' }, next: 'coat', effect: { flags: { marv_told: true } } },
                 ] },
        opened: { who: 'guest', text: { en: "He did. That's the thing. He said there was a photo of himself in it. Standing right where you're standing.", ru: 'Открывал. В том-то и дело. Сказал, там была его фотография. Стоит ровно там, где вы сейчас.', uk: 'Відкривав. У тому й річ. Сказав, там була його фотографія. Стоїть рівно там, де ви зараз.', es: 'Sí. Esa es la cuestión. Dijo que dentro había una foto suya. De pie justo donde está usted.' }, next: 'end' },
        coat: { who: 'guest', text: { en: "Like money. Quiet. Never raised his voice. That's the ones you run from.", ru: 'Как деньги. Тихий. Ни разу не повысил голос. Вот от таких и бегут.', uk: 'Як гроші. Тихий. Жодного разу не підвищив голос. Ось від таких і тікають.', es: 'Como el dinero. Callado. Nunca alzó la voz. De esos hay que huir.' }, next: 'end' },
        bed: { who: 'guest', text: { en: "Right. Right. Just… if a man in a good coat comes, don't go anywhere with him.", ru: 'Ладно. Ладно. Просто… если придёт мужчина в хорошем пальто, никуда с ним не ходите.', uk: 'Гаразд. Гаразд. Просто… якщо прийде чоловік у гарному пальті, нікуди з ним не йдіть.', es: 'Ya. Ya. Solo… si viene un hombre con un abrigo bueno, no vaya a ninguna parte con él.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Leo', ru: 'Лео', uk: 'Лео', es: 'Leo' }, voice: { gender: 'm', pitch: 1.3, rate: 1.15 },
      portrait: portrait('#6a5a2a', true, false), start: 'a',
      when: (s) => s.flags.kid_couch || (s.flags.kid_room && s.flags.lied_kid),
      nodes: {
        a: { who: 'guest', effect: (s) => (s.flags.leo_money ? { flags: { leo_thanked: true } } : {}), text: (s) => ((t) => (s.flags.leo_money && !s.flags.leo_thanked ? { en: "Somebody left fifty at the shelter. Envelope, my name on it. Nobody writes my name. …I carried it around an hour before I opened it. This hotel's rubbing off on me. " + t.en, ru: "Кто-то оставил в приюте пятьдесят. Конверт, на нём моё имя. Моё имя никто не пишет. …Я час носил его, прежде чем открыть. Ваш отель на меня плохо влияет. " + t.ru, uk: "Хтось залишив у притулку п’ятдесят. Конверт, на ньому моє ім’я. Моє ім’я ніхто не пише. …Я годину носив його, перш ніж відкрити. Ваш готель на мене погано впливає. " + t.uk, es: "Alguien dejó cincuenta en el albergue. Un sobre, con mi nombre. Nadie escribe mi nombre. …Lo llevé encima una hora antes de abrirlo. Este hotel se me está pegando. " + t.es } : t))(s.flags.kid_couch
              ? { en: "Two coffees. One's yours. The shelter took me. They said whoever kept me off the street last night did the right thing. So. Thanks.", ru: 'Два кофе. Один ваш. Меня взяли в приют. Сказали, кто бы ни оставил меня вчера не на улице, поступил правильно. Так что. Спасибо.', uk: 'Дві кави. Одна ваша. Мене взяли в притулок. Сказали, хто б не залишив мене вчора не на вулиці, вчинив правильно. Тож. Дякую.', es: 'Dos cafés. Uno es suyo. Me aceptaron en el albergue. Dijeron que quien me sacó de la calle anoche hizo lo correcto. Así que… gracias.' }
              : { en: "The cop looked right at me on the stairs last night. You said you hadn't seen me. Why?", ru: 'Полицейская вчера смотрела прямо на меня на лестнице. Вы сказали, что меня не видели. Почему?', uk: 'Поліцейська вчора дивилася просто на мене на сходах. Ви сказали, що мене не бачили. Чому?', es: 'Anoche la policía me miró de frente en la escalera. Usted dijo que no me había visto. ¿Por qué?' }),
             choices: [
               { text: { en: '"Keep the fifty. We\'re even."', ru: '«Оставь пятьдесят. Мы в расчёте».', uk: '«Залиш п’ятдесят. Ми квити».', es: '«Quédate los cincuenta. Estamos a mano».' }, next: 'friend', effect: { flags: { leo_friend: true } } },
               { text: { en: '"I need a favour. Stay by the door tonight at three. Just watch."', ru: '«Нужна услуга. Побудь сегодня у двери в три. Просто смотри».', uk: '«Потрібна послуга. Побудь сьогодні біля дверей о третій. Просто дивись».', es: '«Necesito un favor. Esta noche, a las tres, quédate junto a la puerta. Solo mira».' }, next: 'watch', effect: { flags: { leo_watch: true } } },
               { text: { en: '"You owe me fifty. Pay it."', ru: '«Ты должен мне пятьдесят. Плати».', uk: '«Ти винен мені п’ятдесят. Плати».', es: '«Me debes cincuenta. Págalos».' }, next: 'pay', effect: { cash: 50 } },
             ] },
        friend: { who: 'guest', text: { en: "…Okay. If you ever need someone who can run fast. I'm around.", ru: '…Ладно. Если вам когда-нибудь понадобится тот, кто быстро бегает. Я рядом.', uk: '…Гаразд. Якщо вам колись знадобиться той, хто швидко бігає. Я поруч.', es: '…Bueno. Si alguna vez necesita a alguien que corra rápido. Ando por aquí.' }, next: 'end' },
        watch: { who: 'guest', text: { en: "Three. By the door. Watch what?", ru: 'В три. У двери. Смотреть на что?', uk: 'О третій. Біля дверей. Дивитися на що?', es: 'A las tres. Junto a la puerta. ¿Mirar qué?' }, next: 'watch2' },
        watch2: { who: 'narr', text: { en: "'A man in a good coat.' He nods like he's been asked to watch for worse.", ru: '«На мужчину в хорошем пальто». Он кивает так, будто его просили следить и за худшим.', uk: '«На чоловіка в гарному пальті». Він киває так, ніби його просили стежити й за гіршим.', es: '«A un hombre con un abrigo bueno». Asiente como si le hubieran pedido vigilar cosas peores.' }, next: 'end' },
        pay: { who: 'narr', text: { en: 'He counts it out in fives and tens. It was all he had. He leaves the coffees.', ru: 'Он отсчитывает пятёрками и десятками. Это было всё, что у него есть. Кофе оставляет.', uk: 'Він відраховує п’ятірками й десятками. Це було все, що в нього є. Каву лишає.', es: 'Lo cuenta en billetes de cinco y de diez. Era todo lo que tenía. Deja los cafés.' }, next: 'end' },
      }
    },
    {
      name: { en: "Leo's father", ru: 'Отец Лео', uk: 'Батько Лео', es: 'El padre de Leo' }, voice: { gender: 'm', pitch: 0.7, rate: 1.05 },
      portrait: portrait('#3a3a3a', false, false), start: 'a',
      when: (s) => s.flags.kid_out || (s.flags.kid_room && !s.flags.lied_kid),
      nodes: {
        a: { who: 'guest', text: (s) => s.flags.kid_out
              ? { en: "My boy came home at five in the morning, soaked through, sick. Says a hotel turned him away. This hotel. You?", ru: 'Мой сын пришёл домой в пять утра, насквозь мокрый, больной. Говорит, отель его не пустил. Этот отель. Вы?', uk: 'Мій син прийшов додому о п’ятій ранку, наскрізь мокрий, хворий. Каже, готель його не пустив. Цей готель. Ви?', es: 'Mi hijo llegó a casa a las cinco de la mañana, empapado, enfermo. Dice que un hotel no lo dejó entrar. Este hotel. ¿Fue usted?' }
              : { en: "The police brought my boy home from this hotel. You gave him a room. No ID. You hid him from me.", ru: 'Полиция привезла моего сына домой из этого отеля. Вы дали ему номер. Без документов. Вы прятали его от меня.', uk: 'Поліція привезла мого сина додому з цього готелю. Ви дали йому номер. Без документів. Ви ховали його від мене.', es: 'La policía trajo a mi hijo a casa desde este hotel. Usted le dio una habitación. Sin documentos. Me lo escondió.' },
             choices: (s) => [   // the card only exists if Reyes left it in night 1 (lied to her: lied_cop)
               { text: { en: '"Rules are rules. Take it up with the manager."', ru: '«Правила есть правила. Обращайтесь к управляющему».', uk: '«Правила є правила. Звертайтеся до управителя».', es: '«Las reglas son las reglas. Hable con el gerente».' }, next: 'rules' },
               { text: { en: '"He was scared. Of you, I think."', ru: '«Он был напуган. Вами, я думаю».', uk: '«Він був наляканий. Вами, я думаю».', es: '«Tenía miedo. De usted, creo».' }, next: 'scared', effect: { trouble: 1, flags: { father_enemy: true } } },
               ...(s.flags.lied_cop ? [{ text: { en: 'Slide Officer Reyes\'s card across the desk. Say nothing.', ru: 'Молча подвинуть по стойке визитку офицера Рейес.', uk: 'Мовчки посунути по стійці візитівку офіцера Реєс.', es: 'Deslizar la tarjeta de la agente Reyes por el mostrador. No decir nada.' }, next: 'card', effect: { flags: { father_card: true } } }] : []),
             ] },
        rules: { who: 'narr', text: { en: 'He looks at you for a long time. Then he leaves. He does not slam the door. That is worse.', ru: 'Он долго смотрит на вас. Потом уходит. Не хлопает дверью. Это хуже.', uk: 'Він довго дивиться на вас. Потім іде. Не грюкає дверима. Це гірше.', es: 'Se le queda mirando un largo rato. Luego se va. No da un portazo. Eso es peor.' }, next: 'end' },
        scared: { who: 'guest', text: { en: "Scared. Of me. …You'll want to remember my face, clerk.", ru: 'Напуган. Мной. …Запомните моё лицо, портье.', uk: 'Наляканий. Мною. …Запам’ятайте моє обличчя, портьє.', es: 'Miedo. De mí. …Le conviene recordar mi cara, recepcionista.' }, next: 'end' },
        card: { who: 'narr', text: { en: 'He reads the name. He puts the card in his pocket very carefully, like it might go off. He leaves.', ru: 'Он читает имя. Кладёт визитку в карман очень осторожно, будто она может взорваться. Уходит.', uk: 'Він читає ім’я. Кладе візитівку в кишеню дуже обережно, наче вона може вибухнути. Іде.', es: 'Lee el nombre. Se guarda la tarjeta en el bolsillo con mucho cuidado, como si pudiera estallar. Se va.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Dana', ru: 'Дана', uk: 'Дана', es: 'Dana' }, voice: { gender: 'f', pitch: 1.05, rate: 1.0 },
      portrait: portrait('#8a3a5a', false, false), start: 'a',
      when: (s) => s.flags.saved_dana,
      nodes: {
        a: { who: 'guest', text: { en: "I left him. This morning, while he slept. I have one suitcase and enough for four nights. I need a week.", ru: 'Я ушла от него. Сегодня утром, пока он спал. У меня один чемодан и денег на четыре ночи. Мне нужна неделя.', uk: 'Я пішла від нього. Сьогодні вранці, поки він спав. У мене одна валіза і грошей на чотири ночі. Мені потрібен тиждень.', es: 'Lo dejé. Esta mañana, mientras dormía. Tengo una maleta y dinero para cuatro noches. Necesito una semana.' },
             choices: [
               { text: { en: '"A week for the price of four. Don\'t tell Sal."', ru: '«Неделя по цене четырёх. Сэлу не говорите».', uk: '«Тиждень за ціною чотирьох. Селу не кажіть».', es: '«Una semana por el precio de cuatro. No se lo diga a Sal».' }, next: 'deal', effect: { cash: 160, flags: { dana_stays: true, dana_deal: true } } },
               { text: { en: '"Four nights is four nights."', ru: '«Четыре ночи есть четыре ночи».', uk: '«Чотири ночі є чотири ночі».', es: '«Cuatro noches son cuatro noches».' }, next: 'four', effect: { cash: 160, flags: { dana_stays: true } } },
             ] },
        deal: { who: 'guest', text: { en: "…Thank you. Again. If he calls—", ru: '…Спасибо. Снова. Если он позвонит…', uk: '…Дякую. Знову. Якщо він подзвонить…', es: '…Gracias. Otra vez. Si él llama…' }, next: 'calls' },
        four: { who: 'guest', text: { en: "Four, then. I'll figure out the rest. If he calls—", ru: 'Четыре так четыре. С остальным разберусь. Если он позвонит…', uk: 'Чотири то чотири. З рештою розберуся. Якщо він подзвонить…', es: 'Cuatro, entonces. Ya veré cómo hago con el resto. Si él llama…' }, next: 'calls' },
        calls: { who: 'narr', text: { en: 'She does not finish the sentence. She waits for you to.', ru: 'Она не заканчивает фразу. Ждёт, что закончите вы.', uk: 'Вона не закінчує фразу. Чекає, що закінчите ви.', es: 'No termina la frase. Espera que la termine usted.' },
                 choices: [
                   { text: { en: '"You checked out. I never saw you."', ru: '«Вы выехали. Я вас не {видел|видела}».', uk: '«Ви виїхали. Я вас не {бачив|бачила}».', es: '«Usted ya se marchó. Nunca la vi».' }, next: 'hide', effect: { flags: { dana_hide: true } } },
                   { text: { en: '"I don\'t lie to callers. But I don\'t give out room numbers either."', ru: '«Я не вру звонящим. Но и номера комнат не называю».', uk: '«Я не брешу тим, хто дзвонить. Але й номерів кімнат не називаю».', es: '«No le miento a quien llama. Pero tampoco doy números de habitación».' }, next: 'honest' },
                 ] },
        hide: { who: 'guest', text: { en: "Okay. Okay. Room 4. I'll keep the light off.", ru: 'Хорошо. Хорошо. Номер 4. Свет включать не буду.', uk: 'Добре. Добре. Номер 4. Світло вмикати не буду.', es: 'Está bien. Está bien. Habitación 4. Tendré la luz apagada.' }, next: 'end' },
        honest: { who: 'guest', text: { en: "That's fair. That's more than fair. Room 4.", ru: 'Справедливо. Более чем справедливо. Номер 4.', uk: 'Справедливо. Більш ніж справедливо. Номер 4.', es: 'Es justo. Más que justo. Habitación 4.' }, next: 'end' },
      }
    },
    {
      name: { en: 'Rick', ru: 'Рик', uk: 'Рік', es: 'Rick' }, voice: { gender: 'm', pitch: 1.0, rate: 1.1 },
      portrait: portrait('#8a3a5a', false, false), start: 'a',
      when: (s) => !s.flags.saved_dana,
      nodes: {
        a: { who: 'guest', text: { en: "Where is she? She walked out of the room at four in the morning. You were on the desk. You saw her.", ru: 'Где она? Она вышла из номера в четыре утра. Вы были за стойкой. Вы её видели.', uk: 'Де вона? Вона вийшла з номера о четвертій ранку. Ви були за стійкою. Ви її бачили.', es: '¿Dónde está? Salió de la habitación a las cuatro de la mañana. Usted estaba en el mostrador. La vio.' },
             choices: [
               { text: { en: '"I don\'t watch the elevator."', ru: '«Я не слежу за лифтом».', uk: '«Я не стежу за ліфтом».', es: '«Yo no vigilo el ascensor».' }, next: 'shrug' },
               { text: { en: '"She took a cab. North." (She went south.)', ru: '«Она взяла такси. На север». (Она уехала на юг.)', uk: '«Вона взяла таксі. На північ». (Вона поїхала на південь.)', es: '«Tomó un taxi. Hacia el norte». (Se fue al sur.)' }, next: 'lie', effect: { flags: { misdirected_rick: true } } },
               { text: { en: '"Get out of my lobby."', ru: '«Вон из моего холла».', uk: '«Геть із мого холу».', es: '«Fuera de mi vestíbulo».' }, next: 'out', effect: { trouble: 1 } },
             ] },
        shrug: { who: 'guest', text: { en: "Useless. All of you.", ru: 'Бесполезные. Все вы.', uk: 'Марні. Усі ви.', es: 'Inútiles. Todos ustedes.' }, next: 'end' },
        lie: { who: 'narr', text: { en: "He is out the door before you finish. You hope north is very far.", ru: 'Он за дверью раньше, чем вы договорили. Вы надеетесь, что север очень далеко.', uk: 'Він за дверима раніше, ніж ви договорили. Ви сподіваєтеся, що північ дуже далеко.', es: 'Ya ha salido antes de que termine de hablar. Usted espera que el norte quede muy lejos.' }, next: 'end' },
        out: { who: 'narr', text: { en: 'He knocks the bell off the desk on his way out. It rings once on the floor.', ru: 'На выходе он сбивает звонок со стойки. Тот один раз звякает на полу.', uk: 'На виході він збиває дзвінок зі стійки. Той один раз дзенькає на підлозі.', es: 'Al salir tira el timbre del mostrador. Suena una vez en el suelo.' }, next: 'end' },
      }
    },
    {
      time: '03:00', name: { en: 'The man in the good coat', ru: 'Мужчина в хорошем пальто', uk: 'Чоловік у гарному пальті', es: 'El hombre del abrigo bueno' }, voice: { gender: 'm', pitch: 0.65, rate: 0.9 },
      portrait: portrait('#1e1e2e', true, false), start: 'a',
      when: (s) => s.flags.envelope || s.flags.gave_envelope,
      nodes: {
        a: { who: 'narr', text: (s) => s.flags.leo_watch
              ? { en: '03:00. Leo, by the door, goes very still. A man in a good coat comes in. He does not look at Leo. He looks at you.', ru: '03:00. Лео у двери замирает. Входит мужчина в хорошем пальто. На Лео он не смотрит. Он смотрит на вас.', uk: '03:00. Лео біля дверей завмирає. Заходить чоловік у гарному пальті. На Лео він не дивиться. Він дивиться на вас.', es: '03:00. Leo, junto a la puerta, se queda muy quieto. Entra un hombre con un abrigo bueno. No mira a Leo. {Lo|La} mira a usted.' }
              : { en: '03:00. The door opens without a sound. A man in a good coat. He does not shake the cold off. He looks at you.', ru: '03:00. Дверь открывается беззвучно. Мужчина в хорошем пальто. Он не стряхивает холод. Он смотрит на вас.', uk: '03:00. Двері відчиняються беззвучно. Чоловік у гарному пальті. Він не струшує холод. Він дивиться на вас.', es: '03:00. La puerta se abre sin un ruido. Un hombre con un abrigo bueno. No se sacude el frío. {Lo|La} mira a usted.' },
             next: 'b' },
        b: { who: 'guest', text: { en: "Room twelve.", ru: 'Двенадцатый номер.', uk: 'Дванадцятий номер.', es: 'La habitación doce.' },
             choices: (s) => s.flags.envelope
              ? [
                  { text: { en: '"There is no room twelve."', ru: '«Двенадцатого номера нет».', uk: '«Дванадцятого номера немає».', es: '«No hay habitación doce».' }, next: (s) => (s.flags.opened ? 'opened' : 'deliver'), effect: { cash: 300, flags: { delivered: true, envelope: false } } },
                  { text: { en: '"The police know about it."', ru: '«Полиция о нём знает».', uk: '«Поліція про нього знає».', es: '«La policía está al tanto».' }, next: 'police', effect: { flags: { warned_man: true } } },
                  { text: { en: '"You\'re not getting it."', ru: '«Вы его не получите».', uk: '«Ви його не отримаєте».', es: '«No se lo voy a dar».' }, next: 'refuse', effect: { trouble: 2, flags: { refused_man: true } } },
                ]
              : [
                  { text: { en: '"The police took it. Officer Reyes."', ru: '«Его забрала полиция. Офицер Рейес».', uk: '«Його забрала поліція. Офіцер Реєс».', es: '«Se lo llevó la policía. La agente Reyes».' }, next: 'reyes' },
                  { text: { en: 'Say nothing.', ru: 'Молчать.', uk: 'Мовчати.', es: 'No decir nada.' }, next: 'silent' },
                ] },
        deliver: { who: 'guest', text: { en: "Good. Then we understand each other. This is for the silence, not the envelope.", ru: 'Хорошо. Значит, мы понимаем друг друга. Это за молчание, не за конверт.', uk: 'Добре. Отже, ми розуміємо одне одного. Це за мовчання, не за конверт.', es: 'Bien. Entonces nos entendemos. Esto es por el silencio, no por el sobre.' }, next: 'deliver2' },
        deliver2: { who: 'narr', text: { en: 'Three hundred, in fifties. He takes the envelope without looking at it. At the door: "Denis said the same thing. Word for word."', ru: 'Триста, полтинниками. Он берёт конверт, не глядя. У двери: «Денис сказал то же самое. Слово в слово».', uk: 'Триста, п’ятдесятками. Він бере конверт, не дивлячись. Біля дверей: «Денис сказав те саме. Слово в слово».', es: 'Trescientos, en billetes de cincuenta. Toma el sobre sin mirarlo. En la puerta: «Denis dijo lo mismo. Palabra por palabra».' }, next: 'end' },
        opened: { who: 'guest', text: { en: "…You opened it. The seal. That makes two of you. Keep the money. You'll need it more than he did.", ru: '…Вы его открывали. Печать. Вас таких уже двое. Деньги оставьте. Вам они нужнее, чем ему.', uk: '…Ви його відкривали. Печатка. Вас таких уже двоє. Гроші лишіть. Вам вони потрібніші, ніж йому.', es: '…Lo abrió. El sello. Ya son dos. Quédese el dinero. Le hará más falta que a él.' }, effect: { trouble: 1, flags: { marked: true } }, next: 'end' },
        police: { who: 'guest', text: { en: "Of course they do. Who do you think told Reyes to leave her card? …Keep it one more night. Think about who you'd rather hand it to.", ru: 'Конечно, знает. Кто, по-вашему, велел Рейес оставить визитку? …Подержите ещё одну ночь. Подумайте, кому вам приятнее его отдать.', uk: 'Звісно, знає. Хто, по-вашому, велів Реєс лишити візитівку? …Потримайте ще одну ніч. Подумайте, кому вам приємніше його віддати.', es: 'Claro que lo está. ¿Quién cree que le dijo a Reyes que dejara su tarjeta? …Guárdelo una noche más. Piense a quién prefiere dárselo.' }, effect: { flags: { knows_reyes: true } }, next: 'end' },
        refuse: { who: 'guest', text: { en: "Denis said no as well. Once. …Good night, clerk. I know where you stand. Every night.", ru: 'Денис тоже сказал «нет». Один раз. …Спокойной ночи, портье. Я знаю, где вы стоите. Каждую ночь.', uk: 'Денис теж сказав «ні». Один раз. …Добраніч, портьє. Я знаю, де ви стоїте. Щоночі.', es: 'Denis también dijo que no. Una vez. …Buenas noches, recepcionista. Sé dónde está usted. Todas las noches.' }, effect: { flags: { marked: true } }, next: 'end' },
        reyes: { who: 'guest', text: { en: "Reyes. …Then it went where it was going anyway. The next one, you hold. Or you go where Denis went.", ru: 'Рейес. …Значит, он всё равно попал куда шёл. Следующий держите вы. Или отправитесь туда же, куда Денис.', uk: 'Реєс. …Отже, він усе одно потрапив куди йшов. Наступний тримаєте ви. Або підете туди ж, куди Денис.', es: 'Reyes. …Entonces llegó adonde iba de todos modos. El próximo lo guarda usted. O se va adonde se fue Denis.' }, effect: { trouble: 1, flags: { knows_reyes: true, threatened: true } }, next: 'end' },
        silent: { who: 'guest', text: { en: "Silence. Good. Denis talked. Reyes has it, I know. The next one, you hold.", ru: 'Молчание. Хорошо. Денис говорил. Он у Рейес, я знаю. Следующий держите вы.', uk: 'Мовчання. Добре. Денис говорив. Він у Реєс, я знаю. Наступний тримаєте ви.', es: 'Silencio. Bien. Denis habló. Lo tiene Reyes, lo sé. El próximo lo guarda usted.' }, effect: { flags: { knows_reyes: true, threatened: true } }, next: 'end' },
      }
    },
    {
      name: { en: 'The woman in grey', ru: 'Женщина в сером', uk: 'Жінка в сірому', es: 'La mujer de gris' }, voice: { gender: 'f', pitch: 0.8, rate: 0.88 },
      portrait: portrait('#5a5a5a', false, true), start: 'a',
      when: (s) => !s.flags.envelope && !s.flags.gave_envelope && !s.flags.delivered,
      nodes: {
        a: { who: 'guest', text: { en: "You said no. Almost nobody says no. Five hundred, this time. Same envelope. Same rules.", ru: 'Вы отказали. Почти никто не отказывает. Пятьсот, на этот раз. Тот же конверт. Те же правила.', uk: 'Ви відмовили. Майже ніхто не відмовляє. П’ятсот, цього разу. Той самий конверт. Ті самі правила.', es: 'Dijo que no. Casi nadie dice que no. Quinientos, esta vez. El mismo sobre. Las mismas reglas.' },
             choices: [
               { text: { en: 'Take it.', ru: 'Взять.', uk: 'Взяти.', es: 'Aceptarlo.' }, next: 'take', effect: { cash: 500, flags: { envelope: true, took_late: true } } },
               { text: { en: '"No. Twice."', ru: '«Нет. Дважды».', uk: '«Ні. Двічі».', es: '«No. Dos veces».' }, next: 'no', effect: { flags: { refused_twice: true } } },
             ] },
        take: { who: 'guest', text: { en: "There it is. Everyone has a number. Room twelve, if a man calls.", ru: 'Вот и всё. У каждого есть своя цифра. Двенадцатый номер, если позвонит мужчина.', uk: 'Ось і все. У кожного є своя цифра. Дванадцятий номер, якщо подзвонить чоловік.', es: 'Ahí está. Todo el mundo tiene su número. La habitación doce, si llama un hombre.' }, next: 'end' },
        no: { who: 'guest', text: { en: "Then you're no use to us. That is safer for you than you know. …I'd still lock the door tonight.", ru: 'Значит, вы нам не нужны. Это безопаснее для вас, чем вы думаете. …Я бы всё же заперла сегодня дверь.', uk: 'Отже, ви нам не потрібні. Це безпечніше для вас, ніж ви думаєте. …Я б усе ж замкнула сьогодні двері.', es: 'Entonces no nos sirve. Eso es más seguro para usted de lo que cree. …Aun así, yo cerraría la puerta con llave esta noche.' }, next: 'end' },
      }
    },
    {
      time: '05:00', name: { en: 'Officer Reyes', ru: 'Офицер Рейес', uk: 'Офіцер Реєс', es: 'Agente Reyes' }, voice: { gender: 'f', pitch: 0.95, rate: 1.0 },
      portrait: portrait('#2a3a6a', true, false), start: 'a',
      nodes: {
        a: { who: 'narr', text: { en: '05:00. Reyes. No rain to be wet from tonight. She looks at the drawer first, then at you.', ru: '05:00. Рейес. Сегодня нет дождя, чтобы промокнуть. Сначала смотрит на ящик, потом на вас.', uk: '05:00. Реєс. Сьогодні немає дощу, щоб промокнути. Спочатку дивиться на шухляду, потім на вас.', es: '05:00. Reyes. Esta noche no hay lluvia que la empape. Mira primero el cajón, luego a usted.' }, next: 'b' },
        b: { who: 'guest', text: (s) => s.flags.delivered
              ? { en: "He came. And you gave it to him. …Good. That's good. You'll do.", ru: 'Он приходил. И вы отдали. …Хорошо. Это хорошо. Вы подойдёте.', uk: 'Він приходив. І ви віддали. …Добре. Це добре. Ви підійдете.', es: 'Vino. Y usted se lo dio. …Bien. Eso está bien. Usted servirá.' }
              : s.flags.warned_man
              ? { en: "You told him the police know. He called me at three-fifteen. Laughing. That is not a sound I like.", ru: 'Вы сказали ему, что полиция знает. Он позвонил мне в три пятнадцать. Смеясь. Мне не нравится этот звук.', uk: 'Ви сказали йому, що поліція знає. Він подзвонив мені о третій п’ятнадцять. Сміючись. Мені не подобається цей звук.', es: 'Le dijo que la policía lo sabe. Me llamó a las tres y cuarto. Riéndose. No es un sonido que me guste.' }
              : s.flags.threatened
              ? { en: "He came, didn't he. What did he say to you?", ru: 'Он приходил, так? Что он вам сказал?', uk: 'Він приходив, так? Що він вам сказав?', es: 'Vino, ¿verdad? ¿Qué le dijo?' }
              : s.flags.refused_man
              ? { en: "You told him no. To his face. …I knew one other clerk who did that. I'm going to need you to stop being brave.", ru: 'Вы сказали ему «нет». В лицо. …Я знала ещё одного портье, который так сделал. Мне нужно, чтобы вы перестали храбриться.', uk: 'Ви сказали йому «ні». В обличчя. …Я знала ще одного портьє, який так зробив. Мені треба, щоб ви перестали гратися в героя.', es: 'Le dijo que no. En su cara. …Conocí a otro recepcionista que hizo eso. Necesito que deje de hacerse {el valiente|la valiente}.' }
              : s.flags.took_late
              ? { en: "She came back and you took it this time. Five hundred? …Hand it over, and this stays between us.", ru: 'Она вернулась, и на этот раз вы взяли. Пятьсот? …Отдайте, и это останется между нами.', uk: 'Вона повернулася, і цього разу ви взяли. П’ятсот? …Віддайте, і це лишиться між нами.', es: 'Volvió, y esta vez usted aceptó. ¿Quinientos? …Entréguemelo, y esto queda entre {nosotros|nosotras}.' }
              : { en: "You said no twice. Nobody says no twice. Take my card. If there's a third time, you call before you answer.", ru: 'Вы отказали дважды. Никто не отказывает дважды. Возьмите визитку. Если будет третий раз, звоните до того, как ответите.', uk: 'Ви відмовили двічі. Ніхто не відмовляє двічі. Візьміть візитівку. Якщо буде третій раз, дзвоніть до того, як відповісте.', es: 'Dijo que no dos veces. Nadie dice que no dos veces. Tome mi tarjeta. Si hay una tercera, llámeme antes de contestar.' },
             choices: (s) => s.flags.delivered
              ? [
                  { text: { en: '"You\'re working with him."', ru: '«Вы работаете с ним».', uk: '«Ви працюєте з ним».', es: '«Usted trabaja con él».' }, next: 'with', effect: { flags: { knows_reyes: true } } },
                  { text: { en: '"Where is Denis?"', ru: '«Где Денис?»', uk: '«Де Денис?»', es: '«¿Dónde está Denis?»' }, next: 'denis' },
                  { text: { en: 'Say nothing.', ru: 'Молчать.', uk: 'Мовчати.', es: 'No decir nada.' }, next: 'quiet' },
                ]
              : s.flags.warned_man
              ? [
                  { text: { en: '"He said you left the card on his orders."', ru: '«Он сказал, вы оставили визитку по его приказу».', uk: '«Він сказав, ви лишили візитівку за його наказом».', es: '«Él dijo que usted dejó la tarjeta por orden suya».' }, next: 'orders', effect: { trouble: 1 } },
                  { text: { en: 'Say nothing.', ru: 'Молчать.', uk: 'Мовчати.', es: 'No decir nada.' }, next: 'quiet' },
                ]
              : s.flags.threatened
              ? [
                  { text: { en: 'Tell her everything.', ru: 'Рассказать всё.', uk: 'Розповісти все.', es: 'Contárselo todo.' }, next: 'told', effect: { flags: { told_reyes: true } } },
                  { text: { en: '"He wanted a room. There wasn\'t one."', ru: '«Он хотел номер. Номеров не было».', uk: '«Він хотів номер. Номерів не було».', es: '«Quería una habitación. No había».' }, next: 'lie2', effect: { flags: { lied_cop: true } } },
                ]
              : s.flags.took_late
              ? [
                  { text: { en: 'Hand over the envelope.', ru: 'Отдать конверт.', uk: 'Віддати конверт.', es: 'Entregar el sobre.' }, next: 'hand', effect: { cash: -500, flags: { envelope: false, gave_envelope: true } } },
                  { text: { en: '"Nothing here but room keys, officer."', ru: '«Тут только ключи от номеров, офицер».', uk: '«Тут лише ключі від номерів, офіцере».', es: '«Aquí solo hay llaves de habitaciones, agente».' }, next: 'lie2', effect: { flags: { lied_cop: true } } },
                ]
              : [
                  { text: { en: 'Take the card.', ru: 'Взять визитку.', uk: 'Взяти візитівку.', es: 'Tomar la tarjeta.' }, next: 'card', effect: { flags: { reyes_card: true } } },
                  { text: { en: '"I won\'t need it."', ru: '«Она мне не понадобится».', uk: '«Вона мені не знадобиться».', es: '«No la voy a necesitar».' }, next: 'card2' },
                ] },
        with: { who: 'guest', text: { en: "I'm working ON him. There's a difference. There was, anyway. Go home, clerk.", ru: 'Я работаю НАД ним. Есть разница. Была, во всяком случае. Идите домой, портье.', uk: 'Я працюю НАД ним. Є різниця. Була, принаймні. Ідіть додому, портьє.', es: 'Yo no trabajo con él: voy TRAS él. Hay una diferencia. La había, al menos. Váyase a casa, recepcionista.' }, next: 'end' },
        denis: { who: 'guest', text: { en: "Denis opened his. That's all you need to know about Denis.", ru: 'Денис открыл свой. Это всё, что вам нужно знать о Денисе.', uk: 'Денис відкрив свій. Це все, що вам треба знати про Дениса.', es: 'Denis abrió el suyo. Es todo lo que necesita saber de Denis.' }, next: 'end' },
        quiet: { who: 'narr', text: { en: 'She waits. You wait. She loses. She leaves.', ru: 'Она ждёт. Вы ждёте. Она проигрывает. Уходит.', uk: 'Вона чекає. Ви чекаєте. Вона програє. Іде.', es: 'Ella espera. Usted espera. Ella pierde. Se va.' }, next: 'end' },
        orders: { who: 'guest', text: { en: "He'd say that. Half of it's even true. Don't repeat it to anyone who wears a badge.", ru: 'Он бы так и сказал. Половина даже правда. Не повторяйте это никому со значком.', uk: 'Він би так і сказав. Половина навіть правда. Не повторюйте це нікому зі значком.', es: 'Él diría eso. La mitad hasta es verdad. No se lo repita a nadie que lleve placa.' }, next: 'end' },
        told: { who: 'guest', text: { en: "'The next one, you hold.' Then hold it. And the minute it's in your drawer, you call me. Not him. Me.", ru: '«Следующий держите вы». Так держите. И как только он окажется в вашем ящике, звоните мне. Не ему. Мне.', uk: '«Наступний тримаєте ви». Тож тримайте. І щойно він опиниться у вашій шухляді, дзвоніть мені. Не йому. Мені.', es: '«El próximo lo guarda usted». Pues guárdelo. Y en cuanto esté en su cajón, me llama. A él no. A mí.' }, effect: { flags: { informant: true } }, next: 'end' },
        lie2: { who: 'narr', text: { en: 'She writes something down. She does not look at the drawer again. She does not need to.', ru: 'Она что-то записывает. Больше не смотрит на ящик. Ей не нужно.', uk: 'Вона щось записує. Більше не дивиться на шухляду. Їй не треба.', es: 'Anota algo. No vuelve a mirar el cajón. No le hace falta.' }, next: 'end' },
        hand: { who: 'guest', text: { en: "Five hundred for a night's work. You'd have made a good Denis.", ru: 'Пятьсот за ночь работы. Из вас вышел бы хороший Денис.', uk: 'П’ятсот за ніч роботи. З вас вийшов би хороший Денис.', es: 'Quinientos por una noche de trabajo. Habría sido un buen Denis.' }, next: 'end' },
        card: { who: 'guest', text: { en: "Good. Most people don't take it. Most people aren't here the next spring.", ru: 'Хорошо. Большинство не берут. Большинства следующей весной здесь нет.', uk: 'Добре. Більшість не беруть. Більшості наступної весни тут немає.', es: 'Bien. Casi nadie la acepta. Casi nadie sigue aquí la primavera siguiente.' }, next: 'end' },
        card2: { who: 'guest', text: { en: "…Neither did he.", ru: '…Ему тоже не понадобилась.', uk: '…Йому теж не знадобилася.', es: '…Él tampoco la necesitó.' }, next: 'end' },
      }
    },
    {
      time: '06:00', name: { en: 'Sal (the manager)', ru: 'Сэл (управляющий)', uk: 'Сел (управитель)', es: 'Sal (el gerente)' }, voice: { gender: 'm', pitch: 0.7, rate: 1.05 },
      portrait: portrait('#7a2a2a', false, true), start: 'a',
      nodes: {
        a: { who: 'guest', text: (s) => s.flags.dana_deal
              ? { en: "Morning. Room 4 paid four and is written down for seven. Whose idea was that.", ru: 'Утро. Четвёртый номер заплатил за четыре, а записан на семь. Чья это была идея.', uk: 'Ранок. Четвертий номер заплатив за чотири, а записаний на сім. Чия це була ідея.', es: 'Buenos días. La 4 pagó cuatro noches y está apuntada por siete. ¿De quién fue la idea?' }
              : s.flags.dana_stays
              ? { en: "Morning. Room 4's paid a week up front? First time anyone's paid me up front since the nineties.", ru: 'Утро. Четвёртый номер оплатил неделю вперёд? Впервые кто-то платит мне вперёд с девяностых.', uk: 'Ранок. Четвертий номер оплатив тиждень наперед? Уперше хтось платить мені наперед із дев’яностих.', es: 'Buenos días. ¿La 4 pagó una semana por adelantado? Nadie me paga por adelantado desde los noventa.' }
              : { en: "Morning. Register. And why is there a coffee cup on my desk.", ru: 'Утро. Касса. И почему на моей стойке стакан из-под кофе.', uk: 'Ранок. Каса. І чому на моїй стійці стакан з-під кави.', es: 'Buenos días. La caja. ¿Y por qué hay un vaso de café en mi mostrador?' },
             next: 'end' },
      }
    },
  ],
  pickEnding(state) {
    const f = state.flags;
    if (state.trouble >= TROUBLE_MAX) return 'fired';
    if (f.delivered && f.knows_reyes) return 'inside';
    if (f.delivered) return 'courier';
    if (f.informant) return 'informant';
    if (f.marked || f.threatened) return 'marked';
    if (f.refused_twice) return 'clean';
    if (f.envelope) return 'holding';
    return 'quiet';
  },
  endings: {
    fired: {
      en: ['SHIFT OVER', "Sal adds tonight's trouble to last night's and doesn't like the total. 'Don't come back.' Across the street, a man in a good coat watches you leave."],
      ru: ['СМЕНА ОКОНЧЕНА', 'Сэл прибавляет сегодняшние проблемы ко вчерашним, и сумма ему не нравится. «Не возвращайся». Через дорогу мужчина в хорошем пальто смотрит, как вы уходите.'],
      uk: ['ЗМІНУ ЗАКІНЧЕНО', 'Сел додає сьогоднішні проблеми до вчорашніх, і сума йому не подобається. «Не повертайся». Через дорогу чоловік у гарному пальті дивиться, як ви йдете.'],
      es: ['FIN DEL TURNO', 'Sal suma los problemas de esta noche a los de anoche y el total no le gusta. «No vuelvas». Al otro lado de la calle, un hombre con un abrigo bueno mira cómo se va usted.'] },
    inside: {
      en: ['INSIDE', "The cop and the man in the coat are the same door, opened from two sides. You are now standing in it. There is no room twelve. There is a room twelve."],
      ru: ['ВНУТРИ', 'Полицейская и мужчина в пальто — одна дверь, открытая с двух сторон. Теперь вы стоите в ней. Двенадцатого номера нет. Двенадцатый номер есть.'],
      uk: ['УСЕРЕДИНІ', 'Поліцейська й чоловік у пальті — одні двері, відчинені з двох боків. Тепер ви стоїте в них. Дванадцятого номера немає. Дванадцятий номер є.'],
      es: ['DENTRO', 'La policía y el hombre del abrigo son la misma puerta, abierta desde dos lados. Ahora usted está en el umbral. No hay habitación doce. Hay una habitación doce.'] },
    courier: {
      en: ['THE NEW DENIS', "Three hundred in the register, and the envelope gone the way Denis's went. You wonder what Denis said next, and on which night."],
      ru: ['НОВЫЙ ДЕНИС', 'Триста в кассе, а конверт ушёл туда же, куда ушёл конверт Дениса. Вы думаете, что Денис сказал потом, и в какую ночь.'],
      uk: ['НОВИЙ ДЕНИС', 'Триста в касі, а конверт пішов туди ж, куди пішов конверт Дениса. Ви думаєте, що Денис сказав потім, і якої ночі.'],
      es: ['EL NUEVO DENIS', 'Trescientos en la caja, y el sobre se fue por donde se fue el de Denis. Usted se pregunta qué dijo Denis después, y en qué noche.'] },
    informant: {
      en: ['TWO PHONES', "You will hold the next envelope. You will call Reyes. Or you will call him. Every night now has a three o'clock."],
      ru: ['ДВА ТЕЛЕФОНА', 'Вы будете держать следующий конверт. Вы позвоните Рейес. Или позвоните ему. Теперь в каждой ночи есть три часа.'],
      uk: ['ДВА ТЕЛЕФОНИ', 'Ви триматимете наступний конверт. Ви подзвоните Реєс. Або подзвоните йому. Тепер у кожній ночі є третя година.'],
      es: ['DOS TELÉFONOS', 'Guardará el próximo sobre. Llamará a Reyes. O lo llamará a él. Ahora cada noche tiene sus tres de la mañana.'] },
    marked: {
      en: ['MARKED', "He knows where you stand, and on which nights. You lock the front door for the first time in your life. It does not help."],
      ru: ['{ПОМЕЧЕН|ПОМЕЧЕНА}', 'Он знает, где вы стоите, и в какие ночи. Вы впервые в жизни запираете входную дверь. Это не помогает.'],
      uk: ['{ПОЗНАЧЕНИЙ|ПОЗНАЧЕНА}', 'Він знає, де ви стоїте, і в які ночі. Ви вперше в житті замикаєте вхідні двері. Це не допомагає.'],
      es: ['{MARCADO|MARCADA}', 'Él sabe dónde está usted, y en qué noches. Por primera vez en su vida, cierra con llave la puerta de casa. No sirve de nada.'] },
    clean: {
      en: ['CLEAN HANDS', "You said no twice. Reyes left a card anyway. Somewhere in the city a different night clerk is saying yes."],
      ru: ['ЧИСТЫЕ РУКИ', 'Вы отказали дважды. Рейес всё равно оставила визитку. Где-то в городе другой ночной портье говорит «да».'],
      uk: ['ЧИСТІ РУКИ', 'Ви відмовили двічі. Реєс усе одно лишила візитівку. Десь у місті інший нічний портьє каже «так».'],
      es: ['MANOS LIMPIAS', 'Dijo que no dos veces. Reyes dejó su tarjeta de todos modos. En algún lugar de la ciudad, otro recepcionista de noche está diciendo que sí.'] },
    holding: {
      en: ['HOLDING', "The envelope is in the drawer. Tomorrow at three, someone asks for room twelve again. You already know what you'll say."],
      ru: ['НА РУКАХ', 'Конверт в ящике. Завтра в три кто-то снова спросит двенадцатый номер. Вы уже знаете, что скажете.'],
      uk: ['НА РУКАХ', 'Конверт у шухляді. Завтра о третій хтось знову спитає дванадцятий номер. Ви вже знаєте, що скажете.'],
      es: ['EN SUS MANOS', 'El sobre está en el cajón. Mañana a las tres, alguien volverá a preguntar por la habitación doce. Usted ya sabe qué va a decir.'] },
    quiet: {
      en: ['A QUIET ONE', "Dawn. Five hundred crossed this desk tonight and left with a cop; the drawer is empty again. 'You'd have made a good Denis.' You do not believe the quiet for a second."],
      ru: ['ТИХАЯ НОЧЬ', 'Рассвет. Пятьсот прошли через эту стойку за ночь и ушли с полицейской; ящик снова пуст. «Из вас вышел бы хороший Денис». Вы не верите этой тишине ни секунды.'],
      uk: ['ТИХА НІЧ', 'Світанок. П’ятсот пройшли через цю стійку за ніч і пішли з поліцейською; шухляда знову порожня. «З вас вийшов би хороший Денис». Ви не вірите цій тиші ні секунди.'],
      es: ['UNA NOCHE TRANQUILA', 'Amanece. Quinientos cruzaron este mostrador esta noche y se fueron con una policía; el cajón vuelve a estar vacío. «Habría sido un buen Denis». Usted no se cree esta calma ni por un segundo.'] },
  },
});
