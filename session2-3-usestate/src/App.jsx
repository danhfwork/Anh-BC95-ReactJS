import { use, useState } from "react";
import BTCar from "./BTCar/BTCar";
import DemoProps from "./DemoProps/DemoProps";

function App() {
  // Tham số 1 là state: nơi chứa giá trị của biến
  // Tham số 2 là hàm setState: hàm để thay đổi giá trị của state => render lại UI
  // Giá trị truyền vào khi gọi hook userState được gọi là initial state: giá trị khởi tạo của state
  // Nếu ko có initial state => state sẽ có giá trị là undefine
  // initial state có thể là bất kỳ kiểu dữ liệu nào: string, number, boolean, array, object, function
  // Trong 1 component có thể tạo nhiều cái state khách nhau
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);
  const [name, setName] = useState("");
  const [demo, setDemo] = useState(() => {
    console.log("Hàm khởi tạo state demo được gọi");
    // Hàm chỉ thực thi 1 lần duy nhất ở lần render đầu tiên của component
    // logic xủ lý
    return 10; // giá trị trả về sẽ là giá trị khởi tạo của state demo
  });
  // binding data
  // C1: define Function riêng để thay đổi state
  const handleIncrease = () => {
    // setNumber(number + 1);
    // setLike(like + 1);
    // muốn render lại UI thì phải gọi hàm setState để thay đổi giá trị của state
    // setLike(like + 1)

    // setNumber(number + 1) // 0
    // setNumber(number + 1) // 0
    // setNumber(number + 1) // 0

    setNumber((prev) => prev + 1); // 0 + 1 = 1
    setNumber((prev) => prev + 1); // 1 + 1 = 2
    setNumber((prev) => prev + 1); // 2 + 1 = 3
  };
  return (
    <>
      {/* {Nơi chứa con số: state} */}
      <h1 className="text-4xl font-bold mb-10">{number}</h1>
      {/* button + - */}
      <div className="flex gap-3">
        <button
          onClick={handleIncrease}
          className="bg-blue-300 hover:bg-blue-500 rounded px-3 py-2 text-white"
        >
          +
        </button>
        <button
          onClick={() => setNumber(number - 1)}
          className="bg-red-300 hover:bg-red-500 rounded px-3 py-2 text-white"
        >
          -
        </button>
        <button
          onClick={() => setNumber(0)}
          className="bg-green-400 hover:bg-green-600 rounded px-3 py-2"
        >
          Reset
        </button>
      </div>
      <BTCar />
      <DemoProps text = "Hello World" number = {10} />
      <DemoProps text = "ABC" number = {10} />
      <DemoProps text = "XYZ" number = {10} />
    </>
  );
}

export default App;
