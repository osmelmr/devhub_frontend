import { useAppDispatch } from "../redux/storeHooks";
import { removeDone } from "../redux/todosSlice";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(removeDone());
  };
  return (
    <>
      <footer className="mt-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
        <button
          onClick={handleClick}
          className="hover:text-red-500 dark:hover:text-red-400"
        >
          Limpiar completadas
        </button>
        <span className="italic">Tip: arrastra para reordenar</span>
      </footer>
    </>
  );
};
