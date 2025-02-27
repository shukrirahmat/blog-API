const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getPost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
}

async function createNewPost(title, content, published) {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published,
      datePosted: new Date(),
    },
  });

  return post;
}

async function deletePost(id) {
  const deletedPost = await prisma.post.delete({
    where: {
      id,
    },
  });

  return deletedPost;
}

async function updatePost(id, title, content, published) {
  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      published,
    },
  });
  return updatedPost;
}

module.exports = {
  createNewPost,
  getAllPosts,
  getPost,
  deletePost,
  updatePost
};
