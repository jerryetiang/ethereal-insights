"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = async () => {
    const {data, status} = useSession()
    console.log(data, status)

    const router = useRouter()

    if(status === "loading") {
        return <div>Loading...</div>
    }

    if(status === "authenticated") {
        router.push("/dashboard")
    }

  const handleLogin = async () => {
    await signIn('github'); 
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default LoginPage;