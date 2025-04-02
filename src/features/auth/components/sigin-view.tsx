'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  return (
    // logo
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/examples/authentication'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Image
            src='/chainfly_logo.png'
            className='pl-2 pr-2'
            alt='Chainfly Logo'
            width={60}
            height={60}
          />
          <span className='font-serif text-2xl font-semibold'>Chainfly</span>
        </div>
        <div className='relative z-20 mt-24 flex items-center text-lg'>
          <div className='text-lg'>
            <span className='text-xl font-semibold'>
              AI-Powered Image Analytics & GIS Mapping for Renewable Energy
            </span>
            <p className='text-md py-3 italic'>
              🚀Optimize Performance | Reduce Downtime | Maximize ROI Log in to
              access advanced AI-driven insights for Solar Energy operations.
            </p>

            <ul
              typeof='disc'
              className='list-inside list-disc py-5 font-medium'
            >
              <li>
                AI-Powered Defect Detection – Identify issues before failures
                occur.{' '}
              </li>
              <li>
                GIS Mapping & Site Optimization – Enhance efficiency with
                precise data.{' '}
              </li>
              <li>
                Predictive Maintenance & Smart Monitoring – Reduce costs and
                improve sustainability.{' '}
              </li>
            </ul>
          </div>
        </div>

        {/* footer */}
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <footer className='text-sm'>@Chainfly</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Create an account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
