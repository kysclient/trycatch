import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import {Global, css} from "@emotion/react";
import {createContext} from "react";
import {CustomThemeProvider} from "../styles/CustomThemeProvider";


function App({Component, pageProps}: AppProps) {

    return (
        <RecoilRoot>
            <CustomThemeProvider>
                <Component {...pageProps} />
            </CustomThemeProvider>

        </RecoilRoot>
    )
}

export default App
