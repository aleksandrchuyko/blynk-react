import css from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={css.sidebar}>
      <aside>
        <h2>DAYRY APP</h2>
        <div>Comment whit no sense</div>
      </aside>
    </div>
  );
};

export default Sidebar;
