import React from 'react';
import { Truck, Leaf, RefreshCcw, DollarSign } from 'lucide-react';

const ServiceFeatures: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Feature 1 */}
        <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mb-4 text-green-600">
            <Truck className="w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
            Free shipping on all US order or order above $200
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mb-4 text-green-600">
            <Leaf className="w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">24x7 Support</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
            Contact us 24 hours a day, 7 days a week
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mb-4 text-green-600">
            <RefreshCcw className="w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">30 Days Return</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
            Simply return it within 30 days for an exchange
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mb-4 text-green-600">
            <DollarSign className="w-10 h-10 mx-auto" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Secure</h3>
          <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
            All transactions are secure and encrypted
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;
