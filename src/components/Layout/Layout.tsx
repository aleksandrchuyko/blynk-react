import Sidebar from '../Sidebar/Sidebar';
import css from './Layout.module.css';
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className={css.container}>
    <Sidebar />
    {children}
  </div>
);

export default Layout;
