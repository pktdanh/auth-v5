'use client';

import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { BackButton } from './back-button';
import { Header } from './header';
import { Social } from './social';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonRef: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonRef,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Suspense><Social /></Suspense>
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonRef} />
      </CardFooter>
    </Card>
  );
};
