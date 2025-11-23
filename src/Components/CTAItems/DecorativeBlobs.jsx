export default function DecorativeBlobs() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#155DFC] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2">
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9810FA] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-72 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      
    </div>
    
  );
}
