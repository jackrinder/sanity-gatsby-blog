export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e39dd64d5bf89b38c9ecd05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4x7pxhyc',
                  apiId: '07b3384e-79cc-4c8b-b41c-4a5df99dee39'
                },
                {
                  buildHookId: '5e39dd64d5bf8900459eccf9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-spu5wykq',
                  apiId: 'b073fda9-ebab-4e06-81cf-232a8330be35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jackrinder/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-spu5wykq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
