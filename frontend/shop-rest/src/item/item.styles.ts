import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    border-radius: 20px;
    height: 100%;

    >div:nth-child(3){
        flex:1 0 200px;
        text-align:center;
    }
    // button{
    //     border-radius: 0 0 20px 20px;
    //     background:red;
    // }
    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
    }

    div{
        font-family: Arial,Helvetica, sans-serif;
        padding: 1rem;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    height: 100%;
    position:relative;
    transition:all 1s;
    cursor:pointer;

    ::after{
        content:'SELECT';
        position:absolute;
        top:50%;left:50%;
        transform:translate(-50%,-50%);
        background:rgb(255,255,255,0.5);
        padding:20px;
        opacity:0.2;
        transition:all 0.2s;
    }
    :hover::after{
        opacity:1;
    }
    `;
