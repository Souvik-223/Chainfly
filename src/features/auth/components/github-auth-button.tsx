'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { toast } from 'sonner';

export default function GithubSignInButton() {
  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={() => {
        toast.error('Google sign in is not available yet.');
      }}
    >
      <Icons.Google className='mr-2 h-4 w-4' />
      Continue with Google
    </Button>
  );
}
