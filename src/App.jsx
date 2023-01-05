// CSS
import './styles/overrides.css'
import './styles/global.css'

// Component
import StyledComponent from './componets/StyledComponent/StyledComponent'
import StyledInnline from './componets/InlineStyling'

function App() {
  return (
    <div className='App'>
      <Header
        title="This is the Title"
        subTitle="this is another prop"
      />

      <Main>
        <p className='wrapper' >some text here</p>
        <p>some text here</p>

        <StyledComponent />
        <StyledInnline />
      </Main>

      <footer className='bg-blue-400 p-10'>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

function Header(props) {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </header>
  )
}

function Main(props) {
  return (
    <main className='main'>
      <h1>Main</h1>
      {props.children}
    </main>
  )
}

export default App
