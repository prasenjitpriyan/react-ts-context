import { useRef } from "react";
import Button from "./UI/Button";
import Form, { FormHandle } from "./UI/Form";
import Input from "./UI/Input";

const AddTimer = () => {
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form
      ref={form}
      onSave={handleSaveTimer}
      id="add-timer"
      className="flex flex-col justify-center items-center gap-3 mb-16"
    >
      <Input
        type="text"
        label="Name"
        id="name"
        className="placeholder-[#AAB7B6] text-sm border-2 focus:border-[#3F9AED] outline-none px-28 py-1 rounded-md bg-white"
      />
      <Input
        type="number"
        label="Duration"
        id="duration"
        className="placeholder-[#AAB7B6] text-sm border-2 focus:border-[#3F9AED] outline-none px-28 py-1 rounded-md bg-white"
      />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};

export default AddTimer;
