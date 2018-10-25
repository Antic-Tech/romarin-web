import * as React from 'react';
import styled from 'styled-components';

// ${(props:Props)=>ThemeProvider.theme[`buttonPaddingVertical${props.size}`]}px ${(props:Props)=>ThemeProvider.theme[`buttonPaddingHorizontal${props.size}`]}px;

import ThemeProvider from '../../theme';

enum Sizes {
	large = "Large",
	medium = "Medium",
	small = "Small"
}
interface Props {
	size?: string;
	children: any;
  onClick?: any;
}

class Button extends React.Component<Props> {

	static Sizes = Sizes;

	render() {
    const StyledButton = styled.button`
    	font-family: ${ThemeProvider.theme.textFontFamily};
    	font-size: ${(props:Props)=>ThemeProvider.theme[`coreFontSize${props.size}`]}px;
      font-weight: bold;
    	color: ${ThemeProvider.theme.colorWhite};
      background-color: ${ThemeProvider.theme.colorPrimary};
      padding: 8px 16px;
      cursor: pointer;
      border: none !important;
      border-radius: ${ThemeProvider.theme.coreBorderRadius}px;
    `;

		return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
	}
}

export default Button;
