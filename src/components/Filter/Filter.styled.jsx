import styled from 'styled-components';

export const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 260px;
  padding: 10px 14px;
  font-size: 1rem;
  border: 1.5px solid #a5b4fc;
  border-radius: 8px;
  background: #fff;
  color: #334155;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px #c7d2fe;
  }
`;
