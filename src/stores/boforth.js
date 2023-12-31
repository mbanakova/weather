import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoforthStore = defineStore('boforth', () => {
  const boforth = reactive([{
    points: 0,
    name: "Штиль",
    maxSpeed: 0.2,
    descriptionEarth: "Безветрие. Дым поднимается вертикально, листья деревьев неподвижны.",
    descriptionSea: "Зеркально гладкое море.",
    color: "#f5f5f5",
    color2: "#60ebc5",
    img: ""
  },
  {
    points: 1,
    name: "Очень лёгкий ветер",
    maxSpeed: 1.5,
    descriptionEarth: "Направление ветра заметно по относу дыма, но не по флюгеру.",
    descriptionSea: "Рябь, пены на гребнях волн нет. Высота волн до 0,1 м.",
    color: "#AEF1F9",
    color2: "#7bd8fb",
    img: ""
  },
  {
    points: 2,
    name: "Лёгкий",
    maxSpeed: 3.3,
    descriptionEarth: "Движение ветра ощущается лицом, шелестят листья, приводится в движение флюгер.",
    descriptionSea: "Короткие волны максимальной высотой до 0,3 м, гребни не опрокидываются и кажутся стекловидными.",
    color: "#96F7DC",
    color2: "#60ebc5",
    img: ""
  },
  {
    points: 3,
    name: "Слабый",
    maxSpeed: 5.4,
    descriptionEarth: "Листья и тонкие ветви деревьев всё время колышутся, ветер развевает лёгкие флаги.",
    descriptionSea: "Короткие, хорошо выраженные волны. Гребни, опрокидываясь, образуют стекловидную пену. Изредка образуются маленькие барашки. Средняя высота волн 0,6 м, максимальная около 0,9 м.",
    color: "#96F7B4",
    color2: "#6cd58c",
    img: ""
  },
  {
    points: 4,
    name: "Умеренный",
    maxSpeed: 7.9,
    descriptionEarth: "Ветер поднимает пыль и мусор, приводит в движение тонкие ветви деревьев.",
    descriptionSea: "Волны удлинённые, барашки видны во многих местах. Максимальная высота волн до 1,5 м.",
    color: "#6FF46F",
    color2: "#63d934",
    img: ""
  },
  {
    points: 5,
    name: "Свежий",
    maxSpeed: 10.7,
    descriptionEarth: "Качаются тонкие стволы деревьев, движение ветра ощущается рукой.",
    descriptionSea: "Хорошо развитые в длину, но не крупные волны, максимальная высота волн 2,5 м, средняя — 2 м. Повсюду видны белые барашки (в отдельных случаях образуются брызги).",
    color: "#73ED12",
    color2: "#73d923",
    img: ""
  },
  {
    points: 6,
    name: "Сильный",
    maxSpeed: 13.8,
    descriptionEarth: "Качаются толстые сучья деревьев, гудят телеграфные провода.",
    descriptionSea: "Начинают образовываться крупные волны. Белые пенистые гребни занимают значительные площади, вероятны брызги. Максимальная высота волн — до 4 м, средняя — 3 м.",
    color: "#A4ED12",
    color2: "#61d31a",
    img: ""
  },
  {
    points: 7,
    name: "Крепкий",
    maxSpeed: 17.1,
    descriptionEarth: "Гнутся стволы деревьев, трудно идти против ветра.",
    descriptionSea: "Волны громоздятся, гребни волн срываются, пена ложится полосами по ветру. Максимальная высота волн до 5,5 м.",
    color: "#DAED12",
    color2: "#b9c90f",
    img: ""
  },
  {
    points: 8,
    name: "Очень крепкий",
    maxSpeed: 20.7,
    descriptionEarth: "Ветер ломает сучья деревьев, идти против ветра очень трудно.",
    descriptionSea: "Умеренно высокие длинные волны. По краям гребней начинают взлетать брызги. Полосы пены ложатся рядами по направлению ветра. Максимальная высота волн до 7,5 м, средняя — 5,5 м.",
    color: "#EDC212",
    color2: "#c5a10b",
    img: ""
  },
  {
    points: 9,
    name: "Шторм",
    maxSpeed: 24.4,
    descriptionEarth: "Небольшие повреждения, ветер начинает разрушать крыши зданий.",
    descriptionSea: "Высокие волны (максимальная высота — 10 м, средняя — 7 м). Пена широкими плотными полосами ложится по ветру. Гребни волн начинают опрокидываться и рассыпаться в брызги, которые ухудшают видимость.",
    color: "#ED8F12",
    color2: "#d17d0e",
    img: ""
  },
  {
    points: 10,
    name: "Сильный шторм",
    maxSpeed: 28.4,
    descriptionEarth: "Значительные разрушения строений, ветер вырывает деревья с корнем.",
    descriptionSea: "Очень высокие волны (максимальная высота — 12,5 м, средняя — 9 м) с длинными загибающимися вниз гребнями. Образующаяся пена выдувается ветром большими хлопьями в виде густых белых полос. Поверхность моря белая от пены. Сильный грохот волн подобен ударам.",
    color: "#ED6312",
    color2: "#c74f09",
    img: ""
  },
  {
    points: 11,
    name: "Жестокий шторм",
    maxSpeed: 32.6,
    descriptionEarth: "Большие разрушения на значительном пространстве. Наблюдается очень редко.",
    descriptionSea: "Видимость плохая. Исключительно высокие волны (максимальная высота — до 16 м, средняя — 11,5 м). Суда небольшого и среднего размера временами скрываются из вида. Море всё покрыто длинными белыми слоями пены, располагающимися по ветру. Края волн повсюду сдуваются в пену.",
    color: "#ED2912",
    color2: "#cb200c",
    img: ""
  },
  {
    points: 12,
    name: "Ураган",
    maxSpeed: 100,
    descriptionEarth: "Огромные разрушения, серьёзно повреждены здания, строения и дома, деревья вырваны с корнями, растительность уничтожена. Случай крайне редкий.",
    descriptionSea: "Исключительно плохая видимость. Воздух наполнен пеной и брызгами. Всё море покрыто полосами пены. Высота волн 20 и более метров.",
    color: "#D5102D",
    color2: "#6f0514",
    img: ""
  }])

  const getBoforth = (speed) => { //3.15
    let i = 0;
    while ((speed > boforth[i].maxSpeed)) {
      i++
    }
    return boforth[i]
  }

  return { boforth, getBoforth }
})
