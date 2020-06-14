const clothData = [
  {
    id: 1,
    name: 'blue tshirt',
    color: 'blue',
    type: 'tshirt',
    tag: ['male', 'large size'],
    image: '../assets/imgs/blue_t.png',
  },
  {
    id: 2,
    name: 'blue pants',
    color: 'blue',
    type: 'pants',
    tag: ['male', 'large size'],
    image: '../assets/imgs/blue_p.png',
  },
  {
    id: 3,
    name: 'blue skirt',
    color: 'blue',
    type: 'skirt',
    tag: ['female', 'small size'],
    image: '../assets/imgs/blue_s.png',
  },
  {
    id: 4,
    name: 'yellow tshirt',
    color: 'yellow',
    type: 'tshirt',
    tag: ['female', 'small size'],
    image: '../assets/imgs/yellow_t.png',
  },
  {
    id: 5,
    name: 'yellow pants',
    color: 'yellow',
    type: 'pants',
    tag: ['male', 'large size'],
    image: '../assets/imgs/yellow_p.png',
  },
  {
    id: 6,
    name: 'yello skirt',
    color: 'yellow',
    type: 'skirt',
    tag: ['female', 'large size'],
    image: '../assets/imgs/yellow_s.png',
  },
  {
    id: 7,
    name: 'pink tshirt',
    color: 'pink',
    type: 'tshirt',
    tag: ['female', 'small size'],
    image: '../assets/imgs/pink_t.png',
  },
  {
    id: 8,
    name: 'pink pants',
    color: 'pink',
    type: 'pants',
    tag: ['male', 'small size'],
    image: '../assets/imgs/pink_p.png',
  },
  {
    id: 9,
    name: 'pink shirt',
    color: 'pink',
    type: 'skirt',
    tag: ['female', 'small size'],
    image: '../assets/imgs/pink_s.png',
  },
]

export default {
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(clothData);
      }, 200);
    })
  }
}