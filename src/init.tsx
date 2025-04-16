import { StrictMode } from 'react';
import i18next from 'i18next';
import App from './App.tsx';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      // Ваши переводы
      key: 'значение',
    },
  },
  // Другие языки...
};

const init = async (): Promise<React.ReactNode> => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export default init;