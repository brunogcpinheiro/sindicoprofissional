import styled from "styled-components";
import { accent } from '../../utils/colors';

export const Container = styled.div`
	padding-top: 100px;
	background: #fff;
`;

export const AboutUsWrapper = styled.div`
    h2 {
		text-transform: uppercase;
		margin: 70px 0 40px 0;
		font-size: 2rem;
		line-height: 60px;

		&:before {
			content: "";
			display: block;
			width: 50px;
			padding-top: -20px;
			border-top: 3px solid ${accent};
			margin-bottom: 20px;
		}
	}
	
	p {
	    font-size: 1.2rem;
	}
`;

export const Profile = styled.div`
    display: flex;
`;

export const ProfileImage = styled.div`
    
`;

export const ProfileData = styled.div`
    padding: 0 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;