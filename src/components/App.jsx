import HomeView from 'components/HomeView/HomeView';
import AddContact from 'components/AddUserView/AddUserView';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <AddContact />
      <Filter />
      <HomeView />
    </>
  );
};
