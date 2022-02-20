const createBlogPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // templates path
  const blogTemplate = require.resolve('./src/templates/single-blog.js');
  const categoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
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

  // single blogs pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: blogTemplate,
      context: { id: blog.id },
    });
  });

  // single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: categoryTemplate,
      context: { id: category.id },
    });
  });

  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/categories` : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPages({ graphql, actions });
};
