const { Post } = require('../models');
const { User } = require('../models');

const Postdata = [
  {
    title: "Blog One",
    contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus laoreet erat, eu ornare erat ultricies ac. In posuere magna at ultricies rutrum. Donec ultricies neque non erat vehicula, non tincidunt dolor rutrum. Maecenas nec elit eu sapien dignissim gravida vitae eu turpis. Fusce et tempus tellus, sit amet tincidunt purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    user_id: 1
  },
  {
    title: "Blog Two",
    contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus laoreet erat, eu ornare erat ultricies ac. In posuere magna at ultricies rutrum. Donec ultricies neque non erat vehicula, non tincidunt dolor rutrum. Maecenas nec elit eu sapien dignissim gravida vitae eu turpis. Fusce et tempus tellus, sit amet tincidunt purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    user_id: 2
  },
  {
    title: "Blog Three",
    contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus laoreet erat, eu ornare erat ultricies ac. In posuere magna at ultricies rutrum. Donec ultricies neque non erat vehicula, non tincidunt dolor rutrum. Maecenas nec elit eu sapien dignissim gravida vitae eu turpis. Fusce et tempus tellus, sit amet tincidunt purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    user_id: 3
  },
  {
    title: "Blog Four",
    contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rhoncus laoreet erat, eu ornare erat ultricies ac. In posuere magna at ultricies rutrum. Donec ultricies neque non erat vehicula, non tincidunt dolor rutrum. Maecenas nec elit eu sapien dignissim gravida vitae eu turpis. Fusce et tempus tellus, sit amet tincidunt purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(Postdata);

module.exports = seedPosts;
