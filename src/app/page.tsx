import { redirect } from 'next/navigation';

export default function page() {
  redirect('/campaigns');
  return null;
}
