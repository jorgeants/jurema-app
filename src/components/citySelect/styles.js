import styled from 'styled-components';

export const WrapperSelect = styled.div`
  width: 48%;
`;
export const SelectItemsLabel = styled.label`
  margin: 5px 0;
  color: ${props => props.theme.gray};
  font-size: 1.2em;
  display: block;
`;
export const SelectItems = styled.select`
  width: 100%;
  border-radius: 0px;
  border: 1px solid ${props => props.theme.gray};
  color: ${props => props.theme.gray};
  font-size: 1.2em;
`;

export const SelectItemsOption = styled.option`
  color: ${props => props.theme.gray};
  font-size: 1.2em;
`;
