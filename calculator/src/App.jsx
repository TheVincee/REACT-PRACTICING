import './App.css'

function App() {
  return (
    <>
      <form action="">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="input-container">
                <input type="text" className="input input-1" placeholder="First number" />
                <input type="text" className="input input-2" placeholder="Second number" />
                <input type="text" className="input input-result" placeholder="Result" disabled />
              </div>
              <div className="button-container">
                <button style={{ '--clr': '#39FF14' }}>
                  <span>+</span><i></i>
                </button>
                <button style={{ '--clr': '#FF44CC' }}>
                  <span>-</span><i></i>
                </button>
                <button style={{ '--clr': '#0FF0FC' }}>
                  <span>*</span><i></i>
                </button>
                <button style={{ '--clr': '#8A2BE2' }}>
                  <span>/</span><i></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
