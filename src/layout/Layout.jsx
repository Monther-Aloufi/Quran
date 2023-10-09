import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/tailwind.css';
import { Outlet } from 'react-router-dom';

export function LayoutHeader({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export function LayoutFooter({ children }) {
  return (
    <>
      <main className=" min-h-full">{children}</main>
      <Footer className="footer" />
    </>
  );
}

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className=" min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
