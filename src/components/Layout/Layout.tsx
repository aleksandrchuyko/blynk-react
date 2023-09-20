import Sidebar from '../Sidebar/Sidebar';
import css from './Layout.module.css';
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <main className={css.container}>
    <Sidebar />
    {children}
  </main>
);

export default Layout;
