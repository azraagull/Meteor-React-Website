import SimpleSchema from 'simpl-schema';
import { Categories } from '../../../lib/collections/categories';

new ValidatedMethod({
  name: 'category.show',
  validate: new SimpleSchema({
    // _id: SimpleSchema.RegEx.Id,
  }).validator(),
  run: async function (data) {
    this.unblock();
    const { _id } = data;

    return Categories.findOne({
      _id: _id
    });
  }
});


