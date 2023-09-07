import {FaPizzaSlice,FaHamburger} from "react-icons/fa";
import { GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components"
import { NavLink } from "react-router-dom";


function Category(){


    return (
        <List>
            <SLink to={'cuisine/Italian'}>
                <FaPizzaSlice></FaPizzaSlice>
                <h4>Italian</h4>
            </SLink>
            <SLink to={'cuisine/American'}>
                <FaHamburger></FaHamburger>
                <h4>American</h4>
            </SLink>
            <SLink to={'cuisine/Thai'}>
                <GiNoodles></GiNoodles>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'cuisine/Japanese'}>
                <GiChopsticks></GiChopsticks>
                <h4>Japanese</h4>
            </SLink>
        </List>
    );

}

const List = styled.div `
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`

const SLink= styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);
    height: 6rem;
    width: 6rem;

    h4{
        color: white;
        font-size: 0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h4{
            color: white;

        }
    }

`;

export default Category