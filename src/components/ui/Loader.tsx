import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className='h-[calc(100vh-56px)] flex items-center justify-center'>
      <ScaleLoader color='#272E3F' />
    </div>
  );
};

export default Loader;
