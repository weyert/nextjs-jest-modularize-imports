import StartPage from '@/pages/index'
import { render } from '@testing-library/react'
import * as React from 'react'


describe('<AppOpenCallbackPage />', () => {

  test('handles network errors', async () => {
    render(<StartPage name="Hello World" />, {
    })
  })
})
