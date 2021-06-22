import { createStore } from "redux";

// Importando enums
import { Themes } from "../enums/themes.enum";
import ThemeStore from "../interfaces/theme-store.interface";

const themeStore: ThemeStore = { value: null };

function toggleTheme(theme: ThemeStore, action: any) {
    console.log(action.type);
    if (action.type === Themes.fxDev || action.type !== Themes.original) {
        themeStore.value = Themes.fxDev;
    } else {
        themeStore.value = Themes.original;
    }
    console.log(themeStore);
    return themeStore;
}

const store = createStore(toggleTheme);

export default store;