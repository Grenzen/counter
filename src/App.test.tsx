import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'


test('renders learn react link', () => {
    render(<App startMinValue={ 0 } startMaxValue={ 5 }/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
