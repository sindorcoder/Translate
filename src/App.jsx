import { FaHistory } from "react-icons/fa"; 
import { RiStarSFill } from "react-icons/ri"; 
import { useEffect, useState } from "react";
import "./App.css";
import { Select, Input, Layout, Typography, Button } from "antd";
import { sourceValue, targetValue, textValue } from "./redux/slice/translate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@mui/material";
import { languages } from "./data/language";

const { TextArea } = Input;
const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const dispatch = useDispatch();
  const [{ data }, setData] = useState("");
  const { source, target, text } = useSelector((state) => state.translate);


  useEffect(() => {

    const loadData = async () => {

      try {
        const response = await fetch(
          "https://google-translator9.p.rapidapi.com/v2",
          {
            method: "POST",
            headers: {
              "x-rapidapi-key": "75cf7c8231mshf19a5aafcaa6d72p14e4adjsn215ca0739fa4",
              "x-rapidapi-host": "google-translator9.p.rapidapi.com",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              q: text,
              source: source,
              target: target,
            }),
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (text && source && target) {
      loadData();
    }
  }, [text, source, target]);

  const selectOption = languages?.map((item) => ({
    value: item.language,
    label: item.name
  }))

  console.log(languages);


  return (
    <Layout>
      <Header className="bg-slate-500 flex items-center justify-between">
        <Link href={"/"}>
        <Title level={2} className="text-[slate] !font-bold text-center py-4">
          Translator
        </Title></Link>
        <div className="flex items-center gap-10">
          <span className="flex text-[26px] capitalize font-bold gap-2 items-center">
            <RiStarSFill size={30} />
          Saved
          </span>
          <span className="flex text-[26px] capitalize font-bold gap-2 items-center">
            <FaHistory size={30} />
            History
          </span>
        </div>
      </Header>
      <Content className="flex mt-[70px] flex-col gap-20 items-center p-12">
       <div className="flex gap-10">
       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

          <div className="flex gap-4 mb-5 items-center justify-between">
            <Select
              showSearch
              className="w-full"
              placeholder="Select source language"
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={selectOption}
              onChange={(e) => dispatch(sourceValue(e))}
            />
            <Select
              showSearch
              className="w-full"
              placeholder="Select target language"
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={selectOption}
              onChange={(e) => dispatch(targetValue(e))}
            />
          </div>
          <TextArea
            rows={6}
            onChange={(e) => dispatch(textValue(e.target.value))}
            style={{resize: "none"}}
          />
        </div>
        <div className="w-[700px] p-[20px] bg-white rounded-lg">
          <h1 className="text-2xl font-bold">{data?.translations[0]?.translatedText}</h1>
          <br />
          <br />
          <br />    
          <hr />
        </div>
       </div>
       <Button onClick={() => window.location.reload()} type="primary" size="large">Reload Page</Button>
      </Content>
    </Layout>
  );
}

export default App;
