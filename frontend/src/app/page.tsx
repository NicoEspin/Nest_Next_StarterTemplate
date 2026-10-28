import Link from 'next/link';
export default function Page() {
  return (
    <main className='mx-auto flex min-h-svh max-w-xl flex-col justify-center gap-4 p-6'>
      <h1 className='text-2xl font-semibold'>Nest + Next · Full Stack Starter</h1>
      <p>Base para sistemas full stack con autenticación, permisos y conexión a PostgreSQL.</p>
      <Link className='underline' href='/auth/sign-in'>
        Ingresar al entorno de pruebas
      </Link>
      <Link className='underline' href='/api/health'>
        Verificar conexión con el backend
      </Link>
    </main>
  );
}
