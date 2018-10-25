import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Text from './Text.component';

storiesOf('Text', module)
	.addDecorator((getStory) => <div >{getStory()}</div>)
	.add('default', () => (
		<React.Fragment>
			<Text>default text</Text>
		</React.Fragment>
	))
	.add('size prop', () => (
		<React.Fragment>
			<Text size="xlarge">size xlarge</Text>
			<Text size="large">size large</Text>
			<Text size="medium">size medium</Text>
			<Text size="small">size small</Text>
			<Text size="xsmall">size xsmall</Text>
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
