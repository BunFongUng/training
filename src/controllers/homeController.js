import Categories from '../models/Categories';

export const index = async (req, res) => {
  let categories = await Categories.find();
  console.log('categories log:::', categories);
  res.layout(
    'layout',
    {
      title: 'Lester Shop'
    },
    {
      content: {
        block: 'index',
        data: {
          name: 'Lester'
        }
      }
    }
  );
};
