import { BiSend } from "react-icons/bi";
import { languages } from "./data/language";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/Header";
import Source from "./components/source/Source";
import Target from "./components/target/Target";
import { sourceValue, targetValue, textValue } from "./redux/slice/translate";
import { useEffect, useState } from "react";
const App = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState();
  const {
    source: sourceValues,
    target: targetValues,
    text: textValues,
  } = useSelector((state) => state.translate);

  const selectOption = languages?.map((item) => ({
    value: item.language,
    label: item.name,
  }));

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://google-translator9.p.rapidapi.com/v2",
          {
            method: "POST",
            headers: {
              "x-rapidapi-key":
                "75cf7c8231mshf19a5aafcaa6d72p14e4adjsn215ca0739fa4",
              "x-rapidapi-host": "google-translator9.p.rapidapi.com",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              q: textValues,
              source: sourceValues,
              target: targetValues,
            }),
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (check) {
      loadData();
      setCheck(false);
    }
  }, [check]);
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <div className="max-w-[1240px] mx-auto p-4 bg-[#22333b] mt-[70px] rounded-lg min-h-[300px]">
          <div className="flex items-start gap-5">
            <div className="w-full">
              <Source
                dispatch={dispatch}
                sourceValue={sourceValue}
                textValue={textValue}
                selectOption={selectOption}
              />
            </div>
            <div className="w-full">
              <Target
                dispatch={dispatch}
                selectOption={selectOption}
                targetValue={targetValue}
                textValues={data}
              />
            </div>
          </div>
          <div className="flex items-center mt-[30px] justify-center">
            <button
              onClick={() => setCheck(true)}
              className="flex py-2 px-8 bg-[#124559] text-white rounded-lg items-center gap-2 "
            >
              Send <BiSend size={20} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
