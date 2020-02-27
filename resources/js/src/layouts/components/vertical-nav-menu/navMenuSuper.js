/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
        url: "/home",
        name: "Inicio",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: "/admin/companies",
        name: "Empresas",
        slug: "companies",
        icon: "BriefcaseIcon",
        i18n: "Companies",
    }, {
        name: 'Usuarios',
        url: '/admin/users',
        icon: 'UserIcon',
        slug: 'users',
        i18n: "Users",
    },
    {
        name: 'Ayuda',
        url: '/help',
        icon: 'HelpCircleIcon',
        slug: 'help'
    }
]