import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Text from './Text.component';
import Page from '../Page/Page.component';

storiesOf('Text', module)
	.addDecorator((getStory) => <Page >{getStory()}</Page>)
	.add('default', () => (
		<React.Fragment>
			<Text>default text</Text>
		</React.Fragment>
	))
	.add('size prop', () => (
		<React.Fragment>
			<Text size={Text.Sizes.xlarge}>size xlarge</Text>
			<Text size={Text.Sizes.large}>size large</Text>
			<Text size={Text.Sizes.medium}>size medium</Text>
			<Text size={Text.Sizes.small}>size small</Text>
			<Text size={Text.Sizes.xsmall}>size xsmall</Text>
		</React.Fragment>
	))
	.add('padding prop', () => (
		<React.Fragment>
			<Text size="xlarge">
				size xlarge
			</Text>
			<Text size="large">
				size large
			</Text>
			<Text size="medium">size medium</Text>
			<Text size="small">size small</Text>
			<Text size="xsmall">size xsmall</Text>
		</React.Fragment>
	))
	.add('muted prop', () => (
		<React.Fragment>
			<Text muted>muted true</Text>
		</React.Fragment>
	));
