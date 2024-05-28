import Theme, { ThemeContextProvider } from "./components/Styles/Theme.tsx";
import App from "./App.tsx";

export const AppProviders = () => {
    return (
        <ThemeContextProvider>
            <Theme>
                <App/>
            </Theme>
        </ThemeContextProvider>

    );
};
export default AppProviders;