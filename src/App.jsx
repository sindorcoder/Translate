import { languages } from "./data/language"
import { useDispatch, useSelector } from "react-redux"
import Header from "./components/header/Header"
import Source from "./components/source/Source"
import Target from "./components/target/Target"
const App = () => {
  const dispatch = useDispatch()
  const { sourceValue, targetValue, textValue } = useSelector((state) => state.translate)

  const selectOption = languages?.map((item) => ({
    value: item.language,
    label: item.name
  }))


  return (
    <>
      <nav>
        <Header/>
      </nav>
      <main>
        <div className="max-w-[1240px] mx-auto p-4 bg-[#22333b] mt-[70px] rounded-lg h-[500px]">
          <div className="flex items-start gap-5">
            <div className="w-full">
              <Source dispatch={dispatch} sourceValue={sourceValue} textValue={textValue} selectOption={selectOption} />
            </div>
            <div className="w-full">
              <Target dispatch={dispatch} sourceValue={sourceValue} textValue={textValue} selectOption={selectOption} targetValue={targetValue}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App