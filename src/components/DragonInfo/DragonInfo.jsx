import {
  TechnicalOverview,
  InfoItem,
  Unit,
  TechnicalMain,
  WikiLink,
  TechnicalTitle,
} from './DragonIngo.styled';

export const DragonInfo = ({ dragon }) => {
  return (
    <>
      <TechnicalOverview>
        <TechnicalTitle>General characteristics:</TechnicalTitle>
        <TechnicalMain>
          <InfoItem>
            Height <Unit>{dragon.data.height_w_trunk.meters} m</Unit>
          </InfoItem>
          <InfoItem>
            Launch payload mass
            <Unit>{dragon.data.launch_payload_mass.kg} kg</Unit>
          </InfoItem>
          <InfoItem>
            Launch payload vol
            <Unit>{dragon.data.launch_payload_vol.cubic_meters} m3</Unit>
          </InfoItem>
        </TechnicalMain>
        <TechnicalTitle>Heat shield:</TechnicalTitle>
        <InfoItem>
          Material: <Unit>{dragon.data.heat_shield.material}</Unit>
        </InfoItem>
        <InfoItem>
          Size: <Unit>{dragon.data.heat_shield.size_meters} m</Unit>
        </InfoItem>
        <InfoItem>
          Material: <Unit> {dragon.data.heat_shield.material}</Unit>
        </InfoItem>

        <WikiLink href={dragon.data.wikipedia}>Link to Wikipedia</WikiLink>
      </TechnicalOverview>
    </>
  );
};
