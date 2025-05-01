import React from "react";
import { StrictMode } from "react";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import en from "./locales/en";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import { apiGallery } from "./api/apiGallery";

const resources = { en } as const;

const init = async (): Promise<React.ReactNode> => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  const store = configureStore({
    reducer: {
      [apiGallery.reducerPath]: apiGallery.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiGallery.middleware),
  });

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <StrictMode>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </StrictMode>
      </Provider>
    </I18nextProvider>
  );
};

export default init;
