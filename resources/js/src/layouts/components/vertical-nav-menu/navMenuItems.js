/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
        url: "/admin/home",
        name: "Inicio",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: "/admin/invoices",
        name: "Facturacion",
        slug: "invoices",
        icon: "FileTextIcon",
    },
    {
        url: "/admin/payments",
        name: "Pagos",
        slug: "payments",
        icon: "DollarSignIcon",
    },
    {
        name: 'Presupuestos',
        url: '/admin/estimates',
        icon: 'ClipboardIcon',
        slug: 'estimates'
    }, {
        name: 'Compras',
        url: '/admin/expenses',
        icon: 'CreditCardIcon',
        slug: 'expenses'
    }, {
        name: 'Retenciones',
        url: '/admin/deductions',
        icon: 'FileMinusIcon',
        slug: 'deductions'
    }, {
        name: 'Clientes',
        url: '/admin/clients',
        icon: 'UsersIcon',
        slug: 'clients'
    }, {
        url: null,
        name: 'Adminsitration',
        slug: 'administration',
        icon: 'SettingsIcon',
        submenu: [{
                name: 'Configuraciones',
                url: '/admin/configurations',
                icon: 'SettingsIcon',
                slug: 'configurations'
            },
            {
                name: 'Usuarios',
                url: '/admin/users',
                icon: 'UserIcon',
                slug: 'users'
            }, {
                name: 'Importar factura',
                url: '/admin/import-invoice',
                icon: 'FilePlusIcon',
                slug: 'import-invoice'
            }

        ]
    },
    {
        name: 'Ayuda',
        url: '/admin/help',
        icon: 'HelpCircleIcon',
        slug: 'help'
    }
]