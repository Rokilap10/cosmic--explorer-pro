
export type SpaceItemType = 'star' | 'planet' | 'galaxy' | 'blackhole';

export interface SpaceItem {
  id: string;
  name: string;
  type: SpaceItemType;
  shortDescription: string;
  description: string;
  distance: string;
  image: string;
  tags: string[];
}

export const spaceItems: SpaceItem[] = [
  {
    id: 'sun',
    name: 'Солнце',
    type: 'star',
    shortDescription: 'Звезда в центре нашей Солнечной системы.',
    description:
      'Солнце — это гигантский раскалённый шар плазмы, обеспечивающий Землю светом и теплом. Его энергия образуется в результате термоядерных реакций в ядре, где водород превращается в гелий.',
    distance: '0 а.е. (центр Солнечной системы)',
    image: 'https://images.pexels.com/photos/87651/pexels-photo-87651.jpeg',
    tags: ['звезда', 'солнечная система', 'плазма']
  },
  {
    id: 'earth',
    name: 'Земля',
    type: 'planet',
    shortDescription: 'Наш дом — единственная известная обитаемая планета.',
    description:
      'Земля — третья планета от Солнца и единственная известная планета, на которой есть жизнь. Она обладает атмосферой, богатой кислородом, и огромным водным океаном, покрывающим более 70% поверхности.',
    distance: '~150 млн км от Солнца',
    image: 'https://images.pexels.com/photos/87009/earth-planet-universe-cosmos-87009.jpeg',
    tags: ['планета', 'жизнь', 'атмосфера']
  },
  {
    id: 'milky-way',
    name: 'Галактика Млечный Путь',
    type: 'galaxy',
    shortDescription: 'Наша домашняя галактика со стами миллиардов звёзд.',
    description:
      'Млечный Путь — это спиральная галактика с перемычкой, содержащая сотни миллиардов звёзд, включая наше Солнце. Диаметр галактики составляет около 100 000 световых лет.',
    distance: '— (мы внутри неё)',
    image: 'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg',
    tags: ['галактика', 'спиральная', 'звёзды']
  },
  {
    id: 'andromeda',
    name: 'Туманность Андромеды',
    type: 'galaxy',
    shortDescription: 'Ближайшая к нам крупная галактика.',
    description:
      'Андромеда — ближайшая к Млечному Пути крупная галактика и наш будущий «столкновитель». Через миллиарды лет Млечный Путь и Андромеда сольются в одну гигантскую галактику.',
    distance: '~2.5 млн световых лет',
    image: 'https://images.pexels.com/photos/2150/sky-lights-space-dark.jpg',
    tags: ['галактика', 'сосед', 'космическое столкновение']
  },
  {
    id: 'sagittarius-a',
    name: 'Стрелец A*',
    type: 'blackhole',
    shortDescription: 'Сверхмассивная чёрная дыра в центре Млечного Пути.',
    description:
      'Стрелец A* — сверхмассивная чёрная дыра с массой около четырёх миллионов масс Солнца. Она находится в самом центре нашей галактики и влияет на движение ближайших звёзд.',
    distance: '~26 000 световых лет',
    image: 'https://images.pexels.com/photos/2150/sky-lights-space-dark.jpg',
    tags: ['чёрная дыра', 'центр галактики', 'гравитация']
  },
  {
    id: 'm87-black-hole',
    name: 'Чёрная дыра в галактике M87',
    type: 'blackhole',
    shortDescription: 'Первая сфотографированная чёрная дыра.',
    description:
      'Чёрная дыра в галактике M87 стала первой, изображение которой удалось получить с помощью телескопа Event Horizon Telescope. Она в тысячи раз массивнее Стрельца A*.',
    distance: '~53 млн световых лет',
    image: 'https://images.pexels.com/photos/2150/sky-lights-space-dark.jpg',
    tags: ['чёрная дыра', 'M87', 'горизонт событий']
  }
];
