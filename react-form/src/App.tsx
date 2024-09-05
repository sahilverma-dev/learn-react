import BasicForm from "./components/forms/BasicForm";
import ReactHookForm from "./components/forms/ReactHookForm";
import ReactHookFormWithZod from "./components/forms/ReactHookFormWithZod";
import SimpleForm from "./components/forms/SimpleForm";
import TypeSafeForm from "./components/forms/TypeSafeForm";

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      {/* <SimpleForm /> */}
      {/* <BasicForm /> */}
      {/* <TypeSafeForm /> */}
      {/* <ReactHookForm /> */}
      <ReactHookFormWithZod />
    </div>
  );
};

export default App;
