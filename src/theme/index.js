import textTheme from '../stories/Text/Text.theme';
import pageTheme from '../stories/Page/Page.theme';
import buttonTheme from '../stories/Button/Button.theme';
import coreTheme from './core.theme.js';

const getBaseTheme = (coreTheme) => ({
	...coreTheme,
	...pageTheme(coreTheme),
	...textTheme(coreTheme),
	...buttonTheme(coreTheme),
});

class ThemeProvider {
	localTheme = getBaseTheme(coreTheme);

	setTheme(newTheme) {
		const updatedCore = {
			...coreTheme,
			...newTheme
		};

		this.localTheme = {
			...getBaseTheme(updatedCore),
			...newTheme
		};
	}

	resetTheme() {
		this.localTheme = getBaseTheme(coreTheme);
	}

	get theme() {
		return this.localTheme;
	}
}
export default new ThemeProvider();
