import { Select, Input } from "antd";
const { TextArea } = Input;
const Target = ({ selectOption, dispatch, targetValue, textValues }) => {
  return (
    <section className="w-full">
      <div className="w-full  bg-[#124559] rounded-md p-4">
        <div className="flex flex-col gap-6">
          <Select
            showSearch
            style={{ width: 140 }}
            placeholder="Select language"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={selectOption}
            onChange={(e) => dispatch(targetValue(e))}
          />
          <TextArea
            rows={6}
            value={textValues && textValues.data.translations[0].translatedText}
          />
        </div>
      </div>
    </section>
  );
};
export default Target;
