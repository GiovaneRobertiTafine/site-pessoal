import { createStore } from "redux";

// Importando enums
import { Themes } from "../enums/themes.enum";
import ThemeStore from "../interfaces/theme-store.interface";

const themeStore: ThemeStore = { value: 0 };

function toggleTheme(theme: ThemeStore, action: any) {
    console.log(theme);
    switch (action.type) {
        case Themes.fxDev:
            themeStore.value = Themes.fxDev;
            break;
        case Themes.original:
            themeStore.value = Themes.original;
            break;
        default:
            break;
    }
    return themeStore;
}

const store = createStore(toggleTheme);

export default store;