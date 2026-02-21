import React from 'react'
import FitnessTracker from './FitnessTracker.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '20px', marginBottom: '8px' }}>App error</h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#b91c1c' }}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <FitnessTracker />
    </ErrorBoundary>
  )
}

export default App