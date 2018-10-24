import * as React from 'react';

import { storiesOf } from '@storybook/react';



// storiesOf('Welcome', module).add('to Storybook', () => <p showApp={linkTo('Button')} />);

storiesOf('Button', module)
  
  .add('with some emoji', () => (
    // <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    // </Button>
  ));
