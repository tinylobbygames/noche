// 07.11.2026, after the intfiction reviews ("I had no idea what was going on", "everything happens for reasons"):
// at the end of every night the clerk gets one or two solid facts to stand on. The mystery stays a mystery; the ground under it doesn't.
// Each entry: (flags) => list of lines; every line is { en, ru, uk, es }. Only what the player has certainly seen or heard on that path.
const KNOWN = [
  // night 1 (Monday)
  (f) => [
    { en: 'This hotel has rooms one to eleven. Nobody has ever mentioned a twelfth, until tonight.',
      ru: 'В этом отеле номера с первого по одиннадцатый. О двенадцатом никто не говорил — до этой ночи.',
      uk: 'У цьому готелі номери з першого по одинадцятий. Про дванадцятий ніхто не згадував — до цієї ночі.',
      es: 'Este hotel tiene habitaciones de la uno a la once. Nadie había mencionado una duodécima, hasta esta noche.' },
    f.envelope || f.gave_envelope
      ? { en: 'A woman in grey paid you to keep a sealed envelope and to say “there is no room twelve”. At three, a man asked for exactly that room.',
          ru: 'Женщина в сером заплатила вам, чтобы вы хранили запечатанный конверт и говорили: «Двенадцатого номера нет». В три часа мужчина спросил именно этот номер.',
          uk: 'Жінка в сірому заплатила вам, щоб ви зберігали запечатаний конверт і казали: «Дванадцятого номера немає». О третій чоловік спитав саме цей номер.',
          es: 'Una mujer de gris le pagó por guardar un sobre cerrado y decir «no existe la habitación doce». A las tres, un hombre preguntó justo por esa habitación.' }
      : { en: 'A woman in grey wanted an envelope kept behind this desk. You said no. At three, a man asked for room twelve anyway.',
          ru: 'Женщина в сером хотела оставить за стойкой конверт. Вы отказались. В три часа мужчина всё равно спросил двенадцатый номер.',
          uk: 'Жінка в сірому хотіла залишити за стійкою конверт. Ви відмовилися. О третій чоловік усе одно спитав дванадцятий номер.',
          es: 'Una mujer de gris quería dejar un sobre detrás de este mostrador. Usted dijo que no. A las tres, un hombre preguntó igualmente por la habitación doce.' },
  ],
  // night 2 (Tuesday)
  (f) => [
    f.opened
      ? { en: 'Inside the envelope: a brass key tagged 12 and a photograph of you at this desk, taken the night before.',
          ru: 'В конверте латунный ключ с биркой «12» и фотография: вы за этой стойкой, снято прошлой ночью.',
          uk: 'У конверті латунний ключ із біркою «12» і фотографія: ви за цією стійкою, знято минулої ночі.',
          es: 'Dentro del sobre: una llave de latón con la etiqueta 12 y una foto suya en este mostrador, tomada la noche anterior.' }
      : { en: 'The woman in grey leaves the envelopes. A quiet man in a good coat is the one who comes for them.',
          ru: 'Конверты оставляет женщина в сером. Приходит за ними тихий мужчина в хорошем пальто.',
          uk: 'Конверти залишає жінка в сірому. Приходить по них тихий чоловік у гарному пальті.',
          es: 'La mujer de gris deja los sobres. Quien viene a por ellos es un hombre callado con un buen abrigo.' },
    f.marv_told
      ? { en: 'You are not the first. Last spring the clerk was Denis. He got an envelope too, then went off with the man in the good coat and never came back down.',
          ru: 'Вы не первый. Прошлой весной портье был Денис. Ему тоже оставили конверт, потом он ушёл с мужчиной в хорошем пальто и больше не спускался.',
          uk: 'Ви не перші. Минулої весни портьє був Денис. Йому теж залишили конверт, потім він пішов із чоловіком у гарному пальті й більше не спускався.',
          es: 'No es el primero. La primavera pasada el recepcionista era Denis. También recibió un sobre, se fue con el hombre del buen abrigo y no volvió a bajar.' }
      : { en: 'Everyone who says “room twelve” also says “Denis”: the clerk who sat here before you.',
          ru: 'Каждый, кто говорит «двенадцатый номер», говорит и «Денис» — портье, который сидел здесь до вас.',
          uk: 'Кожен, хто каже «дванадцятий номер», каже й «Денис» — портьє, який сидів тут до вас.',
          es: 'Todos los que dicen «habitación doce» dicen también «Denis»: el recepcionista que se sentaba aquí antes que usted.' },
  ],
  // night 3 (Wednesday)
  (f) => [
    f.denis_call
      ? { en: 'The voice on the phone at three was Denis. He is alive, somewhere above you, and he said: don’t come up, or come up before Friday.',
          ru: 'В три часа звонил Денис. Он жив, где-то над вами, и сказал: не поднимайтесь — или поднимитесь до пятницы.',
          uk: 'О третій дзвонив Денис. Він живий, десь над вами, і сказав: не піднімайтеся — або підніміться до п’ятниці.',
          es: 'La voz del teléfono a las tres era Denis. Está vivo, en algún lugar encima de usted, y dijo: no suba, o suba antes del viernes.' }
      : { en: 'At three the phone rang and you let it ring. It stopped on the twelfth ring. Someone in this building wanted you to count.',
          ru: 'В три зазвонил телефон, и вы не сняли трубку. Он замолчал на двенадцатом звонке. Кто-то в этом здании хотел, чтобы вы считали.',
          uk: 'О третій задзвонив телефон, і ви не взяли слухавку. Він замовк на дванадцятому дзвінку. Хтось у цьому будинку хотів, щоб ви рахували.',
          es: 'A las tres sonó el teléfono y usted lo dejó sonar. Se calló al duodécimo timbre. Alguien en este edificio quería que usted contara.' },
    f.sal_cut
      ? { en: 'Sal knows. He takes a cut for not knowing, and has for years.',
          ru: 'Сэл знает. Он берёт долю за то, что ничего не знает, и уже много лет.',
          uk: 'Сел знає. Він бере частку за те, що нічого не знає, і вже багато років.',
          es: 'Sal lo sabe. Cobra una parte por no saberlo, y lleva años haciéndolo.' }
      : f.has_key
        ? { en: 'You hold a key to room twelve. Whatever it is, it is in this hotel.',
            ru: 'У вас ключ от двенадцатого номера. Что бы это ни было, оно в этом отеле.',
            uk: 'У вас ключ від дванадцятого номера. Хоч би що це було, воно в цьому готелі.',
            es: 'Tiene una llave de la habitación doce. Sea lo que sea, está en este hotel.' }
        : { en: 'Room twelve is not somewhere else. It is in this hotel.',
            ru: 'Двенадцатый номер не где-то ещё. Он в этом отеле.',
            uk: 'Дванадцятий номер не деінде. Він у цьому готелі.',
            es: 'La habitación doce no está en otro sitio. Está en este hotel.' },
  ],
  // night 4 (Thursday)
  (f) => [
    f.went_up
      ? { en: 'Room twelve is real: a door with no number on the top floor. Denis lives behind it and keeps a wall of photographs of night clerks. One of them is you.',
          ru: 'Двенадцатый номер существует: дверь без номера на верхнем этаже. За ней живёт Денис и хранит стену фотографий ночных портье. На одной из них вы.',
          uk: 'Дванадцятий номер існує: двері без номера на верхньому поверсі. За ними живе Денис і зберігає стіну фотографій нічних портьє. На одній із них ви.',
          es: 'La habitación doce existe: una puerta sin número en el último piso. Detrás vive Denis, con una pared de fotos de recepcionistas de noche. Una de ellas es usted.' }
      : { en: 'Room twelve is a door with no number on the top floor. Everyone who works here is paid, one way or another, not to say so.',
          ru: 'Двенадцатый номер — дверь без номера на верхнем этаже. Всем, кто здесь работает, так или иначе платят за то, чтобы молчали.',
          uk: 'Дванадцятий номер — двері без номера на верхньому поверсі. Усім, хто тут працює, так чи інакше платять за мовчання.',
          es: 'La habitación doce es una puerta sin número en el último piso. A todos los que trabajan aquí se les paga, de un modo u otro, por no decirlo.' },
    f.knows_reyes || f.tracker
      ? { en: 'Officer Reyes is not outside it. What reaches her reaches the man in the good coat by noon.',
          ru: 'Офицер Рейес не снаружи. Всё, что попадает к ней, к полудню попадает к мужчине в хорошем пальто.',
          uk: 'Офіцер Реєс не зовні. Усе, що потрапляє до неї, до полудня потрапляє до чоловіка в гарному пальті.',
          es: 'La agente Reyes no está fuera de esto. Lo que llega a ella llega al hombre del buen abrigo antes del mediodía.' }
      : null,
  ],
  // night 5 (Friday)
  (f) => [
    { en: 'The woman in grey is finished, and her coat is the job: leave the envelopes, say there is no room twelve. Tonight it was offered to you.',
      ru: 'Женщина в сером своё отработала, а её пальто — это работа: оставлять конверты и говорить, что двенадцатого номера нет. Этой ночью её предложили вам.',
      uk: 'Жінка в сірому своє відпрацювала, а її пальто — це робота: залишати конверти й казати, що дванадцятого номера немає. Цієї ночі її запропонували вам.',
      es: 'La mujer de gris ha terminado, y su abrigo es el trabajo: dejar los sobres y decir que no existe la habitación doce. Esta noche se lo ofrecieron a usted.' },
    { en: 'Tomorrow is the last night of the week. Whatever you decide, decide it at the desk.',
      ru: 'Завтра последняя ночь недели. Что бы вы ни решили, решайте за стойкой.',
      uk: 'Завтра остання ніч тижня. Хоч би що ви вирішили, вирішуйте за стійкою.',
      es: 'Mañana es la última noche de la semana. Decida lo que decida, decídalo en el mostrador.' },
  ],
];
