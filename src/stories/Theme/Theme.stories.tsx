import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ThemeProvider from '../../theme';
import Text from '../Text/Text.component';
import Button from '../Button/Button.component';

import Page from '../Page/Page.component';

const firstAndFive = {
	colorPrimary: '#30bce0',
	textColor: '#22233a',
	coreBorderRadius: 3,
	inputBorderColor: '#aeaeae',
	inputBorderWidth: 2
};

const thinkShare = {
	colorRed: '#de5241',
	colorOrange: '#ea953e',
	colorYellow: '#f6e84f',
	colorGreen: '#97c360',
	colorTeal: '#4c98c9',
	colorBlue: '#4568ac',
	colorPurple: '#95559a',
	textFontFamily: 'Chalkduster',
	colorPrimary: '#4568ac',
	coreBorderRadius: 0
};

const routineBuilder = {
	colorPrimary: 'red',
	coreBorderRadius: 12,
	checkboxBorderRadius: 4
};

const weightUp = {
	colorPrimary: '#e4ca63',
	coreBorderRadius: 30,
	checkboxBorderRadius: 4,
	pageBackgroundColor: '#2c2e34',
	textColor: '#dedede',
	textColorMuted: '#A4A4A4',
	dividerColor: '#64666c',
	inputBorderWidth: 0,
	inputBackgroundColor: '#22242b',
	inputTextColor: '#dedede',
	inputLabelColor: '#dedede',
	inputPlaceholderColor: '#444444',
	buttonLabelWeight: 'bold'
};

storiesOf('Theme', module)
	.add('Update theme', () => <ButtonConatiner />);

class ButtonConatiner extends React.Component {
	constructor(props: any) {
		super(props);
		this.updateTheme = this.updateTheme.bind(this);
		this.resetTheme = this.resetTheme.bind(this);
	}

	updateTheme(theme: any) {
		ThemeProvider.setTheme(theme);
		this.forceUpdate();
	}

	resetTheme() {
		ThemeProvider.resetTheme();
		this.forceUpdate();
	}

	render() {
		return (
			<Page>
				<Text size={Text.Sizes.xlarge}>My Theme</Text>
				<Text muted>Pick One!</Text>
				<Button onClick={() => this.resetTheme()} >Romarin</Button>
				<div style={{ height: 16 }} />
				<Button onClick={() => this.updateTheme(thinkShare)}>ThinkShare</Button>
				<div style={{ height: 16 }} />
				<Button onClick={() => this.updateTheme(firstAndFive)}>1st&5</Button>
				<div style={{ height: 16 }} />
				<Button onClick={() => this.updateTheme(routineBuilder)}>Routine Builder</Button>
				<div style={{ height: 16 }} />
				<Button onClick={() => this.updateTheme(weightUp)}>Weight Up</Button>
			</Page>
		);
	}
}
