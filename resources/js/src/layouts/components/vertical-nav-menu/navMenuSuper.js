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
        url: "/companies",
        name: "Empresas",
        slug: "companies",
        icon: "UsersIcon",
    },
    {
        url: null,
        name: 'Adminsitracion',
        slug: 'administration',
        icon: 'SettingsIcon',
        submenu: [{
                name: 'Configuraciones',
                url: '/configurations',
                icon: 'SettingsIcon',
                slug: 'configurations'
            },
            {
                name: 'Usuarios',
                url: '/users',
                icon: 'UserIcon',
                slug: 'users'
            }, {
                name: 'Importar factura',
                url: '/import-invoice',
                icon: 'FilePlusIcon',
                slug: 'import-invoice'
            }

        ]
    },
    {
        name: 'Ayuda',
        url: '/help',
        icon: 'HelpCircleIcon',
        slug: 'help'
    }
]