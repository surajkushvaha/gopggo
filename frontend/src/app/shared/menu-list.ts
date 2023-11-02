

export const sidebarmenu = [
  {
    category:'Explore',
    submenu:[
      {
          icon : '',
          title: '',
          route: ''
      }
    ]
  }
]
export const topmenu = [
  {
    label :'Home',
    routerLink:'/home'
  },
  {
    label:'Explore',
    items: [
      {
          label:'PG',
          routerLink:'/search/PG'
      },
      {
          label:'Hostels',
          routerLink:'/search/hostels'
      }
    ],
  }
]
