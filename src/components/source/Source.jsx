import { Select, Input } from "antd";
import { useEffect } from "react";
const { TextArea } = Input;
const Source = ({
  selectOption,
  dispatch,
  sourceValue,
  textValue,
  sourceText,
}) => {
  useEffect(() => {
    dispatch(sourceValue(sourceText));
  }, [sourceText]);
  return (
    <section className="w-full">
      <div className="w-full  bg-[#124559] rounded-md p-4">
        <div className="flex flex-col gap-6">
          <Select
            showSearch
            style={{ width: 140 }}
            value={sourceText}
            placeholder="Select language"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={selectOption}
            onChange={(e) => dispatch(sourceValue(e))}
          />
          <TextArea
            onChange={(e) => dispatch(textValue(e.target.value))}
            rows={6}
          />
        </div>
      </div>
    </section>
  );
};

export default Source;
