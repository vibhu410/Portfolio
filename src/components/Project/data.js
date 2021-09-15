import {v4 as uuidv4} from 'uuid';

const menu = [
    {
      id: uuidv4(),
      title: 'Resorts Booking',
      category: 'resorts',
      price: 15.99,
      img: 'https://res.cloudinary.com/dxop93k05/image/upload/v1631522210/vibhaimages/bulgmu1sgtcil82mi0k2.jpg',
      desc: `Here you can check the quality of rooms & book them`,
    },
    {
      id: uuidv4(),
      title: 'Grocery Bud',
      category: 'grocery',
      price: 13.99,
      img: 'https://res.cloudinary.com/dxop93k05/image/upload/v1631522232/vibhaimages/tnvl7zb5fhbez2aobiv7.jpg',
      desc: `Here you can make a grocery list and calculate bill `,
    },
    {
      id: uuidv4(),
      title: 'Our Menu',
      category: 'menus',
      price: 6.99,
      img: 'https://res.cloudinary.com/dxop93k05/image/upload/v1631522253/vibhaimages/ehllbhvx6kn4lohzl9vz.jpg',
      desc: `Here you can find food items according to meals`,
    },
    {
      id: uuidv4(),
      title: 'Tours',
      category: 'tours',
      price: 20.99,
      img: 'https://res.cloudinary.com/dxop93k05/image/upload/v1631522286/vibhaimages/qkdzcttixaf8wwbxnwyn.jpg',
      desc: `Here you can find tourist places and its expenditure`,
    },
    {
      id: uuidv4(),
      title: 'iTunes App',
      category: 'itunes',
      price: 22.99,
      img: 'https://res.cloudinary.com/dxop93k05/image/upload/v1631522321/vibhaimages/mnyxjejwm2cwxk45qdez.jpg',
      desc: `Here you can easily search any song by its artist name`,
    }
  ];
  export default menu;
  