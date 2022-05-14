import { Dashboard } from '@containers/Dashboard/Dashboard';
import { Countries } from '@containers/Countries/Countries';
import { Country } from '@containers/Country/Country';
import { Search } from '@containers/Search/Search';

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
    },
    {
        path: 'search',
        element: <Search />
    }
];

export default routesConfig;
