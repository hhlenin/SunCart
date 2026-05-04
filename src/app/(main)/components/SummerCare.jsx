import React from 'react';
import {commonDivClass} from "@/app/lib/css";

const SummerCare = () => {
    return (
        <div className={`summer-care space-y-2 ${commonDivClass("bg-transparent", false)} mt-30`}>
            <h2 className="text-5xl font-extrabold">Summer Care Tips</h2>
            <p className="text-gray-500 text-xl font-medium">
                Helpful lifestyle blocks to enrich the home page below the product section.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-5">
                <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                    <div className="card-body space-y-2">
                        <div className="h-20 w-20 text-5xl bg-blue-200 flex justify-center items-center rounded-lg">💧</div>
                        <h2 className="text-2xl font-bold">Stay Hydrated</h2>
                        <p className="text-2xl font-medium text-gray-500">
                            Feature quick hydration reminders and bottle-focused products for hot weather routines.
                        </p>
                    </div>
                </div>
                <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                    <div className="card-body space-y-2">
                        <div className="h-20 w-20 text-5xl bg-blue-400 flex justify-center items-center rounded-lg">🧴</div>
                        <h2 className="text-2xl font-bold">Use Sunscreen</h2>
                        <p className="text-2xl font-medium text-gray-500">
                            Highlight SPF essentials with trusted ratings, short descriptions, and clear stock details.
                        </p>
                    </div>
                </div>
                <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                    <div className="card-body space-y-2">
                        <div className="h-20 w-20 text-5xl bg-amber-300 flex justify-center items-center rounded-lg">🕶️</div>
                        <h2 className="text-2xl font-bold">Protect your eyes</h2>
                        <p className="text-2xl font-medium text-gray-500">
                            Promote UV-protection accessories in clean cards with bold pricing and accessible CTAs.
                        </p>
                    </div>
                </div>
                <div className=" rounded-xl bg-base-100 shadow-sm p-5 text-left">
                    <div className="card-body space-y-2">
                        <div className="h-20 w-20 text-5xl bg-green-300 flex justify-center items-center rounded-lg">🌿</div>
                        <h2 className="text-2xl font-bold">After-Sun Care</h2>
                        <p className="text-2xl font-medium text-gray-500">
                            Add soothing gel and skin-repair products under a calm, wellness-style section.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SummerCare;