import SimpleSchema from 'simpl-schema';
import { Categories } from '../../../lib/collections/categories';

new ValidatedMethod({
  name: 'category.create',
  validate: new SimpleSchema({
    category: CategorySchema
  }).validator(),
  run: function(data){
    this.unblock();
    const { category } = data
    const id = Categories.insert(category);
    return Categories.findOne({ _id: id});
  }
});