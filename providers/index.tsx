'use client'

import { persistor, store } from '@redux/store'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export function Providers(props: any) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider attribute='class'>{props.children}</ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
