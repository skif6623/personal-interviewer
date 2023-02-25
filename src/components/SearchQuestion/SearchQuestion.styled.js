import styled from "@emotion/styled";

export const EInput = styled.input`
	display: block;
	width: 100%;
	height: 40px;
	padding: 0 20px;

	border: 2px solid red;
	border-radius: 10px;

	:focus {
		border: 2px solid green;

		outline: none;
	}
`;
