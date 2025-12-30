/**
 * @copyright 2025 johnadedayo
 * @license Apache-2.0
 */


// import { useEffect } from "react"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Stats from "./components/Stats"


const App = () => {
  return (
    <main className="flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl ">
      <Hero/>
      <Stats/>
      <Projects/>
    </main>
  )
}

export default App
