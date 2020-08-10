import Person from '@material-ui/icons/Person';
import UserProfile from './views/UserProfile/UserProfile';
import ChangePassword from './views/changepassword/changepassword';

const headerRoutes = [
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: UserProfile,
    layout: '/admin'
  },
  {
    path: '/change-password',
    name: 'Change Password',
    icon: 'vpn_key',
    component: ChangePassword,
    layout: '/admin'
  }
];

export default headerRoutes;
