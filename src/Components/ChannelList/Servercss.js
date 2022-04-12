import styled from 'styled-components';
import { Add } from '@styled-icons/material';
import { ExpandMore } from '@styled-icons/material';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);
`;

export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    

    > span{
        margin-left: -70px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;
export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;
`;

export const CategorySpeaker = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    margin-top: 10px;

    > span{
        margin-left: -84px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const ExpandIcon = styled(ExpandMore)`

    cursor: pointer;
    width: 21px;
    height: 21px;

    color: var(--symbol);
`;