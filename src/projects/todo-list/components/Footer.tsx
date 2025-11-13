import { useAppDispatch } from "../../../redux/hooks";
import { removeDone } from "../redux/todosSlice";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(removeDone());
  };
  return (
    <>
      <footer className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <button onClick={handleClick} className="hover:text-red-500">
          Limpiar completadas
        </button>
        <span className="italic">Tip: arrastra para reordenar</span>
      </footer>
    </>
  );
};
