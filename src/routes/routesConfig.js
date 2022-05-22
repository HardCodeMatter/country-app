import { Dashboard } from '@containers/Dashboard/Dashboard';
import { Countries } from '@containers/Countries/Countries';
import { Country } from '@containers/Country/Country';
import { Search } from '@containers/Search/Search';
import { Setting } from '@containers/Setting/Setting';

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
    },
    {
        path: 'setting',
        element: <Setting />
    }
];

export default routesConfig;
