import * as React from 'react';
import styled from 'styled-components';

import ThemeProvider from '../../theme';

const Text = styled.p`
	font-family: ${ThemeProvider.theme.textFontFamily};
	color: ${(props: Props) => (props.muted ? `blue` : 'black')};
	font-size: ${(props:Props)=>ThemeProvider.theme[`textFontSize${props.size}`]}px;
`;
console.log(ThemeProvider.theme);


enum Sizes {
	xlarge = "XLarge",
	large = "Large",
	medium = "Medium",
	small = "Small",
	xsmall = "XSmall",

}
interface Props {
	muted?: boolean;
	size?: string;
	children: any;
}

class RomarinText extends React.Component<Props> {

	static Sizes = Sizes;

	render() {
		console.error(this.props.size)

		return <Text {...this.props}>{this.props.children}</Text>;
	}
}

export default RomarinText;

RomarinText.Sizes.large