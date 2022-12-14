import styled from '@emotion/styled'

export const FilterBox = styled.div`
    position:absolute;
    top: 80px;
    right: 0px;
    outline: 2px solid green;
    height:280px;

    background-color: gold;
    display:flex;
    flex-direction: column;
    border-radius: 4px;
    max-width: 45%;
`
export const FormLabel = styled.label `
    text-align: center;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 700px;
    color: red;
`
export const FormInput = styled.input`
    background-color: blue;
    max-width: 85%;
    margin-left: 40px;
    margin-top: 20px;
    height: 100px;
    border-radius: 10px;
    font-size: 40px;
    font-style: italic;
    color:white;
    padding-left: 30px;
     &:hover,
    &focus {
        scale:1.1;
        margin-top: 30px;
        margin-right: 15px;
        /* margin-left: 20px; */
    }
`