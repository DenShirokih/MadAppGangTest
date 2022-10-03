import { useState } from 'react';
import {
  Title,
  FirstFlight,
  Modal,
  Description,
  Date,
  FirstFlightTitle,
  Button,
} from './ModalTitle.styled';
import { useMediaQuery } from 'hooks/useMediaQoery';

export const ModalTitle = ({ dragon }) => {
  let isPageWide = useMediaQuery('(min-width: 769px)');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Title>
        Model: <Modal> {dragon.data.name}</Modal>
      </Title>
      <FirstFlight>
        <FirstFlightTitle>First flight:</FirstFlightTitle>
        <Date>{dragon.data.first_flight}</Date>
      </FirstFlight>
      {!isPageWide ? (
        toggle ? (
          <>
            <Description>{dragon.data.description}</Description>
            <Button onClick={() => setToggle(prev => !prev)}>Hide info</Button>
          </>
        ) : (
          <Button onClick={() => setToggle(prev => !prev)}>Show info</Button>
        )
      ) : (
        <Description>{dragon.data.description}</Description>
      )}
    </>
  );
};
