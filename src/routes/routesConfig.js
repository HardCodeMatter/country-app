import { Dashboard } from '@containers/Dashboard/Dashboard';
import { Countries } from '@containers/Countries/Countries';
import { Country } from '@containers/Country/Country';

const routesConfig = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: 'countries',
        element: <Countries />
    },
    {
        path: 'countries/:id',
        element: <Country />
    }
];

export default routesConfig;
