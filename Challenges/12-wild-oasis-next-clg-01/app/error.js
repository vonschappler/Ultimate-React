'use client';

export default function Error({ error, reset }) {
  return (
    <main className='flex justify-center items-center flex-col gap-6 h-full'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <div className='bg-red-600 p-6 max-w-[80%] rounded-lg bg-opacity-50'>
        <span className='break-words whitespace-pre'>{error.stack}</span>
      </div>
      <button
        className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
