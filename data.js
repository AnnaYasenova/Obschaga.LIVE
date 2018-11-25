var data = 
{
  "start": {
    "start": "page",
    "text": "<h2>Obschaga.LIVE</h2>Привіт, новобранцю. Літо закінчується і ти вирушаєш на навчання до університету. Але перед тим, як почнуться заняття, тобі потрібно пройти ще один етап дорослого життя - гуртожиток. КПІшний гуртожиток.",
    "stage": "chapter_1_start",
    "end": "paragraph",
    "choices": [
      {
        "text": "Прийнято, вриваємось"
      }
    ]
  },
  "chapter_1_start": {
    "start": "page",
    "text": "<h2>Частина перша. Коменда.</h2>Кароч ти приїжджаєш і розумієш, що хочеш жити не в тому гуртожитку, до якого тебе записали. По суті так нізя. Але ти не збираєшся здаватися.",
    "stage": "commenda",
    "choices": [
      {
        "text": "Го, рішаємо"
      }
    ]
  },
  "commenda": {
    "start": "paragraph",
    "stage": "start_commenda_talk",
    "text": "Коменда - персона строга, але має свої вразливі місця. Подейкують, що за студентів, які готові відпрацьовувати, вона здатна продати душу дияволу. Як домовитися? Вибір за тобою. Головне пам'ятати про основну мету - поселитися в цей гуртожиток.",
    "end": "paragraph",
    "choices": [
      {
        "text": "Ок. Почати розмову з комендою.",
        "action": "player.energy = 100; player.respect = 100; player.cash = 1000"
      }
    ]
  },
  "start_commenda_talk": {
    "start": "page",
    "text": "<h4>В кабінеті коменди.</h4>",
    "stage": "name",
    // TODO:а далі приклад з палєва, дописую тексти ще
    "choices": [
      {
        "text": "Priest",
        "prompt": "priest, beholding the glorious mission of communicating with the gods, and also protected by the holy cross. ",
        "action": "player.role = 'priest'; inventory.cross = true"
      },
      {
        "text": "Villager",
        "prompt": "villager, farming for food and producing wool for clothes. ",
        "action": "player.role = 'villager'"
      },
      {
        "text": "Hunter",
        "prompt": "hunter, gathering pelts and plants, and cutting trees for houses. ",
        "action": "player.role = 'hunter'"
      },
      {
        "text": "Fisher",
        "prompt": "fisher, staying on the water for most of the time and catching all sorts of fishes. ",
        "action": "player.role = 'fisher'; inventory.boat = true"
      }
    ]
  },
  "end": {
    "text": " --- The End --- "
  }

  
  
}