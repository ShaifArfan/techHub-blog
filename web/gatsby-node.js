const createBlogPages = async ({ graphql, actions }) => {
  // templates path
  const blogTemplate = require.resolve('./src/templates/single-blog.js');
  const categoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );

  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog(filter: { slug: { current: { ne: "" } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: blogTemplate,
      context: { id: blog.id },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: categoryTemplate,
      context: { id: category.id },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
