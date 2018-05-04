import Categories from '../models/Categories';
import _ from 'lodash';

export const index = async (req, res) => {
  let categories = await Categories.find();
  // let menus = _.pick(...categories, ['id', 'name']);
  console.log('categories log:::', ...categories);
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
