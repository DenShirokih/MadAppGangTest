import { useEffect, useState } from 'react';
import { allDetailsDragon } from 'services/fetchAPI';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { useDispatch } from 'react-redux';
import { setDragons } from 'redux/sliceAuth';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelector';
import { Welcome } from 'components/Welcome/Welcome';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from 'redux/sliceAuth';
import { useGetFavoritesItems } from 'hooks/useGetFavoritesItems';

const HomePage = () => {
  const dispatch = useDispatch();
  const [allDragons, setAllDragons] = useState('');
  const dragons = useSelector(authSelectors.getDragons);

  useGetFavoritesItems();

  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      dispatch(
        setUser({
          user: { name: user.name, email: user.email },
          id: uid,
        })
      );
    } else {
    }
  });

  useEffect(() => {
    !dragons.length
      ? allDetailsDragon()
          .then(resp => {
            setAllDragons(resp);
            dispatch(setDragons(resp));
          })
          .catch(error => console.log(error))
      : setAllDragons(dragons);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <Welcome />
      <div className="content">
        {allDragons &&
          allDragons.map(({ flickr_images, name, first_flight, id }) => {
            return (
              <ItemCard
                key={id}
                id={id}
                flickr_images={flickr_images}
                name={name}
                first_flight={first_flight}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
