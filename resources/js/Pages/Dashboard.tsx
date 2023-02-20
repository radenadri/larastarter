import React from 'react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';
import useRoute from '@/Hooks/useRoute';

import { Button } from '@/Components/radix/button';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  const route = useRoute();

  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard
          </h2>
          <InertiaLink href={route('profile.show')}>
            <Button>Open Profile</Button>
          </InertiaLink>
        </div>
      )}
    >
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
            <Welcome />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
