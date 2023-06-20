/* eslint-disable */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const JalurRegulerS1 = Loadable(lazy(() => import('views/jalurReguler/s1')));
const JalurRegulerS2 = Loadable(lazy(() => import('views/jalurReguler/s2')));
const JalurKonversiS1 = Loadable(lazy(() => import('views/jalurKonversi/s1')));
const JalurKonversiS2 = Loadable(lazy(() => import('views/jalurKonversi/s2')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <MainLayout />
    },
    {
      path: 'calon-mahasiswa',
      children: [
        {
          path: 'reguler',
          children: [
            {
              path: 's1',
              element: <JalurRegulerS1 />
            },
            {
              path: 's2',
              element: <JalurRegulerS2 />
            }
          ]
        },
        {
          path: 'konversi',
          children: [
            {
              path: 's1',
              element: <JalurKonversiS1 />
            },
            {
              path: 's2',
              element: <JalurKonversiS2 />
            }
          ]
        }
      ]
    },
  ]
};

export default MainRoutes;
