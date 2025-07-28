const { default: styled } = require('styled-components');

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #e0e7ff;
  font-size: 1rem;
  color: #334155;
  gap: 18px;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const ContactName = styled.span`
  font-weight: 600;
`;

export const ContactNumber = styled.span`
  color: #64748b;
  font-size: 0.97rem;
`;

export const Button = styled.button`
  padding: 10px 0;
  background: linear-gradient(90deg, #6366f1 0%, #38bdf8 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #818cf8 0%, #0ea5e9 100%);
  }
`;

export const DeleteButton = styled(Button)`
  padding: 6px 16px;
  font-size: 0.95rem;
  background: #f87171;
  background: linear-gradient(90deg, #f87171 0%, #fbbf24 100%);
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #ef4444 0%, #f59e42 100%);
  }
`;
