import React from 'react';
import { addDecorator } from '@storybook/react';

const styles = {
  fontFamily: "sans-serif",
  fontSize: "14px",
  fontWeight: "400"
}

addDecorator(storyFn => <div style={styles}>{storyFn()}</div>);