import { redirect } from 'next/navigation';

const Homepage = () => {
  return redirect('/dashboard');
};

export default Homepage;
