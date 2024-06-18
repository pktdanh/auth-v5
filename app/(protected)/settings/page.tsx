'use client';

import { useCurrentUser } from '@/hooks/use-current-user';
import { signOut } from 'next-auth/react';

export default function SettingsPage() {
  const session = useCurrentUser();

  const onClick = () => {
    signOut();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick}>Log out</button>
    </div>
  );
}
