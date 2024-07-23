import Image from 'next/image';
import StatusLable, { Status } from './components/status-lable';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLable status={Status.Active}>Active</StatusLable>
      <StatusLable status={Status.NotActive}>Not Active</StatusLable>
      <StatusLable status={Status.Pending}>Pending</StatusLable>
      <StatusLable status={Status.Suspended}>Suspended</StatusLable>
    </main>
  );
}
