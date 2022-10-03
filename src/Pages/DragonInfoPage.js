import { useGetDragonsById } from 'hooks/useGetCurrentDragon';
import { Carusel } from 'components/Carusel/Carusel';
import { DragonInfo } from 'components/DragonInfo/DragonInfo';
import { ModalTitle } from 'components/ModelTitle/ModalTitle';

const DragonInfoPage = () => {
  const dragon = useGetDragonsById();

  return (
    <div className="wrapper">
      {dragon && (
        <>
          <ModalTitle dragon={dragon} />
          <div className="dragon-info">
            <Carusel dragon={dragon} />
            <DragonInfo dragon={dragon} />
          </div>
        </>
      )}
    </div>
  );
};

export default DragonInfoPage;
