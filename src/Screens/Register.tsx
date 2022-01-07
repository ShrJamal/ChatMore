import React from "react"
import styled from "styled-components"
import AppTitle from "../Components/Auth/AppTitle"
import { Main } from "../Theme/global"
import Logo from "../assets/Logo.png"
import AuthForm from "../Components/Auth/AuthForm"
import LinkToForm from "../Components/Auth/LinkToForm"

const Register: React.FC = () => {
	return (
		<Main initial={{ translateX: "-100%" }} animate={{ translateX: 0 }} exit={{ translateX: "100%" }} transition={{ duration: 0.5 }}>
			<Container>
				<AppTitle />
				<ImageContainer>
					<img src={Logo} alt="ChatMore Logo" />
				</ImageContainer>
				<AuthForm registerMode />
				<Separator />
				<LinkToForm content="You already have an account ? " href="/login" linkTo="Sign In" />
			</Container>
		</Main>
	)
}

const Container = styled.div`
	height: 100%;
	width: 450px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	background-color: ${({ theme }) => theme.headerMenuColor};
	justify-content: center;
	border-radius: 1rem;
	width: 200px;
	height: 200px;
`

const Separator = styled.div`
	height: 2px;
	display: inline-block;
	background-color: ${({ theme }) => theme.secondaryColor};
	width: 100%;
	margin: 2rem 0;
`

export default Register
