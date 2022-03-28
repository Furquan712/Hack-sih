import styled from 'styled-components';

export const Button = styled.button`
   background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
   white-space: nowrap;
   outline: none;
   border: none;
   min-width: 100px;
   max-width: 200px;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   gap: 10px;
   border-radius: 4px;
   padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
   color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
   font-size: ${({ big }) => (big ? '20px' : '14px')};
   cursor: pointer;

   &:hover {
      transform: translateY(-2px);
   }
   
`;
