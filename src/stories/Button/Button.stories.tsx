import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button.component';

storiesOf('Button', module)
	.addDecorator((getStory) => <div >{getStory()}</div>)
	.add('sizes', () => (
		<React.Fragment>
      <Button size={Button.Sizes.small}>Small Button</Button><br/><br/>
      <Button size={Button.Sizes.medium}>Medium Button</Button><br/><br/>
      <Button size={Button.Sizes.large}>Large Button</Button><br/><br/>
		</React.Fragment>
	))
