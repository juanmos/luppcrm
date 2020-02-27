/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
        url: "/company/home",
        name: "Dashboad",
        slug: "home",
        icon: "HomeIcon",
        i18n: "Dashboard",
    },
    {
        url: "/company/invoices",
        name: "Facturacion",
        slug: "invoices",
        icon: "FileTextIcon",
        i18n: "Invoices",
    },
    {
        url: "/company/payments",
        name: "Pagos",
        slug: "payments",
        icon: "DollarSignIcon",
        i18n: "Payments",
    },
    {
        name: 'Presupuestos',
        url: '/company/estimates',
        icon: 'ClipboardIcon',
        slug: 'estimates',
        i18n: "Estimates",
    }, {
        name: 'Compras',
        url: '/company/expenses',
        icon: 'CreditCardIcon',
        slug: 'expenses',
        i18n: "Expenses",
    }, {
        name: 'Retenciones',
        url: '/company/deductions',
        icon: 'FileMinusIcon',
        slug: 'deductions',
        i18n: "Deductions",
    }, {
        name: 'Clientes',
        url: '/company/clients',
        icon: 'UsersIcon',
        slug: 'clients',
        i18n: "Clients",
    }, {
        url: null,
        name: 'Adminsitration',
        slug: 'administration',
        icon: 'SettingsIcon',
        i18n: "Administration",
        submenu: [{
                name: 'Configuraciones',
                url: '/company/configurations',
                icon: 'SettingsIcon',
                slug: 'configurations',
                i18n: "Settings",
            },
            {
                name: 'Usuarios',
                url: '/company/users',
                icon: 'UserIcon',
                slug: 'users',
                i18n: "Users",
            }, {
                name: 'Importar factura',
                url: '/company/import-invoice',
                icon: 'FilePlusIcon',
                slug: 'import-invoice',
                i18n: "ImportInvoice",
            }

        ]
    },
    {
        name: 'Ayuda',
        url: '/help',
        icon: 'HelpCircleIcon',
        slug: 'help',
        i18n: "Help",
    },

]