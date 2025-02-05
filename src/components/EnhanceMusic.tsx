import { useState, useEffect } from 'react';
import jblImage from '@/assets/images/jbl.png';

export function EnhanceMusic() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
            <div className="text-white space-y-6 lg:w-1/2 mb-8 lg:mb-0">
              <div className="text-green-500 font-medium">Categories</div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Enhance Your <br />
                Music Experience
              </h2>
              
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <span className="font-bold text-xl">{timeLeft.hours}</span>
                  </div>
                  <span className="text-sm">Hours</span>
                </div>
                <div className="text-center">
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <span className="font-bold text-xl">{timeLeft.days}</span>
                  </div>
                  <span className="text-sm">Days</span>
                </div>
                <div className="text-center">
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <span className="font-bold text-xl">{timeLeft.minutes}</span>
                  </div>
                  <span className="text-sm">Minutes</span>
                </div>
                <div className="text-center">
                  <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center mb-2">
                    <span className="font-bold text-xl">{timeLeft.seconds}</span>
                  </div>
                  <span className="text-sm">Seconds</span>
                </div>
              </div>

              <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition">
                Buy Now!
              </button>
            </div>

            <div className="lg:w-1/2">
              <img
                src={jblImage}
                alt="JBL Speaker"
                className="w-full h-auto object-contain"
                style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 