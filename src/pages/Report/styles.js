import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Header = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 30px;
`;
export const Title = styled.h1`
  color: ${props => props.theme.primary};
  margin-bottom: 10px;
`;
export const Instructions = styled.p`
  color: ${props => props.theme.gray};
  font-size: 1.1em;
  margin: 5px 0;
`;
export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 20px;
`;
export const ContainerChart = styled.div`
  width: 100%;
  height: 450px;
`
export const EmptyMessageWrapper = styled.div`
  background: ${props => props.theme.grayLight};
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EmptyMessage = styled.p`
  color: ${props => props.theme.gray};
  font-size: 1.3em;
`
