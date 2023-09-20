// получаем объект, из которого нужно только свойство goods
// учтено в ф-и httpRequest
export const url = 'https://cyber-kindly-globeflower.glitch.me/api/goods?page=2';

export const getGoodDataUrl = `https://cyber-kindly-globeflower.glitch.me/api/goods/`;

export const correctOrderOfProp = [
  'id', 'title', 'price', 'description', 'category', 'count', 'units', 'image',
];
