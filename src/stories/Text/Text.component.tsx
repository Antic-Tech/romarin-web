import * as React from 'react';
import styled from 'styled-components';

import ThemeProvider from '../../theme';

enum Sizes {
	xlarge = 'XLarge',
	large = 'Large',
	medium = 'Medium',
	small = 'Small',
	xsmall = 'XSmall'
}
interface Props {
	muted?: boolean;
	size?: string;
	children: any;
}

class RomarinText extends React.Component<Props> {
	static Sizes = Sizes;

	render() {
		const Text = styled.p`
			font-family: ${ThemeProvider.theme.textFontFamily};
			color: ${(props: Props) => ThemeProvider.theme[props.muted ? `textColorMuted` : 'textColor']};
			font-size: ${(props: Props) => ThemeProvider.theme[`textFontSize${props.size}`]}px;
		`;

		return <Text {...this.props}>{this.props.children}</Text>;
	}
}

export default RomarinText;

RomarinText.Sizes.large;
