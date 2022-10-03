import {
  Card,
  Wrapper,
  Model,
  DisableLike,
  ActiveLike,
  HideInput,
  Like,
  Container,
} from './ItemCard.styled';
import { NavLink } from './ItemCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelector';
import { getDatabase, ref, set } from 'firebase/database';
import { setFavorites } from 'redux/sliceAuth';

export const ItemCard = ({ flickr_images, name, id }) => {
  const isLoggerIn = useSelector(authSelectors.getloggedIn);
  const uid = useSelector(authSelectors.getId);
  const favorites = useSelector(authSelectors.getFavorites);
  const dispatch = useDispatch();
  const isChoosen = favorites.flatMap(item => item.id).includes(id);

  const favoritesCardsId = id => {
    const db = getDatabase();
    const postListIdRef = ref(db, `favorites/users/` + uid);

    if (isChoosen) {
      const deleteFavorites = favorites.filter(item => item.id !== id);
      dispatch(setFavorites(deleteFavorites));
      set(postListIdRef, deleteFavorites);
    } else {
      const addFavorites = favorites.map(item => item);
      addFavorites.push({ id: id });
      dispatch(setFavorites(addFavorites));
      set(postListIdRef, addFavorites);
    }
  };

  return (
    <Container>
      <NavLink to={`info/${id}`}>
        <Wrapper>
          <Card src={flickr_images[0]} alt={name} />
          <Model>{name}</Model>
        </Wrapper>
      </NavLink>
      <Like>
        {isLoggerIn && (
          <HideInput type="checkbox" onClick={() => favoritesCardsId(id)} />
        )}

        {isChoosen ? <ActiveLike /> : <DisableLike />}
      </Like>
    </Container>
  );
};
