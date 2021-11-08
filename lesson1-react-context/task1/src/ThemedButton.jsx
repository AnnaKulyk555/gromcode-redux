import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButon extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
        className="btn"
      />
    );
  }
}

ThemedButon.contextType = ThemeContext;

export default ThemedButon;
