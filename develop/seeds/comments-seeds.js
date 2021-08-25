onst { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'cereal',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'handlotion',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'swaet shirt',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'glasses.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'towel',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'glue',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'television',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'picture',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'pencil',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'chips',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'turtle',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'scissors',
    user_id: 5,
    post_id: 4
  },
]
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
