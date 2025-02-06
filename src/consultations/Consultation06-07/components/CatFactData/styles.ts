import styled from "@emotion/styled";

export const CatFactDataContainer = styled.ol`
width: 100%;
display: flex;
flex-direction: column;
gap: 15px;
border: 2px solid black;
border-radius: 4px;
padding: 20px;
`

export const FactItem = styled.li`
padding: 20px;
display: flex;
width: 100%;
`

export const FactItemControl = styled.div`
width: 100%;
display: flex;
gap: 10px;
justify-content: space-between;
align-items: center;
`

export const Fact = styled.p`
font-size: 18px;
font-weight: bold;
`

export const ButtonControl = styled.div`
width: 200px;
`