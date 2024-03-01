import styled from 'styled-components';

import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 25px;
  height: 25px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 11px;
  font-weight: bolder;
  bottom: 13px;
`;
