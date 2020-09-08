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
                  buildHookId: '5f57cfecd9a815101d6a730d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r3awdtbs',
                  apiId: '93a83b87-53ba-4070-bbef-faa295aefbda'
                },
                {
                  buildHookId: '5f57cfec148a540b0faae73b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8b972y72',
                  apiId: '9c78b2ba-fd7d-41e4-8fb5-f78b3b1c3cd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micaelgarcez/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8b972y72.netlify.app', category: 'apps'}
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
