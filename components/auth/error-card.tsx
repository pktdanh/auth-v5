import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Card, CardFooter, CardHeader } from '../ui/card';
import { BackButton } from './back-button';
import { CardWrapper } from './card-wrapper';
import { Header } from './header';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to Login"
      backButtonRef="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
