import type Prisma from '@prisma/client';

type DeviceProps = Readonly<Prisma.device>;

export const Device = (device: DeviceProps) => {
    const { id, deviceName} = device;

    return (
        <article className="group relative">
            <div className="mt-4 flex justify-between">
                <h2 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                </h2>
                <p className="text-sm font-medium text-gray-900"></p>
            </div>
            <button className="mt-6 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                {deviceName}
            </button>
            <button className="mt-4 group outline-none relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-300 focus:outline-none">
                Włącz/Wyłacz
            </button>
        </article>
    );
};