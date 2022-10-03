import styled from 'styled-components';
import { ReactComponent as Logo } from 'icons/log-out.svg';

export const LogOutIcon = styled(Logo)`
  fill: #ffffff;
`;

export const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
  cursor: pointer;
`;
