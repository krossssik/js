const defaultPersons = [
  {
    fio: "Анютина Юлия Михайловна",
    position: "Выпускающий редактор",
    birthday: new Date(1, 3, 1994),
    male: false,
    fired: true,
  },
  {
    fio: "Ветров Сергей Михайлович",
    position: "Ведущий техник",
    birthday: new Date(1993, 12, 13),
    male: true,
    fired: false,
  },
  {
    fio: "Довгаль Ирина Сергеевна",
    position: "Выпускающий редактор",
    birthday: new Date(1990, 3, 13),
    male: false,
    fired: false,
  },
  {
    fio: "Коригова Марьям Микоиловна",
    position: "Ведущий техник",
    birthday: new Date(1999, 5, 4),
    male: false,
    fired: false,
  },
  {
    fio: "Косарев Василий Петрович",
    position: "Выпускающий редактор",
    birthday: new Date(1995, 11, 17),
    male: true,
    fired: false,
  },
  {
    fio: "Межва Збигнев",
    position: "Выпускающий редактор",
    birthday: new Date(1992, 4, 23),
    male: true,
    fired: false,
  },
  {
    fio: "Михайлова Светлана Феодосиевна",
    position: "Ведущий специалист",
    birthday: new Date(1989, 8, 12),
    male: false,
    fired: false,
  },
  {
    fio: "Островская Анастасия Сергеевна",
    position: "Выпускающий редактор",
    birthday: new Date(1995, 11, 17),
    male: false,
    fired: false,
  },
  {
    fio: "Чечет Владимир Андрианович",
    position: "Выпускающий редактор",
    birthday: new Date(1995, 11, 17),
    male: true,
    fired: false,
  },
  {
    fio: "Шадрин Виктор Александрович",
    position: "Заведующий редакцией",
    birthday: new Date(1995, 11, 17),
    male: true,
    fired: false,
  },
];

const positions = [
  "Заведующий редакцией",
  "Выпускающий редактор",
  "Ведущий специалист",
  "Ведущий техник",
];

export { positions, defaultPersons };
