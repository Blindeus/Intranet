import React from 'react';
import DashboardComparative from '../components/DashboardComparative/DashboardComparative';
import Layout from '../components/Layout';
export default function Dashboard() {
  return (
    <>
      <Layout children={<DashboardComparative />} />
    </>
  );
}
