import React from 'react'
import { render } from 'react-dom'
import MDX from '@entry-mdx'

const wrapperStyle = { padding: '10px 20px' }
render(
  <div style={wrapperStyle}>
    <MDX mode="local-dev" />
  </div>,
  document.querySelector('.app')
)