
import { useRoutes } from 'react-router-dom';
import Overview from '../../components/admin_dashboard/Overview.js';
import Layout from '../../components/admin_dashboard/Layout.js';
import ApprovalVolunteers from '../../components/admin_dashboard/ApprovalVolunteers.js';
import ApprovalStudents from '../../components/admin_dashboard/ApprovalStudents.js';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'admin/overview',
        element: <Overview />,
      },
      {
        path: 'admin/approvalvolunteers',
        element: <ApprovalVolunteers />,
      },
      {
        path: 'admin/approvalstudents',
        element: <ApprovalStudents />,
      },
    ],
  },
];

function Admin() {
  const routing = useRoutes(routes);
  return (
    <div>{routing}</div>
  );
}

export default Admin;

