export default function VehicleTypeSelection({ handleSelection }) {
  return (
    <div className="flex flex-wrap gap-7">
      <div
        className="w-1/4 p-4 block bg-slate-100 text-center rounded-lg cursor-pointer"
        onClick={() => handleSelection("cars", 2)}
      >
        <img
          src="/four-wheeler-vehicle-icon.webp"
          className="aspect-square object-cover"
          alt="Four Wheeler vehicle icon"
        />
        Cars
      </div>
      <div
        className="w-1/4 p-4 block bg-slate-100 text-center rounded-lg cursor-pointer"
        onClick={() => handleSelection("bikes", 2)}
      >
        <img
          src="/motorcycle-icon.webp"
          alt="Motorcycle vehicle icon"
          className="aspect-square object-cover"
        />
        Bikes
      </div>
    </div>
  );
}
