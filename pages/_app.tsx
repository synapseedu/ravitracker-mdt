// pages/_app.tsx
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

const theme = {
  token: {
    colorBgLayout: '#f5f5f5',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

