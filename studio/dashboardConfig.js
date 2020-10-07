export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f7d99c1b157821a658d41e2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h7zh8n6s',
                  apiId: 'e40a35bb-f48b-4275-b741-45ec7cb2742e'
                },
                {
                  buildHookId: '5f7d99c1af7f351cfb4a7ea9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wq2apg67',
                  apiId: '49b3ced4-d0a1-452e-baf2-7e047028049e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hewsandison/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wq2apg67.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
