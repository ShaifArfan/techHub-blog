const createBlogPages = async ({ graphql, actions }) => {
  // path to blog post template
  const blogTemplate = require.resolve('./src/templates/blog-post.js');
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog(filter: { slug: { current: { ne: "" } } }) {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: blogTemplate,
      context: { id: blog.id },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
