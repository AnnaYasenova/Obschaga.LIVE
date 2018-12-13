//"action": "location.replace(\"hangman.html\")"

//типа, "text":"chapter_1_variant_ok"
//key, ukrainian, english
//chapter_1_variant_ok, го, let's go!



var data = 
{
  "start": {
    "start": "page",
    "stage": "chapter_1_start",
    "end": "paragraph"/*,
    "choices": [
      {
        "text": "Прийнято, вриваємось"
      }
    ]*/
  },
  "chapter_1_start": {
    "start": "page",
    "stage": "commenda"//,
    //"choices": 
  },
  "commenda": {
    "start": "paragraph",
    "stage": "start_commenda_talk",
    "end": "paragraph",
    //"choices": 
  },
  "start_commenda_talk": {
    "start": "page",
    "stage": "name",
    //"choices": 
  },
  "end": {
    "text": " --- The End --- "
  }

  
  
};

var text_stage = {
  "start": {
    "ukr": "<h2>Obschaga.LIVE</h2>Привіт, новобранцю. Літо закінчується і ти вирушаєш на навчання до університету. Але перед тим, як почнуться заняття, тобі потрібно пройти ще один етап дорослого життя - гуртожиток. КПІшний гуртожиток.",
    "en": "wef"
  },
  "chapter_1_start": {
    "ukr": "<h2>Частина перша. Коменда.</h2>Кароч ти приїжджаєш і розумієш, що хочеш жити не в тому гуртожитку, до якого тебе записали. По суті так нізя. Але ти не збираєшся здаватися.",
    "en": "lkf"
  },
  "commenda": {
    "ukr": "Коменда - персона строга, але має свої вразливі місця. Подейкують, що за студентів, які готові відпрацьовувати, вона здатна продати душу дияволу. Як домовитися? Вибір за тобою. Головне пам'ятати про основну мету - поселитися в цей гуртожиток.",
    "en": "wlekf"
  },
  "start_commenda_talk": {
    "ukr": "<h4>В кабінеті коменди.</h4> Ти переступив поріг небезпечної зони. Шляху назад немає. Будь пусічкою і виберешся живим.",
    "en": "efw"
  }
};

var choice_description = {
  "start": [
      {
        "text": {
          "ukr": "Прийнято, вриваємось",
          "en": ""
        }
      }
    ],
  "chapter_1_start": [
      {
        "text": {
          "ukr": "Го, рішаємо",
          "en": ""
        }
      }
    ],
  "commenda": [
      {
        "text": {
          "ukr": "Ок. Почати розмову з комендою.",
          "en": ""
        },
        "action": "player.energy = 100; player.respect = 100; player.cash = 1000"
      }
    ]
};