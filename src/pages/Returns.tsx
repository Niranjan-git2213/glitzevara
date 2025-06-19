import React, { useState } from 'react';
import { RotateCcw, Package, CheckCircle, AlertCircle } from 'lucide-react';

const Returns: React.FC = () => {
  const [activeTab, setActiveTab] = useState('policy');
  const [returnForm, setReturnForm] = useState({
    orderId: '',
    reason: '',
    description: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setReturnForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle return request submission
    console.log('Return request:', returnForm);
    alert('Return request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Returns & Exchange
          </h1>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row bg-white rounded-lg p-1 mb-8 shadow-sm">
            <button
              onClick={() => setActiveTab('policy')}
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-colors ${
                activeTab === 'policy'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Return Policy
            </button>
            <button
              onClick={() => setActiveTab('request')}
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-colors ${
                activeTab === 'request'
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Request Return
            </button>
          </div>

          {/* Return Policy Tab */}
          {activeTab === 'policy' && (
            <div className="luxury-card p-8">
              <div className="text-center mb-8">
                <RotateCcw className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">30-Day Return Policy</h2>
                <p className="text-gray-600">
                  We want you to be completely satisfied with your purchase
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
                  <p className="text-sm text-gray-600">
                    Simple online return process with free pickup
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Package className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Original Packaging</h3>
                  <p className="text-sm text-gray-600">
                    Items must be in original condition and packaging
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <AlertCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Check</h3>
                  <p className="text-sm text-gray-600">
                    All returns are quality checked before refund
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Return Conditions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Items must be returned within 30 days of delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Products must be in original condition with all tags attached</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Original packaging and accessories must be included</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Certificate of authenticity must be returned with the item</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Non-Returnable Items</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Customized or personalized jewelry</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Items damaged due to misuse or normal wear</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Items without original packaging or tags</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Process</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 mb-2">
                      Once we receive and inspect your returned item, we will process your refund within 5-7 business days.
                    </p>
                    <p className="text-gray-600">
                      Refunds will be credited to your original payment method. Please allow additional time for your bank to process the refund.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Request Return Tab */}
          {activeTab === 'request' && (
            <div className="luxury-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Return</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order ID *
                    </label>
                    <input
                      type="text"
                      name="orderId"
                      value={returnForm.orderId}
                      onChange={handleInputChange}
                      placeholder="e.g. PM1570"
                      className="w-full luxury-input px-4 py-3 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Return *
                    </label>
                    <select
                      name="reason"
                      value={returnForm.reason}
                      onChange={handleInputChange}
                      className="w-full luxury-input px-4 py-3 rounded-lg"
                      required
                    >
                      <option value="">Select a reason</option>
                      <option value="defective">Defective/Damaged item</option>
                      <option value="wrong-item">Wrong item received</option>
                      <option value="size-issue">Size/Fit issue</option>
                      <option value="not-as-described">Not as described</option>
                      <option value="changed-mind">Changed my mind</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={returnForm.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Please provide details about the issue..."
                    className="w-full luxury-input px-4 py-3 rounded-lg"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={returnForm.email}
                      onChange={handleInputChange}
                      className="w-full luxury-input px-4 py-3 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={returnForm.phone}
                      onChange={handleInputChange}
                      className="w-full luxury-input px-4 py-3 rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• We'll review your return request within 24 hours</li>
                    <li>• If approved, we'll arrange free pickup from your address</li>
                    <li>• Once we receive the item, refund will be processed within 5-7 days</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full luxury-button py-3"
                >
                  Submit Return Request
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Returns;