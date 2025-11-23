import Buttons from "../CommonComponents/Buttons";

function ActionButtons() {
  return (
    <div className="flex items-center gap-4 text-lg">
      <Buttons
        text="Sign In"
        className=" font-inter font-medium text-[14px]  text-[#0A0A0A]"
      />

      <Buttons
        text="Get Started"
        showArrow={false}
        className="bg-[#030213] font-inter font-medium text-[14px]  text-white"
      />
    </div>
  );
}

export default ActionButtons;
