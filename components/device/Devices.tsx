import { Device } from './Device';
import { useGetDevices } from './hooks/useGetDevices';

export const Devices = () => {
    const { data: devices } = useGetDevices();

    return (
        <div className="bg-white max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {devices && devices.map((device) => <Device key={device.id} {...device} />)}
        </div>
    );
};