import React from 'react';
import ThemedButon from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    const newTheme = this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButon onClick={this.toggleTheme}>Dynamic Theme</ThemedButon>
        </ThemeContext.Provider>
        <ThemedButon onClick={this.toggleTheme}>Default Theme</ThemedButon>
      </div>
    );
  }
}

export default App;
