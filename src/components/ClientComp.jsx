const ClientComp = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap pb-[100px] pt-[30px]">
        <div className="basis-1/2">
          <h1 className="text-center font-poppins font-extrabold text-3xl px-[30px]">
            Some of our awesome clients
          </h1>
        </div>
        <div className="basis-1/2 pt-[50px] text-center">
          <img
            src="../../logo_1.jpg"
            alt="logo_1"
            className="inline m-[10px]"
          ></img>
          <img
            src="../../logo_2.jpg"
            alt="logo_2"
            className="inline m-[10px]"
          ></img>
          <img
            src="../../logo_3.jpg"
            alt="logo_3"
            className="inline m-[10px]"
          ></img>
          <img
            src="../../logo_4.jpg"
            alt="logo_4"
            className="inline m-[10px]"
          ></img>
          <img
            src="../../logo_5.jpg"
            alt="logo_5"
            className="inline m-[10px]"
          ></img>
          <img
            src="../../logo_6.jpg"
            alt="logo_6"
            className="inline m-[10px]"
          ></img>
        </div>
      </div>
    </>
  );
};

export default ClientComp;
