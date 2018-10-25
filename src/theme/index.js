
import textTheme from '../stories/Text/Text.theme';
import coreTheme from './core.theme.js';

const getBaseTheme = (coreTheme) => ({
	...coreTheme,

	...textTheme(coreTheme),
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