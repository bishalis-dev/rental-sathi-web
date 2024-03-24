'use client';
import BookingsForm from '@/components/bookingsForm';
import VehicleSelection from '@/components/vehicleSelection';
import VehicleTypeSelection from '@/components/vehicleTypeSelection';
import { useState } from 'react';

export default function VehiclesPage() {
  const [selectedType, setSelectedType] = useState(null);
  const [activeStep, setActiveStep] = useState(1); // Default to step 1

  const handleSelection = (data,step) => {

    if(data === 'cars' || data === 'bikes'){
    setSelectedType(data);
    }else{
      setSelectedType(null);
    }
    setActiveStep(step); // Move to step 2 when a type is selected
  };

  return (
    <>
      <section className="flex bg-1 items-center justify-center py-10">
        <div className="w-4/5 mx-auto flex flex-wrap gap-6">
        <div className="selection-left-side">
            <div className="px-6 py-6 bg-white rounded-lg">
              {/* list of steps and primary color as background when active */}
              <ul className="list-none font-rental-p">
                <li className={`${activeStep === 1 ? 'bg-violet-300' : 'bg-slate-100'} p-3 mb-3 rounded-lg font-bold cursor-pointer`}>
                  Select Vehicle Type
                </li>
                <li className={`${activeStep === 2 ? 'bg-violet-300' : 'bg-slate-100'} p-3 mb-3 rounded-lg font-bold cursor-pointer`}>
                  Select Vehicles
                </li>
                <li className={`${activeStep === 3 ? 'bg-violet-300' : 'bg-slate-100'} p-3 mb-3 rounded-lg font-bold cursor-pointer`}>
                  Fill Booking Details
                </li>
                <li className={`${activeStep === 4 ? 'bg-violet-300' : 'bg-slate-100'} p-3 mb-3 rounded-lg font-bold cursor-pointer`}>
                  Confirm Booking
                </li>
              </ul>
            </div>
            </div>
          <div className="selection-right-side">
            <div className="px-6 py-6 bg-white rounded-lg">
              {activeStep === 1 && (
                VehicleTypeSelection({ handleSelection })
              )}
              {activeStep === 2 && (
                <VehicleSelection handleSelection={handleSelection} vehicleType={selectedType} />
              )}
              {activeStep === 3 && (
               BookingsForm({vehicle: {vehicleImage: 'https://cdni.autocarindia.com/ExtraImages/20230208094150_500_1740.JPG', vehicleName: 'MG Hector facelift', vehiclePrice: 10000, vehicleType: 'cars', vehicleId: 100001}, handleSelection})
               )}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
