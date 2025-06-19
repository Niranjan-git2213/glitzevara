import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const TrackOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const mockOrderData = {
    id: 'PM1570',
    status: 'In Transit',
    estimatedDelivery: '2024-01-20',
    items: [
      {
        name: 'Elegant Pearl Necklace',
        image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        price: 2899,
        quantity: 1
      }
    ],
    timeline: [
      {
        status: 'Order Placed',
        date: '2024-01-15',
        time: '10:30 AM',
        completed: true,
        description: 'Your order has been placed successfully'
      },
      {
        status: 'Order Confirmed',
        date: '2024-01-15',
        time: '11:45 AM',
        completed: true,
        description: 'Your order has been confirmed and is being prepared'
      },
      {
        status: 'Shipped',
        date: '2024-01-16',
        time: '2:15 PM',
        completed: true,
        description: 'Your order has been shipped and is on its way'
      },
      {
        status: 'In Transit',
        date: '2024-01-17',
        time: '9:00 AM',
        completed: true,
        description: 'Your order is currently in transit'
      },
      {
        status: 'Out for Delivery',
        date: '2024-01-20',
        time: 'Expected',
        completed: false,
        description: 'Your order will be out for delivery'
      },
      {
        status: 'Delivered',
        date: '2024-01-20',
        time: 'Expected',
        completed: false,
        description: 'Your order will be delivered'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001'
    }
  };

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (orderId.toLowerCase().includes('pm1570')) {
      setOrderData(mockOrderData);
    } else {
      setError('Order not found. Please check your order ID and try again.');
      setOrderData(null);
    }

    setIsLoading(false);
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) {
      return <Clock className="w-5 h-5 text-gray-400" />;
    }

    switch (status) {
      case 'Order Placed':
      case 'Order Confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Shipped':
      case 'In Transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'Out for Delivery':
      case 'Delivered':
        return <Package className="w-5 h-5 text-green-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Track Your Order
          </h1>

          {/* Search Form */}
          <div className="luxury-card p-6 mb-8">
            <form onSubmit={handleTrackOrder} className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Order ID starting with #PM"
                  className="w-full luxury-input pl-10 pr-4 py-3 rounded-lg"
                  required
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full luxury-button mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Tracking...' : 'Track Order'}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
                {error}
              </div>
            )}

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Kindly ensure that you've entered your Order ID correctly, starting with #PM</p>
              <p className="mt-1">Example: PM1570</p>
            </div>
          </div>

          {/* Order Details */}
          {orderData && (
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="luxury-card p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Order #{orderData.id}</h2>
                    <p className="text-gray-600">
                      Estimated delivery: {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                    </p>
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    orderData.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800'
                      : orderData.status === 'In Transit'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {orderData.status}
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="font-semibold text-gray-900">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Timeline */}
              <div className="luxury-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Timeline</h3>
                <div className="space-y-6">
                  {orderData.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {getStatusIcon(event.status, event.completed)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            event.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {event.status}
                          </h4>
                          <span className={`text-sm ${
                            event.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {event.date} {event.time !== 'Expected' && `at ${event.time}`}
                          </span>
                        </div>
                        <p className={`text-sm mt-1 ${
                          event.completed ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="luxury-card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900">{orderData.shippingAddress.name}</p>
                  <p>{orderData.shippingAddress.address}</p>
                  <p>
                    {orderData.shippingAddress.city}, {orderData.shippingAddress.state} - {orderData.shippingAddress.pincode}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;