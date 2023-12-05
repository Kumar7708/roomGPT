"use client";
import { useRoom } from "@/store/useStore";
import Select from "react-select";

function SelectInp() {
  const setRoom = useRoom((state:any) => state.setRoom)

  const options = [
    { value: "living room", label: "Living room" },
    { value: "bedroom", label: "Bedroom" },
    { value: "bathroom", label: "Bathroom" },
    { value: "kitchen", label: "Kitchen" },
  ]

  function handleChange(e: any) {
    setRoom(e.value)
  }

  return (
    <div className="w-full">
      <Select onChange={handleChange} options={options} defaultValue={options[0]} />
    </div>
  )
}

export default SelectInp
