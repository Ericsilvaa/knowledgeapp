export const paths = {
  login: {
    index: '/login',
    forgotPassword: {
      index: '/login/forgot-password',
      instructionsSent: '/login/sent'
    },
    registrationHome: '/login/registration-home',
    entry: '/login/entry'
  },
  logout: '/logout',
  registration: {
    index: '/registration',
    landing: '/registration/landing',
    basicInformation: '/registration/basic-information',
    address: '/registration/address',
    confirmDetails: '/registration/confirm-details'
  },
  dashboard: {
    index: '/dashboard',
    stats: '/dashboard/stats'
  },
  myAccount: {
    index: '/my-account',
    editUserInformation: '/my-account/edit-user-info',
    editUserEmail: '/my-account/edit-user-info/email',
    editUserPhone: '/my-account/edit-user-info/phone'
  },
  taskHub: {
    index: 'task-hub',
    task: {
      index: 'task-hub/task',
      details: 'task-hub/task/details'
    }
  }
}
