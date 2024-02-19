import { Categories } from '../../lib/collections/categories';
import { Client as ESClient } from "@elastic/elasticsearch";

const esClient = new ESClient({ node: "http://localhost:9200" });


console.log(esClient);

Categories.find({}).observeChanges({
  removed: async (id) => {
    await esClient.delete({
      index: 'categories',
      type: 'category',
      id: id,
    });


  },

});

const createIndex = async (id) => {
  console.log(id);
  const category = Categories.findOne(id);

  await esClient.index({
    index: "categories",
    id: id,
    body: {
      ...category,
      id: category.id,
      _id: undefined,
    },
  });
}

Categories.find({ updated: { $gt: new Date() } }).observeChanges({
  added: createIndex,
  changed: createIndex,
});
