import '../styles/index.css';
import Link from 'next/link';

export default function App(){
  return (
      <div>
          <h1>Home</h1>
          <Link href="/page2">Page2</Link>
      </div>
  );
}