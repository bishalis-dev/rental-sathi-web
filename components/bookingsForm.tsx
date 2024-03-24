import Link from "next/link";
// import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function BookingsForm({ vehicle, handleSelection }: any) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  // const formRef = useRef();
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap flex-col gap-5 p-3 max-h-35 border">
          <div className="w-[10%] block text-center rounded-lg cursor-pointer">
            <img
              src={vehicle.vehicleImage}
              className="object-cover "
              alt="Car"
            />
          </div>
          <div className="w-1/3 p-1 text-left rounded-lg cursor-pointer">
            <h2 className="booking-title">{vehicle.vehicleName}</h2>
            <p>₹{vehicle.vehiclePrice} / day</p>
          </div>
        </div>
        <section className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
            <div className="w-10/12 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
              <div className="p-2 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Provide Details to Confirm Booking
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  id="bookingData"
                  onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="pickupdate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Pickup Date:
                    </label>
                    <input
                      type="date"
                      {...register("pickupdate")}
                      id="pickupdate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="2024/03/25"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Where are you going?
                    </label>
                    <input
                      type="text"
                      {...register("location")}
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mustang, Rara"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dropdate"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Drop Date:
                    </label>
                    <input
                      type="date"
                      {...register("dropdate")}
                      id="dropdate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="2024/03/25"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="license"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      License Number:
                    </label>
                    <input
                      type="text"
                      {...register("license")}
                      id="license"
                      placeholder="12856103"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="citizenship"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Citizenship Number:
                    </label>
                    <input
                      type="text"
                      {...register("citizenship")}
                      id="citizenship"
                      placeholder="52-06-897-12345"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required={true}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    // onClick={() =>
                    // function () {
                    // console.log("Form Data", formRef.current);
                    // var formObjectData = Object.fromEntries(
                    //   new FormData(document.getElementById("bookingsData")
                    // );
                    // handleSelection(
                    //   {
                    //     vehicleType: vehicle.vehicleType,
                    //     vehicleId: vehicle.vehicleId,
                    //   },
                    //   3
                    // );
                    // }
                    // }
                  >
                    Create Bookings
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
