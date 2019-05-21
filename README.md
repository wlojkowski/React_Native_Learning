# React Native

### Instalacja i konfiguracja

1. [Instalacja Java SDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. [Instalacja Node](https://nodejs.org/en/) 
3. [Instalacja Python 2](https://www.python.org/downloads/release/python-2716/)
4. [Instalacja Android Studio](https://developer.android.com/studio/?gclid=Cj0KCQjwt_nmBRD0ARIsAJYs6o26TEzEUqe5qYj4Bdg1GZ7rPBYtSnjYf40s44i0Cw9S84zK-pHIVtAaAuWWEALw_wcB)
5. Instalacja React-Native-CLI poprzez Node'a. W cmd wpisujemy: `npm install -g react-native-cli`
6. Instalacja wybranego Android SDK poprzez Android Studio
7. Stworzenie emulatora przez Android Studio
8. Dodanie zmiennej środowiskowej użytkownika o nazwie JAVA_HOME i wskazanie w niej folderu do Java SDK.
9. Dodanie ścieżki do zmiennej Path - `C:\Users\<Nazwa_użytkownika>\AppData\Local\Android\sdk\platform-tools`
10. Stworzenie projektu poprzez `react-native init <nazwa_projektu>`
11. Otworzenie projektu w Android studio i włączenie emulatora
12. Włączenie projektu na emulatorze - `react-native run-android`

### Przydatne narzędzia

1. ESLint - linter dla JavaScript'u. Rozpoznaje i wyświetla błędy. 
⋅⋅* Instalacja poprzez `npm install -g eslint`
⋅⋅* Dodanie wtyczki ESLint do wybranego edytora
⋅⋅* Instalacja ruleset do projektu `npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-plugin-react-native`
⋅⋅* Stworzenie pliku .eslintrc i dodanie następującego kodu:
``` JSON 
{
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"],
    "plugins": ["react", "react-native"],
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "react-native/react-native": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "react-native/no-raw-text": 2
      }
  }
  ```
