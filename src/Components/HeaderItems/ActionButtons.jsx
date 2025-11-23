
import Buttons from "../CommonComponents/Buttons";

function ActionButtons() {
  return (
    <div className="flex items-center gap-4 text-xl">
      <Buttons
        text="Sign In"
        className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
        
      />

      <Buttons
        text="Get Started"
        showArrow={false}
        className="bg-[#030213] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
    
      />
    </div>
  );
}

export default ActionButtons;
