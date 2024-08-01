import { useEffect, useState } from "react";
import "./App.css";
import { Select, Input, Layout, Typography, Button } from "antd";
import { sourceValue, targetValue, textValue } from "./redux/slice/translate";
import { useDispatch, useSelector } from "react-redux";

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
              "x-rapidapi-key": "216aaa2687msh91ec62caa74c1a8p1888b2jsnd4414ee7bbf9",
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

  return (
    <Layout className="min-h-screen">
      <Header className="bg-slate-500">
        <Title level={2} className="text-[slate] text-center py-4">
          Language Translator
        </Title>
      </Header>
      <Content className="flex mt-[70px] flex-col gap-20 items-center p-12">
       <div className="flex gap-10">
       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">

          <div className="flex gap-4 mb-5 items-center justify-between">
            <Select
              showSearch
              className="w-full"
              defaultValue={"en"}
              placeholder="Select source language"
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                { value: "en", label: "English" },
                { value: "ru", label: "Russian" },
                { value: "uz", label: "Uzbek" },
              ]}
              onChange={(e) => dispatch(sourceValue(e))}
            />
            <Select
              showSearch
              defaultValue={"uz"}
              className="w-full"
              placeholder="Select target language"
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
              options={[
                { value: "en", label: "English" },
                { value: "ru", label: "Russian" },
                { value: "uz", label: "Uzbek" },
              ]}
              onChange={(e) => dispatch(targetValue(e))}
            />
          </div>
          <TextArea
            rows={6}
            onPressEnter={(e) => dispatch(textValue(e.target.value))}
            style={{resize: "none"}}
          />
        </div>
        <div className=" w-[700px] p-[20px] bg-white rounded-lg">
          <h1 className="text-2xl font-bold">{data?.translations[0]?.translatedText}</h1>
        </div>
       </div>
       <Button onClick={() => window.location.reload()} type="primary" size="large">Reload Page</Button>
      </Content>
    </Layout>
  );
}

export default App;
