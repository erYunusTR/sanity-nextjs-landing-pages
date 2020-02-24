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
                  buildHookId: '5e53f80f051f082eb2abe4fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uuqmyzbx',
                  apiId: 'e154bd6e-61a0-4c22-9f3f-2d0bcf64d7e4'
                },
                {
                  buildHookId: '5e53f80f148742397fe0b2ef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vmtkpjja',
                  apiId: '103a32c3-8d8c-4c5a-9a5d-7e0d9e4f7413'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erYunusTR/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vmtkpjja.netlify.com', category: 'apps'}
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
