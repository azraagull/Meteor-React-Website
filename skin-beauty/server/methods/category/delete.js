import SimpleSchema from 'simpl-schema';
import { Categories } from '../../../lib/collections/categories';

new ValidatedMethod({
  name: 'category.delete',
  validate: new SimpleSchema({
    _id: String
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;
    Categories.remove({ _id: _id });
  }
});
