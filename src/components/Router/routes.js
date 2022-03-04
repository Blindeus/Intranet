import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Ticket from '../../pages/Ticket';
import RecoveryPassword from '../RecoveryPassword/Recoverypassword';
import ChangePassword from '../RecoveryPassword/ChangePassword';

export const routes = [
  {
    path: '/',
    Element: Login,
    isPrivate: false,
  },
  {
    path: '/register',
    Element: Register,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    Element: Dashboard,
    isPrivate: true,
  },
  {
    path: '/recovery-password',
    Element: RecoveryPassword,
    isPrivate: false,
  },
  {
    path: '/search-ticket',
    Element: Ticket,
    isPrivate: true,
  },
  {
    path: '/change-password/:token',
    Element: ChangePassword,
    isPrivate: false,
  },
];
