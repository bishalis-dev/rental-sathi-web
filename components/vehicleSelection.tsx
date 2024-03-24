export default function VehicleSelection({ handleSelection, vehicleType }) {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap gap-5 p-3 max-h-35 border">
          <div className="w-1/4 block text-center rounded-lg cursor-pointer">
            <img
              src="https://cdni.autocarindia.com/ExtraImages/20230208094150_500_1740.JPG"
              className="aspect-video object-cover "
              alt="Car"
            />
          </div>
          <div className="w-1/3 p-1 text-left rounded-lg cursor-pointer">
            <h2 className="item-title">MG Hector facelift</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 features">
                <p>
                  <span>Seats: </span> 4
                </p>
                <p>
                  <span>Mielage: </span> 15 kmpl
                </p>
                <p>
                  <span>Travel: </span> 2000 km
                </p>
              </div>
              <div className="w-1/2 features">
                <p>Air Conditioning</p>
                <p>Air Conditioning</p>
                <p>Air Conditioning</p>
              </div>
            </div>
          </div>
          <div className="w-1/4 p-1 text-center rounded-lg cursor-pointer">
            <h2 className="item-title">Estimated Price </h2>
            <h2 className="item-title">₹ 10,000 / day</h2>
            <button
              onClick={() => handleSelection({
                vehicleType: vehicleType,
                vehicleId: 100001,
              }, 3)}
              className="bg-violet-300 text-white px-3 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
