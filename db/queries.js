const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllPostsPublic() {
  const posts = await prisma.post.findMany({
    where: {
      published: true
    },
    orderBy: [
      {
        datePosted: 'desc'
      }
    ]
  });
  return posts;
}

async function getAllPostsVerified(username) {
  const posts = await prisma.post.findMany({
    /* where: {
      OR: [
        {
          published: true
        },
        {
          authorUsername: username
        }
      ]
    }, */
    orderBy: [
      {
        datePosted: 'desc'
      }
    ]
  });
  return posts;
}

async function getPost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: true
    }
  });

  return post;
}

async function createNewPost(title, content, authorUsername, published) {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published,
      datePosted: new Date(),
      authorUsername
    },
  });

  return post;
}

async function deletePost(id) {

  const deleteComments = await prisma.comment.deleteMany({
    where: {
      postId: id
    }
  })

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

async function getAllCommentFromPost(postId) {
  const comments = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    select: {
      comments: true,
    },
  });
  return comments;
}

async function getSingleComment(id) {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
    },
  });
  return comment;
}

async function addNewComment(postId, content, writerUsername) {
  const comment = await prisma.comment.create({
    data: {
      content,
      postId,
      dateWritten: new Date(),
      writerUsername
    },
  });
  return comment;
}

async function deleteComment(id) {
  const comment = await prisma.comment.delete({
    where: {
      id,
    },
  });
  return comment;
}

async function updateComment(id, content) {
  const comment = await prisma.comment.update({
    where: {
      id,
    },
    data: {
      content,
    },
  });
  return comment;
}

async function findUser(username) {
  const user = await prisma.user.findUnique({
    where: {username}
  });
  return user;
}

async function createUser(username, password) {
  const user = await prisma.user.create({
    data: {
      username,
      password,
      isAuthor: false
    }
  })
  return user;
}

module.exports = {
  createNewPost,
  getAllPostsPublic,
  getAllPostsVerified,
  getPost,
  deletePost,
  updatePost,
  getAllCommentFromPost,
  getSingleComment,
  addNewComment,
  deleteComment,
  updateComment,
  findUser,
  createUser
};
