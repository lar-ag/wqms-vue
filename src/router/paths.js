/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [{
    path: '/dashboard',
    name: 'Dashboard',
    view: "Dashboard",
    meta: {
      level: 1,
    },

  }, {
    path: '/errors',
    name: 'Errors',
    view: "Errors",
    meta: {
      level: 1,
    },

  }, {
    path: '/archive',
    name: 'Archive',
    view: "Archive",
    meta: {
      level: 1,
    },
  }, {
    path: '/log',
    name: 'Log book',
    view: "Logbook",
    meta: {
      level: 1,
    },
  }, {
    path: '/system',
    name: 'System',
    view: "System",
    meta: {
      level: 1,
    },
  }, {
    path: '/service',
    name: 'Service',
    view: 'Service',
    meta: {
      level: 1,
    },
  }, {
    path: '/settings',
    name: 'Settings',
    view: 'Settings',
    meta: {
      level: 1,
    },
  }, {
    path: '/mio',
    name: 'MultiIO',
    view: 'Mio',
    meta: {
      level: 1,
    },
  }, {
    path: '/license',
    name: 'License',
    view: 'Licinse',
    meta: {
      level: 1,
    }
  }, {
    path: '/update',
    name: 'Update',
    view: 'Update',
    meta: {
      level: 1,
    },
  }, {
    path: '/method/:id',
    name: 'Method',
    view: 'Method',
    meta: {
      level: 1,
    },
  },
  {
    path: '/sensor/:id',
    name: 'Sensor',
    view: 'Sensor',
    meta: {
      level: 1,
    },
  },
  {
    path: '/help',
    name: 'Help',
    view: 'Help',
    meta: {
      level: 1,
      breadcrumb: true
    },
  },
]
