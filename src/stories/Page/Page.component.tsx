// import Icon from '@components/Icon/Icon.component';
import * as React from 'react';
import styled from 'styled-components';

import ThemeProvider from '../../theme';


interface Props {

}

export default class Page extends React.Component<Props> {
	render() {
		const StyledDiv = styled.div`
		background-color: ${ThemeProvider.theme.pageBackgroundColor};
		padding: ${ThemeProvider.theme.pagePadding}px;
	`;

		return (
			<StyledDiv
				{...this.props}
			>
				{this.props.children}
			</StyledDiv>
		);
	}
}
