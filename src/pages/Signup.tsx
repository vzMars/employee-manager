import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import Error from '../components/Error';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, username, password);
  };

  return (
    <main className='font-lexreg text-table-100'>
      <section className='mx-auto max-w-6xl px-4 pt-16 md:pt-40'>
        <form
          className='mx-auto flex max-w-sm flex-col rounded-md border border-table-100 bg-gray-50 p-4 py-12'
          onSubmit={handleSubmit}
        >
          <h1 className='mb-6 font-lexbold text-4xl'>Sign Up</h1>
          <label className='mb-1'>Email</label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1'>Username</label>
          <input
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1'>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='mb-7 rounded-md border border-table-100 p-2'
          />
          <button
            disabled={isLoading}
            className='mb-6 w-full rounded-md bg-table-100 px-2.5 py-2 font-lexbold text-gray-50'
          >
            Sign Up
          </button>
          {error && <Error errorMessage={error} />}
        </form>
      </section>
    </main>
  );
};

export default Signup;
