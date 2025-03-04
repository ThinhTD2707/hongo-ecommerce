//import components and layout for converting
import Home from '../Pages/Home/home';
import Detail from '../Pages/Detail';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import CheckOut from '../Pages/CheckOut';
const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/detail/:id',
        component: Detail,
    },
    {
        path: '/shop',
        component: Shop,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/checkout',
        component: CheckOut,
    },
];
const privateRoute = [];
export { publicRoute, privateRoute };
