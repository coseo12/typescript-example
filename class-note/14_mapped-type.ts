type Heroes = 'Hulk' | 'Capt' | 'Thor';

type HeroAges = {
  [p in Heroes]?: number;
};

const obj: HeroAges = { Hulk: 1 };
