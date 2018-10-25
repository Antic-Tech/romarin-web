import * as React from 'react';
import styled from 'styled-components'

import ThemeProvider from '../../theme';


const Text = styled.p`
font-family: ${ThemeProvider.theme.textFontFamily};
color: ${(props:Props)=>props.muted? `blue`: 'black'}
`
console.log(ThemeProvider.theme);

interface Props {
    muted?: boolean;
    size?: string;
    children: any;
}
const RomarinText = (props:Props) => {
	return (
		<Text {...props}>
			{props.children}
		</Text>
	);
};


export default RomarinText;
