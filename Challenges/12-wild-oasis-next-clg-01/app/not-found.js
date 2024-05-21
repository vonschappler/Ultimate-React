import Link from 'next/link';

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4 h-full'>
      <div className='h-full flex flex-col gap-12 items-center justify-center'>
        <h1 className='text-3xl font-semibold'>
          This page could not be found 😢
        </h1>
        <Link
          href='/'
          className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
