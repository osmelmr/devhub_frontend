export const Button = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const handleClick = () => {
    console.log(api_url);
  };
  return (
    <>
      <button onClick={handleClick}>showURL</button>
    </>
  );
};
