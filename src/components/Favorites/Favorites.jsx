import { useGetFavoritesItems } from 'hooks/useGetFavoritesItems';
import { ItemCard } from 'components/ItemCard/ItemCard';
import { allDetailsDragon } from 'services/fetchAPI';
import { useState } from 'react';

export const FavoritesCards = () => {
  const { items } = useGetFavoritesItems();
  const ids = items.flatMap(item => item.id);
  const [dragons, setDragons] = useState('');

  allDetailsDragon()
    .then(res => setDragons(res))
    .catch(err => console.log(err));

  const findFavoritesCards = () => {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < dragons.length; j++) {
        if (ids[i] === dragons[j].id) {
          result.push(dragons[j]);
        }
      }
    }
    return result;
  };

  return (
    <div className="content">
      {items && (
        <>
          {findFavoritesCards().map(({ id, flickr_images, name }) => (
            <ItemCard
              key={id}
              id={id}
              name={name}
              flickr_images={flickr_images}
            />
          ))}
        </>
      )}
    </div>
  );
};
